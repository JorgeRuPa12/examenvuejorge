<template>
  <div>
    <h1>Mi perfil ({{user.nombre}})</h1>
    <hr class="border border-danger opacity-100">
    <table class="table">
        <thead class="border-danger">
            <tr>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{user.nombre}}</td>
                <td>{{user.email}}</td>
            </tr>
        </tbody>
    </table>
    <router-link class="btn btn-primary w-100" to="/compras">Mostrar Compras</router-link>
  </div>
</template>

<script>
import ServiceCubo from './../services/ServiceCubo'

const service = new ServiceCubo();
export default {
    name: "PerfilComponent",
    data() {
        return {
            user: {}
        }
    }, 
    mounted() {
        service.getUser().then(response => {
            this.user = response.data
        })
    }
}
</script>

<style>

</style>