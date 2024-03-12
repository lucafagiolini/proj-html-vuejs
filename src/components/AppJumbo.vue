<script>
export default {
  name: "AppJumbo",
};

</script>


<template>
   <section id="jumbo_container">
    <h1 class="roboto-bold">building ispiring spaces</h1>
    <span class="raleway-primary py-3">we buld inspiring residential & commercial spaces</span>
    <div class="py-2">
      <button id="explore_recent_work_btn" type="button" href="#" >explore recent work</button>
      <button id="get_a_quote_today_btn" type="button" href="#" >get a quote today</button>
    </div>
   </section>
 </template>


<style lang="scss">
@use "/src/variabiles.scss" as *;
@use "/src/mixins.scss" as *;

#jumbo_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40rem;
  background-image: url("/src/assets/images/home-slider-62528242.jpg");
  background-size: cover;

  h1 {
    font-size: 3rem;
    margin: 0;
    text-transform: uppercase;
    color: white;
    
  }

  span {
    font-size: 1.1rem;
    text-transform: capitalize;
    color: $primary-color;

    
    
  }
  .raleway-primary {
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }

  #explore_recent_work_btn {
    @include secondary_button_style;
    font-size: 1rem;
    margin-right: 0.5rem;
  }

  #get_a_quote_today_btn {
    @include primary_button_style;
    font-size: 1rem;
    margin-left: 0.5rem;
  }

    

}


</style>
