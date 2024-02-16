<template>
   <h1>Pagina eliminar</h1>
   <input v-model="id" type="text" placeholder="Ingrese el id">
   <button @click="eliminar">Eliminar</button>
</template>

<script>

import { eliminarFachada } from '../helpers/clienteEstudiante.js'

export default {
   data() {
    return {
      id: null
    }
  },
  methods:{
   async eliminar(){
      console.log("Id eliminado")
      console.log(this.id)
      await eliminarFachada(this.id)
    }
  }
}
</script>

<style>

</style>