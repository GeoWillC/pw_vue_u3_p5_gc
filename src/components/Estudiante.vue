<template>
  <h1>Componente Estudiante</h1>
  <input v-model="id" type="text">
  <button @click="consultarPorId">Consultar</button>
  <button @click="consultarPorId">Eliminar</button>
  <p></p>
  <div class="form">
    <h3>Datos del estudiante</h3>
    <p>Nombre</p>
    <input v-model="nombre" type="text">
    <p>Apellido</p>
    <input v-model="apellido" type="text">
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
    <button @click="insertar">Insertar</button>
    <p></p>
  </div>
</template>
  
<script>
// {nombre de la funcion que queremos importar}
import { consultarEstudianteIdFachada, insertarFachada } from '../helpers/clienteEstudiante.js'

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
    async consultarPorId() {
      console.log("alo")
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
    },
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
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
 p{
 
 }
 h3{
  
 }
 </style>
  