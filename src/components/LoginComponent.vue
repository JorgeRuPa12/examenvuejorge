<template>
  <div>
    <h1>Iniciar Sesión</h1>
    <hr class="border border-danger opacity-100"/>
    <form v-on:submit.prevent="login()">
      <label>Email</label>
      <input type="text" class="form-control mb-2" v-model="user.email">
      <label>Contraseña</label>
      <input type="text" class="form-control mb-2" v-model="user.password">
      <button class="btn btn-primary w-100">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
import ServiceCubo from './../services/ServiceCubo'

const service = new ServiceCubo();
export default {
  name: "LoginComponent",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      userinfo: {}
    }
  },
  methods: {
    login(){
      service.logIn(this.user).then(response => {
        localStorage.setItem('token', response.data.response);
        service.getUser().then(response => {
          this.userinfo = response.data
          this.$router.push('/perfil/'+this.userinfo.idUsuario)
        })
      })
    }
  }
}
</script>

<style>

</style>