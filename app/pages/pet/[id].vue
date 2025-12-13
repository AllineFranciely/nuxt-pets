<template>
  <main>
    <Suspense>
      <template #default>
        <AsyncPetDetails :pet="pet" />
      </template>
      <template #fallback>
        <SkeletonCard />
      </template>
    </Suspense>
  </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePets } from '~/composables/usePets';
import SkeletonCard from '~/components/SkeletonCard.vue';

const route = useRoute();
const id = route.params.id as string;
const { fetchPet } = usePets();
const pet = ref(null);

const AsyncPetDetails = defineAsyncComponent(() => import('~/components/PetDetails.vue'));

try {
  pet.value = await fetchPet(id);
} catch (err) {
  // fallback: pet ficará null e você pode mostrar mensagem
  pet.value = { name: 'Não encontrado', tag: '', image: '', description: '...' };
}
</script>
