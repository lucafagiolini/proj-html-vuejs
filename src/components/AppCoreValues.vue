<script>
import { store } from "../store.js";

export default {
  name: "AppCoreValues",

  data() {
    return {
      store, 
      core_values_data: store.core_values
    }
    },
};

</script>


<template>
  <section>
    <div class="container">
      <h3>our core values</h3>
      <hr>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
      </p>
      <div>
        <ul>
          <li v-for="(core_values_item, index) in core_values_data" :key="index" class="d-flex flex-column justify-content-center align-items-center">
            <div class="icon_box" :class="core_values_item.icon_bg_color">
              <i :class="core_values_item.icon"></i>
            </div>
            <h5>{{ core_values_item.title}}</h5>
            <hr class="divider">
            <p>{{ core_values_item.paragraph}}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "/src/variabiles.scss" as *;
@use "/src/mixins.scss" as *;

section {
  background-color: #f5f5f5;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  
  h3 {
    @include h2_primary_title;
  }

  hr {
    @include hr_primary;
  }

  p {
    @include p_primary;
    padding-bottom: 0;
  }
  
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    
    li {
      padding-top: 2rem;
      max-width: 300px;
      
      

      &:hover {
        

        .icon_box {
          background-color: $primary_color;
          scale: 1.1;
        }

        h5 {
          color: $primary_color;
          scale: 1.1;
        }
      }

      .divider {
        width: 5%;
        border: $light_gray_font_color 0.8px solid;
      }

  
  
      .icon_box {
        width: 6rem;
        height: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
    
        background-color: #4da4a5;
        border-radius: 50%;
        transition: scale 1s;
      
    
        i {
          color: white;
          font-size: 3rem;
        }

      }

      .icon_bg_color_1 {
        background-color: #4da4a5;
      }

      .icon_bg_color_2 {
        background-color: #4f6da5;
      }

      .icon_bg_color_3 {
        background-color: #f6722b;
      }

      .icon_bg_color_4 {
        background-color: #a7cf47;
      }
      
      h5 {
        @include raleway_font;
        padding: 0.5rem 0 0.5rem 0;
        margin: 0;
        text-transform: capitalize;
        font-size: 0.8rem;
        font-weight: 300;
        transition: scale 1s;
      }
    }
  }
  


}

</style>