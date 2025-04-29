export const gymAnalyticsData = {
  usuario: {
    nombre: "William Guevara",
    edad: 28,
    pesoActualKg: 78,
    alturaCm: 175,
  },

  entrenamiento: {
    diasSemana: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    sesiones: [
      { dia: "Lun", tipo: "Cardio", duracionMin: 45, caloriasQuemadas: 500 },
      { dia: "Mar", tipo: "Fuerza", duracionMin: 60, caloriasQuemadas: 600 },
      { dia: "Mié", tipo: "HIIT", duracionMin: 40, caloriasQuemadas: 550 },
      { dia: "Jue", tipo: "Fuerza", duracionMin: 75, caloriasQuemadas: 700 },
      { dia: "Vie", tipo: "Cardio", duracionMin: 30, caloriasQuemadas: 400 },
      { dia: "Sáb", tipo: "Yoga", duracionMin: 30, caloriasQuemadas: 300 },
      { dia: "Dom", tipo: "Descanso", duracionMin: 0, caloriasQuemadas: 0 },
    ],
    tiposEjercicio: ["Cardio", "Fuerza", "HIIT", "Yoga", "Descanso"],
    caloriasQuemadasSemanal: [500, 600, 550, 700, 400, 300, 0],
    horasEntrenadasSemanal: [0.75, 1, 0.67, 1.25, 0.5, 0.5, 0],
  },

  nutricion: {
    diasSemana: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    ingestaCalorica: [
      {
        dia: "Lun",
        calorias: 2200,
        proteinas: 140,
        carbohidratos: 250,
        grasas: 70,
      },
      {
        dia: "Mar",
        calorias: 2100,
        proteinas: 135,
        carbohidratos: 240,
        grasas: 68,
      },
      {
        dia: "Mié",
        calorias: 2000,
        proteinas: 130,
        carbohidratos: 230,
        grasas: 65,
      },
      {
        dia: "Jue",
        calorias: 2300,
        proteinas: 145,
        carbohidratos: 260,
        grasas: 72,
      },
      {
        dia: "Vie",
        calorias: 2500,
        proteinas: 150,
        carbohidratos: 270,
        grasas: 75,
      },
      {
        dia: "Sáb",
        calorias: 2700,
        proteinas: 160,
        carbohidratos: 280,
        grasas: 80,
      },
      {
        dia: "Dom",
        calorias: 2600,
        proteinas: 155,
        carbohidratos: 275,
        grasas: 78,
      },
    ],
    calidadAlimentaria: [85, 80, 78, 88, 75, 65, 68], // Puntuación sobre 100
  },

  metas: {
    objetivoPesoKg: 75,
    objetivoCaloriasDiarias: 2200,
    progresoMensual: [
      { mes: "Ene", porcentaje: 10 },
      { mes: "Feb", porcentaje: 25 },
      { mes: "Mar", porcentaje: 30 },
      { mes: "Abr", porcentaje: 55 },
      { mes: "May", porcentaje: 68 },
      { mes: "Jun", porcentaje: 72 },
    ],
    metasEspecificas: [
      { descripcion: "Bajar grasa corporal a 15%", alcanzado: false },
      { descripcion: "Mejorar resistencia cardiovascular", alcanzado: true },
      { descripcion: "Incrementar masa muscular en piernas", alcanzado: false },
    ],
  },
};
