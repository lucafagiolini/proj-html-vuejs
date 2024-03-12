<script>
import AppNavbar from './components/AppNavbar.vue';
import AppJumbo from './components/AppJumbo.vue';

export default {

  components: {
    AppNavbar,
    AppJumbo,
  },
}

</script>

<template>
  <div id="wide-container"> 
    <AppNavbar></AppNavbar>
  </div>
  <AppJumbo></AppJumbo>
</template>

<style> 
</style>
