<template>
  <main>
    <h1>Pets para adoção</h1>
    <div v-if="loading">
      <SkeletonCard v-for="n in 3" :key="n" />
    </div>

    <div v-else-if="error">
      <ErrorMessage :message="error" />
    </div>

    <div v-else class="grid">
      <PetCard v-for="p in pets" :key="p.id" :pet="p" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { usePets } from '~/composables/usePets';
import PetCard from '~/components/PetCard.vue';
import SkeletonCard from '~/components/SkeletonCard.vue';
import ErrorMessage from '~/components/ErrorMessage.vue';
const { pets, fetchPets, loading, error } = usePets();

// SSR fetch
await fetchPets();
</script>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; margin-top: 12px; }
</style>
