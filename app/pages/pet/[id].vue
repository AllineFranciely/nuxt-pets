<template>
  <main>
    <SkeletonCard v-if="pending" />

    <PetDetails
      v-else-if="pet"
      :pet="pet"
    />

    <p v-else>Pet não encontrado</p>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import SkeletonCard from '~/components/SkeletonCard.vue';
import PetDetails from '~/components/PetDetails.vue';

const route = useRoute();
const id = route.params.id as string;

const { data, pending } = await useAsyncData(
  `pet-${id}`,
  () => $fetch(`/api/pets/${id}`)
);

const pet = computed(() => data.value?.data ?? null);
</script>
