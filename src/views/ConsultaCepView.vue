<script setup>
import { ref } from 'vue'

const cep = ref('')
const endereco = ref(null)
const mensagem = ref('')
const carregando = ref(false)

async function buscar() {
  carregando.value = true
  mensagem.value = ''
  endereco.value = null
  try {
    const url = `https://viacep.com.br/ws/${cep.value}/json/`
    const resposta = await fetch(url)
    const dados = await resposta.json()
    if (dados.erro) {
      mensagem.value = 'CEP não encontrado.'
    } else {
      endereco.value = dados
    }
  } catch (e) {
    mensagem.value = 'Falha de conexão. Tente novamente.'
  } finally {
    carregando.value = false
  }
}
</script>

<template>
  <input v-model="cep" placeholder="Digite o CEP (só números)" />
  <button @click="buscar" :disabled="carregando">
    {{ carregando ? 'Buscando...' : 'Buscar' }}
  </button>

  <div v-if="endereco">
    <p>Rua: {{ endereco.logradouro }}</p>
    <p>Bairro: {{ endereco.bairro }}</p>
    <p>Cidade: {{ endereco.localidade }}</p>
  </div>
  <p v-else>{{ mensagem }}</p>
</template>
