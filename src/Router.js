import { createRouter, createWebHistory } from "vue-router"
import HomeComponent from './components/HomeComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'
import CubosComponent from './components/CubosComponent.vue'
import DetailsComponent from './components/DetailsComponent.vue'
import PerfilComponent from './components/PerfilComponent.vue'
import ComprasComponent from './components/ComprasComponent.vue'
import PedidoComponent from './components/PedidoComponent.vue'



const Rutas = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/login", component: LoginComponent
    },
    {
        path: "/register", component: RegisterComponent
    },
    {
        path: "/register", component: RegisterComponent
    },
    {
        path: "/details/:id", component: DetailsComponent
    },
    {
        path: "/cubos/:marca", component: CubosComponent
    },
    {
        path: "/perfil/:id", component: PerfilComponent
    },
    {
        path: "/compras", component: ComprasComponent
    },
    {
        path: "/pedido", component: PedidoComponent
    },
    
]



const router = createRouter({
    history: createWebHistory(),
    routes: Rutas
})

export default router