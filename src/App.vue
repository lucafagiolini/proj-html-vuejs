<script>
import AppNavbar from './components/AppNavbar.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppFeatureSection from './components/AppFeatureSection.vue';
import AppCounter from './components/AppCounter.vue';
import AppRecentWork from './components/AppRecentWork.vue';
import AppCoreValues from './components/AppCoreValues.vue';
import AppFeedbacksSlider from './components/AppFeedbacksSlider.vue';
import AppNews from './components/AppNews.vue';
import AppPartners from './components/AppPartners.vue';
import AppFreeQuote from './components/AppFreeQuote.vue';
import AppFooter from './components/AppFooter.vue';

export default {

  components: {
    AppNavbar,
    AppJumbo,
    AppFeatureSection,
    AppCounter,
    AppRecentWork,
    AppCoreValues,
    AppFeedbacksSlider,
    AppNews,
    AppPartners,
    AppFreeQuote,
    AppFooter,

    
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
  <AppNews></AppNews>
  <AppPartners></AppPartners>
  <AppFreeQuote></AppFreeQuote>
  <AppFooter></AppFooter>
</template>

<style> 
</style>
