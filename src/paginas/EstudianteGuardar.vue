<template>
  <h1>Pagina guardar</h1>
  <div class="form">
    <h3>Datos del estudiante</h3>
    <p>Nombre</p>
    <input v-model="nombre" type="text" placeholder="Ingrese nombre">
    <p>Apellido</p>
    <input v-model="apellido" type="text" placeholder="Ingrese apellido">
    <p>Cedula</p>
    <input v-model="cedula" type="text">
    <p>Edad</p>
    <input v-model="edad" type="text">
    <p>Fecha de nacimiento</p>
    <input v-model="fechaNacimiento" type="datetime-local">
    <p>Genero</p>
    <input v-model="genero" type="text">
    <p>Hobby</p>
    <input v-model="hobby" type="text">
    <p>Año</p>
    <input v-model="anio" type="text">
    <p>Paralelo</p>
    <input v-model="paralelo" type="text">
    <p></p>
    <button @click="insertar">Insertar</button>
    <p></p>
  </div>
</template>

<script>
import {
  insertarFachada,
} from '../helpers/clienteEstudiante.js'
export default {


  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
      cedula: null,
      edad: null,
      fechaNacimiento: null,
      genero: null,
      hobby: null,
      anio: null,
      paralelo: null
    }
  },
  methods: {
    async insertar() {
      //Declaro objeto json para armar el body
      const estuBody = {
        name: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        cedula: this.cedula,
        edad: this.edad,
        hobby: this.hobby,
        paralelo: this.paralelo,
        anio: this.anio
      }
      await insertarFachada(estuBody);
      console.log(estuBody)
    }
  }
}
</script>

<style></style>