<template>
    <div>
        <router-link to="/guardar">Guardar</router-link>
        <router-link to="/consultar">Consultar</router-link>
        <router-link to="/actualizar">Actualizar</router-link>
        <router-link to="/eliminar">Eliminar</router-link>

    </div>
</template>

<script>
export default {

}
</script>

<style>
div a {
    color: #2c3e50;
    margin: 0px 10px;
    font-weight: bold;
    border: solid 1px;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: aqua;

}

.router-link-exact-active {
    background-color:  #68ffd9;
}
</style>