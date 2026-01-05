<template>
  <section class="details">
    <div class="image-wrapper">
      <img :src="pet.image" :alt="pet.name" />
    </div>

    <div class="content">
      <h2>{{ pet.name }}</h2>

      <p class="tag">{{ pet.tag }}</p>

      <p class="description">
        {{ pet.description || 'Este pet está à procura de um lar cheio de carinho 💜' }}
      </p>

      <button class="back" @click="$router.back()">
        ← Voltar para lista
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ pet: any }>()
</script>

<style scoped>
/* container */
.details {
  max-width: 820px;
  margin: 32px auto;
  padding: 24px;

  background: #f5f0ff;
  border-radius: 20px;

  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 24px;

  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.08),
    0 20px 36px rgba(0, 0, 0, 0.12);
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #e3f2fd;
  border-radius: 18px;

  border: 3px solid #410201ff;

  box-shadow:
    inset 0 2px 4px rgba(255, 255, 255, 0.7),
    inset 0 -6px 10px rgba(0, 0, 0, 0.12),
    0 8px 16px rgba(0, 0, 0, 0.18);

  overflow: hidden;
}

.image-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  color: #4b2e83;
  font-size: 1.8rem;
  margin-bottom: 6px;
}

.tag {
  color: #5e35b1;
  font-weight: 500;
  margin-bottom: 16px;
}

.description {
  color: #333;
  line-height: 1.6;
  margin-bottom: 32px;
}

.back {
  align-self: flex-start;

  background: #ede7f6;
  color: #4a148c;

  border: 2px solid #410201ff;
  border-radius: 14px;

  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;

  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.12),
    0 12px 20px rgba(0, 0, 0, 0.18);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

.back:hover {
  background: #d1c4e9;
  transform: translateY(-2px);
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.16),
    0 18px 32px rgba(0, 0, 0, 0.22);
}

/* responsivo */
@media (max-width: 768px) {
  .details {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  .content {
    text-align: center;
  }

  .back {
    align-self: center;
  }
}
</style>
