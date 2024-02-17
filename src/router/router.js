import { createRouter, createWebHashHistory } from "vue-router"

//importar la paginas que se desea trabajar como rutas
import EstudianteActualizar from '../paginas/EstudianteActualizar.vue'
import EstudianteConsultar from '../paginas/EstudianteConsultar.vue'
import EstudianteEliminar from '../paginas/EstudianteEliminar.vue'
import EstudianteGuardar from '../paginas/EstudianteGuardar.vue'

//configuracion de rutas
//tipos de objeto con dos atributos
const routes = [
    {
        path: '/actualizar',
        component: EstudianteActualizar
    },
    {
        path: '/consultar',
        component: EstudianteConsultar
    },
    {
        path: '/eliminar',
        component: EstudianteEliminar
    },
    {
        path: '/guardar',
        component: EstudianteGuardar
    }
]
//Config de router
//enviar json
const router = createRouter({ history: createWebHashHistory(), routes })

export default router
