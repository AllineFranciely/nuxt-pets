<template>
  <article class="pet-card" @click="$router.push(`/pet/${pet.id}`)" role="button" tabindex="0">
    <img :src="pet.image" :alt="pet.name" class="pet-image" />
    <h3>{{ pet.name }}</h3>
    <p class="tag">{{ pet.tag }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps({
  pet: { type: Object, required: true }
});
</script>

<style scoped>
.pet-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
}
.pet-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
}
.tag { color: #666; font-size: 0.9rem; }
</style>
