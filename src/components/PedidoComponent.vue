<template>
  <div>
    <h1>Realizar pedido</h1>
    <hr class="border border-danger opacity-100" />
    <form v-on:submit.prevent="realizarPedido()">
        <label>Elige un cubo</label>
        <select class="form-control mb-3" v-model="cuboId">
            <option v-for="cub in cubos" :key="cub" :value="cub.idCubo">{{cub.nombre}}</option>
        </select>
        <button class="btn btn-primary w-100">Comprar Cubo</button>
    </form>
  </div>
</template>

<script>
import ServiceCubo from './../services/ServiceCubo'

const service = new ServiceCubo();
export default {
    name:"PedidoComponent",
    data() {
        return {
            cuboId: "",
            cubos: []
        }
    },
    mounted() {
        service.getCubos().then(response => {
            this.cubos = response.data
        })
    },
    methods: {
        realizarPedido() {
            service.insertPedido(this.cuboId).then(response => {
                console.log(response);
                this.$router.push('/compras')
            })
        }
    }
}
</script>

<style>

</style>