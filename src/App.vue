<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Início</RouterLink> |
    <RouterLink to="/cep">Consultar CEP</RouterLink> |
    <RouterLink to="/comentarios">Comentários</RouterLink>
  </nav>
  <RouterView />
</template>
