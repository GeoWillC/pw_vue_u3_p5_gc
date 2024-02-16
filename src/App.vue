<template>
  

  <!-- llamada a router -->
  <router-view/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import EstudiantePagina from '../src/paginas/EstudiantePagina.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    EstudiantePagina
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
