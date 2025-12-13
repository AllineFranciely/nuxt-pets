<template>
  <div>
    <img :src="pet.image" :alt="pet.name" />
    <h2>{{ pet.name }}</h2>
    <p class="tag">{{ pet.tag }}</p>
    <p>{{ pet.description }}</p>
    <button @click="$router.back()">Voltar</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ pet: any }>();
</script>

<style scoped>
img { width: 100%; max-height: 400px; object-fit: cover; border-radius: 8px; }
.tag { color: #666; }
</style>
