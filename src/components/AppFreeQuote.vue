<script>
import { store } from "../store.js";

export default {
  name: "Appfreequote",

  data() {
    return {
      store,
    }
    },
};

</script>


<template>
  <section id="free-quote">
    <div class="container h-100">
      <div class="row d-flex align-items-center justify-content-between h-100  ">
        <div class="col-8 ">
          <h2 class="text-white">building inspiring spaces</h2>
          <hr class="my-4">
          <p>Vivamus sed consectetur tellus dolor sit amet, consectetur adipsicing lorem elit sadip ipsum ets ficilis uns.</p>
        </div>
        <div class="col-4 d-flex flex-column ">
          <button>Get a free quote</button>
          <span>only takes few seconds</span>

        </div>  

      </div>

    </div>

  </section>  
   
</template>


<style scoped lang="scss">
@use "/src/variabiles.scss" as *;
@use "/src/mixins.scss" as *;

#free-quote {
  background-image: url(/src/assets/images/about-call-to-action-57862405.jpg);
  background-size: cover;
  background-position: bottom;
  height: 430px;


  h2{
    @include raleway_font;
    font-weight: 500;
    text-transform: capitalize;
  }

  hr {
    @include hr_primary;
    width: 25%;
  }

  p {
    @include p_primary;
    width: 100%;
    font-size: 1.2rem;
    padding: 0rem;
    text-align: left;
    color: white;

  }

  button {
    @include primary_button_style;
    width: 220px;
    margin-bottom: 1rem;
  }

  span {
    @include p_primary;
    font-size: 0.8rem;
    color: white;
    padding: 0rem;
  }
}



</style>

