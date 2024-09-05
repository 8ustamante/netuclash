<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-between w-100"
      >
        <!-- Logo y nombre -->
        <a
          class="navbar-brand d-flex align-items-center"
          href="https://flowbite.com/"
        >
          <div>
            <span class="fs-4 fw-semibold" style="color: #f2b705"
              >NETUCLASH</span
            >
            <p class="fs-6" style="color: #f2f2eb">
              Distribuciones de aldeas para clash of clans
            </p>
          </div>
        </a>

        <!-- Botón para móvil -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Sección de enlaces y buscador -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul
            class="navbar-nav col-12 col-lg-6 me-lg-6 mb-2 justify-content-center align-items-center mb-md-0 ms-auto"
          >
            <!-- Buscador -->
            <input
              type="search"
              class="form-control w-auto"
              placeholder="Search..."
              aria-label="Search"
            />

            <!-- Enlaces generados dinámicamente -->
            <li class="nav-item" v-for="link in links" :key="link.url">
              <a
                class="nav-link text-white px-1"
                :href="link.url"
                :class="{ active: link.active }"
                aria-current="page"
                >{{ link.label }}</a
              >
            </li>

            <!-- Dropdown de usuario -->
            <li class="nav-item dropdown">
              <a
                href="#"
                class="d-block link-body-emphasis text-white text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  class="rounded-circle"
                />
              </a>
              <ul class="dropdown-menu text-small dropdown-menu-end">
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
