<template>
  <div class="skeleton">
    <div class="image"></div>
    <div class="line short"></div>
    <div class="line"></div>
  </div>
</template>

<style scoped>
.skeleton { border: 1px solid #eee; padding: 8px; border-radius: 8px; }
.image { background: #eee; height: 200px; border-radius: 6px; }
.line { height: 12px; background: #eee; margin-top: 8px; border-radius: 6px; }
.short { width: 60%; }
</style>
