import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConsultaCepView from '../views/ConsultaCepView.vue'
import ComentariosView from '../views/ComentariosView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/cep', component: ConsultaCepView },
    { path: '/comentarios', component: ComentariosView }
  ]
})
