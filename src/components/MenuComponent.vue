<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/015/310/854/small/rubik-toy-with-transparent-background-free-png.png" alt="Bootstrap" width="60">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/">Cubos</router-link>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Marcas
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <router-link class="dropdown-item"  v-for="marca in marcas" :key="marca" :to="'/cubos/'+marca">
                            {{marca}}
                        </router-link>
                    </li>
                </ul>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Seguridad
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><router-link class="dropdown-item" aria-current="page" to="/login" v-if="!estado">Iniciar Sesión</router-link></li>
                    <li><router-link class="dropdown-item" aria-current="page" to="/register" v-if="!estado">Registrarse</router-link></li>
                    <li><a class="dropdown-item" aria-current="page" v-on:click="cerrarSesion()" v-if="estado">Cerrar Sesion</a></li>
                </ul>
                </li>
                <li class="nav-item dropdown" v-if="estado">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Usuario
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><router-link class="dropdown-item" aria-current="page" :to="'/perfil/'+user.idUsuario">Perfil</router-link></li>
                    <li><router-link class="dropdown-item" aria-current="page" to="/compras">Compras</router-link></li>
                    <li><router-link class="dropdown-item" aria-current="page" to="/pedido">Realizar Pedido</router-link></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
import ServiceCubo from './../services/ServiceCubo'

const service = new ServiceCubo();
export default {
    name: "MenuComponent",
    data() {
        return {
            marcas: [],
            estado: false,
            user: {}
            
        }
    },
    methods: {
        comprobarSesion() {
            if(localStorage.getItem('token') == null){
                this.estado = false
            } else {
                this.estado = true
                service.getUser().then(response => {
                    this.user = response.data
                })
            }
        },
        cerrarSesion(){
            alert("has cerrado sesion")
            localStorage.removeItem('token')
        }
    },
    mounted() {
        service.getMarcas().then(response => {
            this.marcas = response.data
        })

        this.comprobarSesion()
    },
    updated() {
        this.comprobarSesion()
    }
}
</script>

<style>

</style>