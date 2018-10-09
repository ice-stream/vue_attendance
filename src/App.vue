<template>
  <div >
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  import ElSubmenu from "element-ui/packages/menu/src/submenu";

  Vue.use(Element)
  export default {
    components: {ElSubmenu},
    name: 'app',
    data: function (){
      return {
        active:true
      }
    }
  }
</script>

<style>
</style>
