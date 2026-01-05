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

h1 {
  text-align: center;
  color: #4b2e83;
  margin: 24px 0;
  position: relative;
}

h1::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: #9e0404ff;
  margin: 8px auto 0;
  border-radius: 4px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-top: 12px;
}

/* desktop médio */
@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* tablet */
@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* mobile */
@media (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* mobile pequeno */
@media (max-width: 400px) {
  .grid {
    grid-template-columns: 1fr;
  }
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

button {
  border: 1px solid #9e0404ff;
}
</style>
