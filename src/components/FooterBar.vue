<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="container-fluid" style="background-color: #171715">
    <div class="container py-3 mt-4">
      <div class="row d-flex align-items-center text-center text-md-start">
        <!-- Columna con el logo y el texto -->
        <div
          class="col-md-4 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start align-items-center"
        >
          <a
            href="/"
            class="me-2 text-body-secondary text-decoration-none lh-1"
          >
            <img src="../assets/img/logo.png" width="22" alt="" srcset="">
          </a>
          <b
            ><span class="text-white">&copy;{{ year }}, NETUCLASH</span>.</b
          >
        </div>

        <!-- Columna con los enlaces -->
        <div
          class="col-md-4 ms-auto d-flex justify-content-center justify-content-md-end"
        >
          <ul class="nav list-unstyled d-flex">
            <li class="ms-3">
              <a
                class="text-white nav-link"
                href="https://github.com/8ustamante"
              >
                <i class="fa-brands fa-github me-1"></i>8ustamante
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
