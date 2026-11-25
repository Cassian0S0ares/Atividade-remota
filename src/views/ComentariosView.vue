<script setup>
import { ref, computed, onMounted } from 'vue'

const comentarios = ref([])
const novo = ref('')
const erro = ref('')

const total = computed(() => comentarios.value.length)

async function carregar() {
  erro.value = ''
  try {
    const resposta = await fetch('https://api.exemplo.com/comentarios')
    if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`)
    comentarios.value = await resposta.json()
  } catch (e) {
    erro.value = 'Não foi possível carregar os comentários.'
  }
}

function enviar() {
  const texto = novo.value.trim()
  if (texto === '') return
  comentarios.value.push(texto)
  novo.value = ''
}

onMounted(carregar)
</script>

<template>
  <h2>Comentários ({{ total }})</h2>
  <input v-model="novo" @keyup.enter="enviar" placeholder="Escreva um comentário" />
  <button @click="enviar">Enviar</button>
  <p v-if="erro">{{ erro }}</p>
  <ul>
    <li v-for="(c, indice) in comentarios" :key="indice">
      <span>{{ c }}</span>
    </li>
  </ul>
</template>
