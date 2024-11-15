<template>
  <div>
    <h1>Tus compras</h1>
    <hr class="border border-danger opacity-100">
    <table class="table">
        <thead class="border-danger">
            <tr>
                <th>Núm. Pedido</th>
                <th>ID Cubo</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="com in compras" :key="com">
                <td>{{com.idPedido}}</td>
                <td>{{com.idCubo}}</td>
                <td>{{com.fechaPedido}}</td>
            </tr>
        </tbody>
    </table>
    <div class="row">
        <div class="col-6">
            <router-link class="btn btn-primary w-100 m-1" :to="'/perfil/'+user.idUsuario">Volver al perfil</router-link>
        </div>
        <div class="col-6">
            <router-link class="btn btn-primary w-100 m-1" :to="'/pedido'">Realizar pedido</router-link>
        </div>
    </div>
    
  </div>
</template>

<script>
import ServiceCubo from './../services/ServiceCubo'

const service = new ServiceCubo();
export default {
    name: "ComprasComponent",
    data() {
        return {
            user: {},
            compras: []
        }
    }, 
    mounted() {
        service.getUser().then(response => {
            this.user = response.data
        })

        service.getCompras().then(response => {
            this.compras = response.data
        })
    }
}
</script>

<style>

</style>