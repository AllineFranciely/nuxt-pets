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

    <h3 class="name">{{ pet.name }}</h3>
    <p class="tag">{{ pet.tag }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps({
  pet: { type: Object, required: true }
})
</script>

<style scoped>
.pet-card {
  background: #e3f2fd;
  border: 2px solid #410201ff;
  border-radius: 16px;
  padding: 12px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 8px;

  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.08),
    0 8px 16px rgba(0, 0, 0, 0.12);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.pet-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 6px 12px rgba(0, 0, 0, 0.14),
    0 14px 28px rgba(0, 0, 0, 0.18);
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.name {
  color: #4b2e83;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 4px;
}

.tag {
  color: #555;
  font-size: 0.85rem;
}
</style>
