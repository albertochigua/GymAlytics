<template>
  <div style="height: 400px">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Chart } from "chart.js/auto";

const chartCanvas = ref(null);

onMounted(() => {
  new Chart(chartCanvas.value, {
    type: "bar",
    data: {
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      datasets: [
        {
          label: "Calorías Quemadas",
          data: [1200, 1500, 1700, 2000],
          backgroundColor: "#3498db",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Progreso de Entrenamiento",
        },
      },
    },
  });
});
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
