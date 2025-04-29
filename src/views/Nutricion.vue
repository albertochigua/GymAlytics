<template>
  <div>
    <!-- Card para gráfico -->
    <section class="card-grafico">
      <h3>Calorías consumidas por día</h3>
      <div class="chart-wrapper">
        <canvas ref="caloriasConsumidasChart"></canvas>
      </div>
    </section>

    <!-- Tabla responsiva -->
    <section class="tabla-nutricion">
      <h3>Detalle Nutricional Semanal</h3>
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Día</th>
              <th>Calorías (kcal)</th>
              <th>Proteínas (g)</th>
              <th>Carbohidratos (g)</th>
              <th>Grasas (g)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dia, index) in ingestaCalorica" :key="index">
              <td>{{ dia.dia }}</td>
              <td>{{ dia.calorias }}</td>
              <td>{{ dia.proteinas }}</td>
              <td>{{ dia.carbohidratos }}</td>
              <td>{{ dia.grasas }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Chart } from "chart.js/auto";
import { gymAnalyticsData } from "@/data/gymAnalyticsData.js";

const caloriasConsumidasChart = ref(null);
const ingestaCalorica = gymAnalyticsData.nutricion.ingestaCalorica;

onMounted(() => {
  new Chart(caloriasConsumidasChart.value, {
    type: "line",
    data: {
      labels: ingestaCalorica.map((d) => d.dia),
      datasets: [
        {
          label: "Calorías Consumidas",
          data: ingestaCalorica.map((d) => d.calorias),
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
});
</script>

<style scoped>
.card-grafico {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  text-align: center;
}

.card-grafico h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.chart-wrapper {
  width: 100%;
  height: 300px;
  position: relative;
}

.chart-wrapper canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}

.tabla-nutricion {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.tabla-nutricion h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #2c3e50;
}

/* Contenedor responsivo */
.table-responsive {
  overflow-x: auto;
  width: 100%;
}

table {
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
  margin-top: 1rem;
}

thead {
  background-color: #ecf0f1;
}

th,
td {
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid #dfe6e9;
  font-size: 1rem;
  color: #34495e;
}

tbody tr:hover {
  background-color: #f1f2f6;
}
</style>
