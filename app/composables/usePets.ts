import { ref } from 'vue';
import { $fetch } from 'ofetch'

const cache = {
  pets: null as any | null,
  petById: {} as Record<string, any>
};

export function usePets() {
  const pets = ref<any[]>(cache.pets ?? []);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchPets() {
    if (cache.pets) {
      pets.value = cache.pets;
      return;
    }
    loading.value = true;
    error.value = null;
    try {
      const res = await $fetch('/api/pets');
      pets.value = res.data;
      cache.pets = res.data;
    } catch (err: any) {
      error.value = err?.message || 'Erro';
    } finally {
      loading.value = false;
    }
  }

  async function fetchPet(id: string) {
    if (cache.petById[id]) return cache.petById[id];
    try {
      const res = await $fetch(`/api/pets/${id}`);
      cache.petById[id] = res.data;
      return res.data;
    } catch (err) {
      throw err;
    }
  }

  return { pets, fetchPets, fetchPet, loading, error };
}
