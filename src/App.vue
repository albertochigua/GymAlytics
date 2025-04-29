<template>
  <div id="app">
    <main class="main-content">
      <header class="top-bar">
        <div class="app-branding">
          <img
            src="@/assets/heart-rate.png"
            alt="GymAlytics Logo"
            class="logo"
          />
          <h1>GymAlytics</h1>
        </div>
        <button class="user-button" @click="openUserModal">
          <span class="material-symbols-outlined">account_circle</span>
          <span class="user-name">William Guevara</span>
        </button>
      </header>

      <div class="page-title">
        <h2>{{ currentTitle }}</h2>
      </div>

      <router-view />
    </main>

    <nav class="bottom-navigation">
      <router-link to="/" exact>
        <span class="material-symbols-outlined">dashboard</span>
      </router-link>
      <router-link to="/entrenamientos" exact>
        <span class="material-symbols-outlined">fitness_center</span>
      </router-link>
      <router-link to="/nutricion" exact>
        <span class="material-symbols-outlined">restaurant</span>
      </router-link>
      <router-link to="/metas" exact>
        <span class="material-symbols-outlined">flag</span>
      </router-link>
    </nav>

    <!-- Modal de Usuario -->
    <div
      v-if="showUserModal"
      class="modal-overlay"
      @click.self="closeUserModal"
    >
      <div class="modal-content">
        <h2>Información del Usuario</h2>
        <p><strong>Nombre:</strong> William Guevara</p>
        <p><strong>Edad:</strong> 28 años</p>
        <p><strong>Altura:</strong> 175 cm</p>
        <p><strong>Peso:</strong> 78 kg</p>
        <button class="close-button" @click="closeUserModal">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const showUserModal = ref(false);
const route = useRoute();

function openUserModal() {
  showUserModal.value = true;
}

function closeUserModal() {
  showUserModal.value = false;
}

const currentTitle = computed(() => {
  switch (route.path) {
    case "/":
      return "Dashboard";
    case "/entrenamientos":
      return "Entrenamientos";
    case "/nutricion":
      return "Nutrición";
    case "/metas":
      return "Metas";
    default:
      return "";
  }
});
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Arial", sans-serif;
}

.main-content {
  flex: 1;
  background-color: #ecf0f1;
  padding: 1.5rem;
  overflow-y: auto;
  padding-bottom: 5rem;
}

/* Top bar */
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  gap: 3rem;
}

.app-branding {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.app-branding h1 {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: #2c3e50;
  margin: 0;
}

.logo {
  width: clamp(32px, 5vw, 48px);
  height: clamp(32px, 5vw, 48px);
  object-fit: contain;
}

/* Usuario */
.user-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #00aaff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
}

.user-button:hover {
  background-color: #008ecc;
  transform: scale(1.05);
}

.user-name {
  white-space: normal;
  word-break: break-word;
  text-align: left;
}

/* Título del módulo */
.page-title {
  margin-bottom: 1.5rem;
}

.page-title h2 {
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: #2c3e50;
  margin: 0;
  font-weight: bold;
}

/* Bottom navigation */
.bottom-navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #00aaff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

.bottom-navigation a {
  color: #ecf0f1;
  text-decoration: none;
  flex-grow: 1;
  text-align: center;
  padding: 0.5rem 0;
  transition: background-color 0.3s, color 0.3s;
}

.bottom-navigation a.router-link-exact-active {
  background-color: #008ecc;
  color: #ffffff !important;
}

.bottom-navigation a:hover {
  color: #008ecc;
}

.material-symbols-outlined {
  font-size: 28px;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}

.modal-content {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.modal-content h2 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.modal-content p {
  margin: 0.5rem 0;
  color: #34495e;
}

.close-button {
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: #00aaff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

.close-button:hover {
  background-color: #008ecc;
}
</style>
