<script setup>
import { ref } from 'vue'

const texto = ref('')
const itens = ref([])

function adicionar() {
  if (texto.value.trim() === '') return
  itens.value.push(texto.value.trim())
  texto.value = ''
}

function remover(indice) {
  itens.value.splice(indice, 1)
}
</script>

<template>
  <input v-model="texto" @keyup.enter="adicionar" placeholder="Digite um item" />
  <button @click="adicionar">Adicionar</button>
  <p>Total: {{ itens.length }} item(ns)</p>

  <ul v-if="itens.length > 0">
    <li v-for="(item, indice) in itens" :key="indice">
      {{ item }}
      <button @click="remover(indice)">X</button>
    </li>
  </ul>
  <p v-else>Lista vazia.</p>
</template>
