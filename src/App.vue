<script>
import AppNavbar from './components/AppNavbar.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppFeatureSection from './components/AppFeatureSection.vue';
import AppCounter from './components/AppCounter.vue';
import AppRecentWork from './components/AppRecentWork.vue';
import AppCoreValues from './components/AppCoreValues.vue';
import AppFeedbacksSlider from './components/AppFeedbacksSlider.vue';

export default {

  components: {
    AppNavbar,
    AppJumbo,
    AppFeatureSection,
    AppCounter,
    AppRecentWork,
    AppCoreValues,
    AppFeedbacksSlider,
    
  },
}

</script>

<template>
  <AppNavbar></AppNavbar>
  <AppJumbo></AppJumbo>
  <AppFeatureSection></AppFeatureSection>
  <AppCounter></AppCounter>
  <AppRecentWork></AppRecentWork>
  <AppCoreValues></AppCoreValues>
  <AppFeedbacksSlider></AppFeedbacksSlider>
</template>

<style> 
</style>
