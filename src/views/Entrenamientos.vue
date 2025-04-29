<template>
  <div>
    <section class="entrenamientos-grid">
      <div
        v-for="(sesion, index) in sesionesSemana"
        :key="index"
        class="entrenamiento-card"
      >
        <h4>{{ sesion.dia }}</h4>
        <div class="info">
          <span class="material-symbols-outlined">fitness_center</span>
          <p>Tipo: {{ sesion.tipo }}</p>
        </div>
        <div class="info">
          <span class="material-symbols-outlined">schedule</span>
          <p>Duración: {{ sesion.duracionMin }} min</p>
        </div>
        <div class="info">
          <span class="material-symbols-outlined">local_fire_department</span>
          <p>Calorías: {{ sesion.caloriasQuemadas }} kcal</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { gymAnalyticsData } from "@/data/gymAnalyticsData.js";

const sesionesSemana = gymAnalyticsData.entrenamiento.sesiones;
</script>

<style scoped>
.entrenamientos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding-top: 1rem;
}

.entrenamiento-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.entrenamiento-card h4 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
}

.info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
}

.info p {
  margin: 0;
  font-size: 1rem;
  color: #34495e;
}

.material-symbols-outlined {
  font-size: 24px;
  color: #1abc9c;
}
</style>
