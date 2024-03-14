<script>
import { store } from "../store.js";

export default {
  name: "AppPartners",

  data() {
    return {
      store,
      partners_data: store.partners
    }
    },
};

</script>


<template>
    <section id="partners_section">
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <h2>trusted partners</h2>
            <hr>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
            </p>
            <ul class="d-flex justify-content-center align-items-center flex-wrap">
              <li class="px-5" v-for="(partner_item, index) in partners_data" :key="index">
                <img :src="partner_item.img" alt="">
              </li>
            </ul>
        </div>

    </section>
</template>


<style scoped lang="scss">
@use "/src/variabiles.scss" as *;
@use "/src/mixins.scss" as *;

#partners_section {
   
  h2{
    @include h2_primary_title;
  }

  hr {
    @include hr_primary;
  }

  p {
    @include p_primary;
    padding-bottom: 2rem;
  }

  ul {
    margin: 0;
    padding: 0;
    padding-bottom: 5rem;
    li {
      list-style: none;
      img {
        width: 150px;
        height: 100%;
      }
    }
  }
}




</style>