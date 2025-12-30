<template>
  <main>
    <h1>Pets para adoção</h1>

    <div class="grid">
      <!-- LOADING -->
      <SkeletonCard
        v-if="loading"
        v-for="n in 10"
        :key="n"
      />

      <!-- ERRO -->
      <ErrorMessage
        v-else-if="error"
        :message="error"
      />

      <!-- LISTA -->
      <PetCard
        v-else
        v-for="p in pets"
        :key="p.id"
        :pet="p"
      />
    </div>

    <!-- PAGINAÇÃO -->
    <div class="pagination">
      <button
        :disabled="loading || page <= 1"
        @click="fetchPets(page - 1)"
      >
        Anterior
      </button>

      <span>{{ page }} / {{ totalPages }}</span>

      <button
        :disabled="loading || page >= totalPages"
        @click="fetchPets(page + 1)"
      >
        Próxima
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { usePets } from '~/composables/usePets'
import PetCard from '~/components/PetCard.vue'
import SkeletonCard from '~/components/SkeletonCard.vue'
import ErrorMessage from '~/components/ErrorMessage.vue'

const {
  pets,
  fetchPets,
  loading,
  error,
  page,
  totalPages
} = usePets()

// SSR
await fetchPets()
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  margin-top: 12px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
}

button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
