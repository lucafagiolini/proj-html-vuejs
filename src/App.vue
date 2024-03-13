<script>
import AppNavbar from './components/AppNavbar.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppFeatureSection from './components/AppFeatureSection.vue';
import AppCounter from './components/AppCounter.vue';

export default {

  components: {
    AppNavbar,
    AppJumbo,
    AppFeatureSection,
    AppCounter,
  },
}

</script>

<template>
  <AppNavbar></AppNavbar>
  <AppJumbo></AppJumbo>
  <AppFeatureSection></AppFeatureSection>
  <AppCounter></AppCounter>
</template>

<style> 
</style>
