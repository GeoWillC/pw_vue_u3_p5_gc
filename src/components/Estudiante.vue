<template>
  <h1>Componente Estudiante</h1>
  <input v-model="id" type="text">
  <button @click="consultarPorId">Consultar</button>
  <input v-model="nombre" type="text">
  <input v-model="apellido" type="text">
  <button @click="insertar">Insertar</button>
</template>
  
<script>
// {nombre de la funcion que queremos importar}
import { consultarEstudianteIdFachada, insertarFachada } from '../helpers/clienteEstudiante.js'

export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null
    }
  },
  methods: {
    async consultarPorId() {
      console.log("alo")
      const data = await consultarEstudianteIdFachada(this.id);
      this.nombre = data.name
      this.apellido = data.apellido
      console.log('Desde componente')
      console.log(data)
    },
    async insertar() {
      //Declaro objeto json para armar el body
      const estuBody = {
        name: this.nombre,
        apellido: this.apellido,
        genero: "M",
        fechaNacimiento: "2002-05-16T00:00:00",
        cedula: "1232312312",
        edad: "22",
        hobby: "futbol",
        paralelo: "B",
        anio: "3 BGU"
      }
      await insertarFachada(estuBody);
      console.log(estuBody)
    }
  }

}


</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
  