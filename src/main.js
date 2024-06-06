import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import { createRouter, createWebHistory } from 'vue-router'
import router from './router'
import RepoApi from './components/RepoApi.vue'


const app = createApp(App)
app.component('RepoApi', RepoApi);
app.use(router)
app.mount('#app')