<template>
   <h1>Pagina consultar</h1>
   <input v-model="id" type="text" placeholder="Ingrese el id">
   <button @click="consultar">Consultar</button>
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
   </div>
</template>

<script>
import { consultarEstudianteIdFachada } from '../helpers/clienteEstudiante.js'
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
   methods:{
      async consultar() {
         console.log("alo")
         console.log(this.id)
         const data = await consultarEstudianteIdFachada(this.id);
         this.nombre = data.name
         this.apellido = data.apellido
         this.cedula = data.cedula
         this.edad = data.edad
         this.fechaNacimiento = data.fechaNacimiento
         this.genero = data.genero
         this.hobby = data.hobby
         this.anio = data.anio
         this.paralelo = data.paralelo
         console.log('Desde componente')
         console.log(data)
      }
   }
}
</script>

<style></style>