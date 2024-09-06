<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="https://flowbite.com/">
        <div>
          <span class="fs-4 fw-semibold text-warning">NETUCLASH</span>
          <p class="fs-6 text-light mb-0">Distribuciones de aldeas para clash of clans</p>
        </div>
      </a>
  
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto d-flex align-items-center gap-2">
          <li class="nav-item">
            <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-warning">Publicar aldea</button>
          </li>
          <li class="nav-item" v-for="link in links" :key="link.url">
            <a class="nav-link text-white px-3" :href="link.url" :class="{ active: link.active }" aria-current="page">{{ link.label }}</a>
          </li>
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
        </ul>
      </div>
    </div>
  </nav>
  
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
