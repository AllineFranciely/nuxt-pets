<template>
  <article class="skeleton-card">
    <div class="image shimmer"></div>

    <div class="content">
      <div class="line title shimmer"></div>
      <div class="line tag shimmer"></div>
    </div>
  </article>
</template>

<style scoped>
.skeleton-card {
  border: 2px solid #410201ff;
  border-radius: 16px;
  padding: 10px;

  background: #f5f0ff;

  display: flex;
  flex-direction: column;
  gap: 10px;

  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.08),
    0 12px 20px rgba(0, 0, 0, 0.12);
}

.image {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  background: #e3f2fd;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.line {
  height: 14px;
  border-radius: 8px;
  background: #ddd;
}

.line.title {
  width: 70%;
  height: 16px;
}

.line.tag {
  width: 50%;
}

.shimmer {
  position: relative;
  overflow: hidden;
}

.shimmer::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-100%);

  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.6),
    transparent
  );

  animation: shimmer 1.2s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
