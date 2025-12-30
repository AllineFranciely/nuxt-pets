<template>
  <article
    class="pet-card"
    @click="$router.push(`/pet/${pet.id}`)"
    role="button"
    tabindex="0"
  >
    <div class="image-wrapper">
      <img :src="pet.image" :alt="pet.name" />
    </div>

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
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* quadrado fixo */
.image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #f4f4f4;
  border-radius: 6px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* não corta a imagem */
.image-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.tag {
  color: #666;
  font-size: 0.9rem;
}
</style>
