<template>
    <h1>{{cubo.nombre}}</h1>
    <hr class="border border-danger opacity-100">
    <div class="card mb-3">
        <img class="card-img-top mx-auto w-50 d-block mb-3" :src="cubo.imagen" alt="Card image cap">
        <div class="card-body">
            <table class="table">
                <thead class="border-danger">
                    <tr>
                        <th>Marca y modelo</th>
                        <th>Valoración</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{cubo.marca}} {{cubo.modelo}}</td>
                        <td>{{cubo.valoracion}}</td>
                        <td>{{cubo.precio}}€</td>
                    </tr>
                </tbody>
            </table>
            <router-link class="btn btn-warning w-100" to="/">Volver</router-link>
        </div>
    </div>  
        <h1>Comentarios</h1>
        <hr class="border border-danger opacity-100">
        <h2 style="color: blue" v-if="comentarios == ''">Sin comentarios</h2>
        <table class="table">
                <tbody>
                    <tr v-for="com  in comentarios" :key="com">
                        <td>Usuario {{com.idUsuario}}</td>
                        <td>{{com.comentario}}</td>
                    </tr>
                </tbody>
            </table>
</template>

<script>
import ServiceCubo from './../services/ServiceCubo'

const service = new ServiceCubo();
export default {
    name: "DetailsComponent",
    data() {
        return {
            cubo: {},
            comentarios: []
        }
    },
    mounted() {
        service.findCubo(this.$route.params.id).then(response => {
            this.cubo = response.data
        })

        service.getComentarios(this.$route.params.id).then(response => {
            this.comentarios = response.data
        })
    }
}
</script>

<style>

</style>