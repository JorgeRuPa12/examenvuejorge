<template>
  <div>
    <h1>Cubos de la marca {{$route.params.marca}}</h1>
        <hr class="border border-danger opacity-100">
        <div class="row">
            <div class="col-3" v-for="cubo in cubos" :key="cubo">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" :src="cubo.imagen" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{cubo.nombre}}</h5>
                        <p class="card-text">{{cubo.precio}}€</p>
                        <router-link :to="'/details/'+cubo.idCubo" class="btn btn-primary w-100">Detalles</router-link>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import ServiceCubo from './../services/ServiceCubo'

const service = new ServiceCubo();
export default {
name: "HomeComponent",
    data() {
        return {
            cubos: []
        }
    },
    mounted() {
        service.getCubosMarca(this.$route.params.marca).then(response => {
            this.cubos = response.data;
            
        })
    },
    watch: {
        '$route.params.marca'(nextVal, oldVal){
        if (nextVal != oldVal){
            let marca = this.$route.params.marca
            service.getCubosMarca(marca).then(response => {
            this.cubos = response.data;
            })
        }
      }
    }
}
</script>

<style>

</style>