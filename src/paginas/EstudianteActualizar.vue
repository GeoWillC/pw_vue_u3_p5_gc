<template>
   <h1>Pagina actualizar</h1>
   <input v-model="id" type="text" placeholder="Ingrese el id">
   <button @click="actualizar">Actualizar</button>
    <p></p>
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
    <input v-model="fechaNacimiento" type="datetime-local" >
    <p>Genero</p>
    <input v-model="genero" type="text">
    <p>Hobby</p>
    <input v-model="hobby" type="text">
    <p>Año</p>
    <input v-model="anio" type="text">
    <p>Paralelo</p>
    <input v-model="paralelo" type="text">
    <p></p>
    <p></p>
  </div>
</template>

<script>
import { actualizarFachada} from '../helpers/clienteEstudiante.js'
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
      async actualizar() {
         const body = {
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
         console.log(body)
         await actualizarFachada(this.id, body)
      }
   }
}
</script>

<style>
 .form{
  border-style: solid;
  margin-left: auto;
    margin-right: auto;
  border-radius: 8%;
  width: 30%;
  padding-left: 10px;
  text-align: left;
  padding-left: 50px;
  background-color: rgb(42, 134, 177);
 }
</style>