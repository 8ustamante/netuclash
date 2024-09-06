<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="container-fluid" style="background-color: #171715;">
    <div class="container d-flex flex-wrap justify-content-between align-items-center py-3 mt-4">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <b><span class="mb-3 mb-md-0 text-white">&copy;{{ year }},  NETUCLASH</span>.</b>
      </div>
  
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-white nav-link" href="https://github.com/8ustamante"><i class="fa-brands fa-github me-1"></i>8ustamante</a></li>
      </ul>
    </div>
  </footer>
</template>
