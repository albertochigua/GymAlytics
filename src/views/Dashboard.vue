<template>
  <div>
    <section class="summary-cards">
      <div class="summary-card">
        <h3>Calorías quemadas (semana)</h3>
        <p>{{ totalCaloriasQuemadas }} kcal</p>
      </div>
      <div class="summary-card">
        <h3>Calorías consumidas (promedio)</h3>
        <p>{{ promedioCaloriasConsumidas }} kcal</p>
      </div>
      <div class="summary-card">
        <h3>Progreso de metas</h3>
        <p>{{ progresoActual }}%</p>
      </div>
    </section>

    <section class="charts-grid">
      <div class="chart-container">
        <h4>Calorías Quemadas por Día</h4>
        <div class="chart-wrapper">
          <canvas ref="caloriasQuemadasChart"></canvas>
        </div>
      </div>

      <div class="chart-container">
        <h4>Calorías Consumidas por Día</h4>
        <div class="chart-wrapper">
          <canvas ref="caloriasConsumidasChart"></canvas>
        </div>
      </div>

      <div class="chart-container">
        <h4>Progreso de Metas Mensual</h4>
        <div class="chart-wrapper">
          <canvas ref="progresoMetasChart"></canvas>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { Chart } from "chart.js/auto";

import { gymAnalyticsData } from "@/data/gymAnalyticsData.js";

const caloriasQuemadasChart = ref(null);
const caloriasConsumidasChart = ref(null);
const progresoMetasChart = ref(null);

const totalCaloriasQuemadas = computed(() =>
  gymAnalyticsData.entrenamiento.caloriasQuemadasSemanal.reduce(
    (a, b) => a + b,
    0
  )
);

const promedioCaloriasConsumidas = computed(() => {
  const total = gymAnalyticsData.nutricion.ingestaCalorica.reduce(
    (acc, d) => acc + d.calorias,
    0
  );
  return Math.round(total / gymAnalyticsData.nutricion.ingestaCalorica.length);
});

const progresoActual = computed(
  () => gymAnalyticsData.metas.progresoMensual.at(-1)?.porcentaje || 0
);

onMounted(() => {
  new Chart(caloriasQuemadasChart.value, {
    type: "bar",
    data: {
      labels: gymAnalyticsData.entrenamiento.diasSemana,
      datasets: [
        {
          label: "Calorías Quemadas",
          data: gymAnalyticsData.entrenamiento.caloriasQuemadasSemanal,
          backgroundColor: "#1abc9c",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top" },
      },
    },
  });

  new Chart(caloriasConsumidasChart.value, {
    type: "line",
    data: {
      labels: gymAnalyticsData.nutricion.diasSemana,
      datasets: [
        {
          label: "Calorías Consumidas",
          data: gymAnalyticsData.nutricion.ingestaCalorica.map(
            (d) => d.calorias
          ),
          borderColor: "#3498db",
          backgroundColor: "#3498db40",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top" },
      },
    },
  });

  new Chart(progresoMetasChart.value, {
    type: "line",
    data: {
      labels: gymAnalyticsData.metas.progresoMensual.map((m) => m.mes),
      datasets: [
        {
          label: "Progreso (%)",
          data: gymAnalyticsData.metas.progresoMensual.map((m) => m.porcentaje),
          borderColor: "#e67e22",
          backgroundColor: "#e67e2240",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top" },
      },
    },
  });
});
</script>

<style scoped>
.summary-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.summary-card {
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  width: 250px;
  text-align: center;
}

.summary-card h3 {
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
}

.summary-card p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.chart-container {
  background: #ffffff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.chart-container h4 {
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #2c3e50;
}

.chart-wrapper {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.chart-wrapper canvas {
  position: absolute;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>
