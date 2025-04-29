<template>
  <div>
    <section class="summary-progress">
      <h3>Progreso acumulado</h3>
      <div class="progress-wrapper">
        <canvas ref="progresoChart"></canvas>
      </div>
    </section>

    <section class="metas-grid">
      <div
        v-for="(meta, index) in metasEspecificas"
        :key="index"
        class="meta-card"
      >
        <div class="meta-content">
          <span
            class="material-symbols-outlined"
            :class="{ completed: meta.alcanzado }"
          >
            {{ meta.alcanzado ? "check_circle" : "hourglass_top" }}
          </span>
          <p>{{ meta.descripcion }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Chart } from "chart.js/auto";
import { gymAnalyticsData } from "@/data/gymAnalyticsData.js";

const progresoChart = ref(null);

const metasEspecificas = gymAnalyticsData.metas.metasEspecificas;
const progresoMensual = gymAnalyticsData.metas.progresoMensual;

onMounted(() => {
  new Chart(progresoChart.value, {
    type: "line",
    data: {
      labels: progresoMensual.map((m) => m.mes),
      datasets: [
        {
          label: "Progreso (%)",
          data: progresoMensual.map((m) => m.porcentaje),
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
.summary-progress {
  margin-bottom: 2rem;
  text-align: center;
}

.summary-progress h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.progress-wrapper {
  width: 100%;
  height: 300px;
  position: relative;
}

.progress-wrapper canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}

.metas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.meta-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.meta-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.meta-content p {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #34495e;
}

.material-symbols-outlined {
  font-size: 48px;
  color: #e67e22;
}

.material-symbols-outlined.completed {
  color: #1abc9c;
}
</style>
