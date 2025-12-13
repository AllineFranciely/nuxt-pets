<template>
  <div class="error">
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ message: string }>();
</script>

<style scoped>
.error { color: #b00020; padding: 12px; border-radius: 6px; background: #fff0f0; }
</style>
