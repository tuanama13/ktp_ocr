<template>
  <div>
    <router-view/>
    <home/>
  </div>
</template>

<script>
import Home from '../views/Home.vue'
export default {
name:'MainLayout',
components:{ Home }
}
</script>

<style>

</style>