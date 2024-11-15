<template>
  <menu-component></menu-component>
  <div class="container-fluid mt-3 mx-auto w-75" style="width: 90px;">
    <router-view></router-view>
  </div>
  
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'

export default {
  name: 'App',
  components: {
    MenuComponent
  }
}
</script>

<style>

</style>
