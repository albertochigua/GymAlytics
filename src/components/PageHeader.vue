<template>
  <div class="page-header">
    <div class="logo-title">
      <img src="@/assets/heart-rate.png" alt="GymAlytics Logo" class="logo" />
      <h1>GymAlytics</h1>
    </div>
    <h2 class="module-title">{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.page-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.logo-title {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  width: 48px;
  height: 48px;
}

h1 {
  font-size: 1.5rem;
  margin: 0;
  color: #2c3e50;
}

.module-title {
  margin-top: 1rem;
  font-size: 2rem;
  color: #34495e;
}
</style>
