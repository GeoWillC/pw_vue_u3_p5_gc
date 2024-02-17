import { createRouter, createWebHashHistory } from "vue-router"

//importar la paginas que se desea trabajar como rutas
import EstudianteActualizar from '../paginas/EstudianteActualizar.vue'
import EstudianteConsultar from '../paginas/EstudianteConsultar.vue'
import EstudianteEliminar from '../paginas/EstudianteEliminar.vue'
import EstudianteGuardar from '../paginas/EstudianteGuardar.vue'
import NoFoundPage from '../paginas/NoFoundPage.vue'

//configuracion de rutas
//tipos de objeto con dos atributos
const routes = [
    {
        path: '/actualizar',
        component: () => import('@/paginas/EstudianteActualizar.vue')
    },
    {
        path: '/consultar',
        component: () => import('@/paginas/EstudianteConsultar.vue')
    },
    {
        path: '/eliminar',
        component: () => import('@/paginas/EstudianteEliminar.vue')
    },
    {
        path: '/guardar',
        component: () => import('@/paginas/EstudianteGuardar.vue')
    },
    {
        //wildcard  ej: 2XXX
        path: '/:pathMatch(.*)*',
        component: () => import('@/paginas/NoFoundPage.vue')
    }
]
//Config de router
//enviar json
const router = createRouter({ history: createWebHashHistory(), routes })

export default router
