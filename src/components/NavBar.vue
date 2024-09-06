<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <!-- Brand -->
      <RouterLink class="navbar-brand d-flex align-items-center" to="/">
        <div class="d-flex flex-column text-6">
          <span class="fs-5 fw-semibold text-warning">NETUCLASH</span>
          <small class="text-light fs-6">Distribuciones para clash of clans</small>
        </div>
      </RouterLink>

      <!-- Toggler (hidden since dropdown is disabled) -->
      <button class="navbar-toggler d-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links (hidden) -->
      <div class="collapse navbar-collapse d-none" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center gap-2">
          <!-- Search bar in navbar for md and larger screens -->
          <li class="nav-item d-none d-md-block">
            <input type="search" class="form-control border-3 border-warning" placeholder="Buscar por #121, creador..." aria-label="Buscar">
          </li>

          <!-- Publicar button -->
          <!--
          <li class="nav-item">
            <button type="button" class="btn btn-warning">Publicar aldea</button>
          </li>
          -->

          <!-- Dynamic Links -->
          <!--
          <li class="nav-item" v-for="link in links" :key="link.url">
            <a class="nav-link text-white px-3" :href="link.url" :class="{ active: link.active }" aria-current="page">{{ link.label }}</a>
          </li>
          -->

          <!-- User Dropdown -->
          <!--
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle p-0" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
            </a>
            <ul class="dropdown-menu dropdown-menu-end text-small">
              <li><a class="dropdown-item" href="#">Publicar aldea</a></li>
              <li><a class="dropdown-item" href="#">Mis creaciones</a></li>
              <li><a class="dropdown-item" href="#">Mis favoritos</a></li>
              <li><a class="dropdown-item" href="#">Perfil</a></li>
              <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
            </ul>
          </li>
          -->
        </ul>
      </div>
    </div>
  </nav>

  <!-- Search bar for screens smaller than md -->
  <div class="container mt-1 mb-3 d-block d-lg-none">
    <input type="search" class="form-control border-3 border-warning" placeholder="Buscar por #121, creador..." aria-label="Buscar">
  </div>
</template>


<script>
import navLinks from "../navLinks.js";

export default {
  data() {
    return {
      userType: "noaccount", // Cambia este valor según el tipo de usuario
    };
  },
  computed: {
    links() {
      const userLinks = navLinks[this.userType] || [];
      const commonLinks = navLinks.common || [];

      // Filtrar enlaces comunes que no están en los enlaces específicos del usuario
      const uniqueCommonLinks = commonLinks.filter(
        (commonLink) =>
          !userLinks.some((userLink) => userLink.url === commonLink.url)
      );

      // Combinar enlaces únicos comunes y enlaces específicos del usuario
      return uniqueCommonLinks.concat(userLinks);
    },
  },
};
</script>
