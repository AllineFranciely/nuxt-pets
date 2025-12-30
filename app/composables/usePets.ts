import { ref } from 'vue'
import { $fetch } from 'ofetch'

type Pet = {
  id: string
  name: string
  tag: string
  image: string
}

type PetsResponse = {
  data: Pet[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

const cache = {
  pages: {} as Record<number, Pet[]>,
  petById: {} as Record<string, Pet>,
  meta: null as PetsResponse['meta'] | null,
}

export function usePets() {
  const pets = ref<Pet[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const page = ref(1)
  const limit = ref(10)
  const totalPages = ref(1)

  async function fetchPets(newPage = page.value) {
    if (cache.pages[newPage]) {
      pets.value = cache.pages[newPage]
      page.value = newPage

      if (cache.meta) {
        totalPages.value = cache.meta.totalPages
      }

      return
    }

    loading.value = true
    error.value = null

    try {
      const res = await $fetch<PetsResponse>('/api/pets', {
        params: {
          page: newPage,
          limit: limit.value,
        },
      })

      pets.value = res.data
      page.value = res.meta.page
      totalPages.value = res.meta.totalPages

      cache.pages[newPage] = res.data
      cache.meta = res.meta
    } catch (err: any) {
      error.value = err?.message || 'Erro ao buscar pets'
    } finally {
      loading.value = false
    }
  }

  async function fetchPet(id: string) {
    if (cache.petById[id]) {
      return cache.petById[id]
    }

    try {
      const res = await $fetch<{ data: Pet }>(`/api/pets/${id}`)
      cache.petById[id] = res.data
      return res.data
    } catch (err) {
      throw err
    }
  }

  return {
    pets,
    loading,
    error,

    page,
    totalPages,

    fetchPets,
    fetchPet,
  }
}
