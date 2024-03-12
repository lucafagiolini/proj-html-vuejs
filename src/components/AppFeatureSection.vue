<script>
import { store } from "../store.js";

export default {
  name: "AppFeatureSection",
  data() {
    return {
      store, 
      features_data: store.fatures_cards
    }
  },
};





</script>


<template>
  <section id="features_section" class="container">
    <h2 class="raleway-secondary">
      specialists in modern construction
    </h2>
    <hr>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
    </span>
  </section>
  <section id="features_list" class="container">
    <ul class="p-0 m-0">
      <li class="d-flex gap-4 ">
        <ul id="features_item" v-for="(current_feature, index) in features_data" >
          <li id="feature_icon_box" class="pb-3">
            <span class="d-flex align-items-center justify-content-center p-2 "><i :class="current_feature.icon" class="fs-5" ></i></span>
          </li>
          <li>
            <h3 id="feature_front_title" class="">{{ current_feature.title }}</h3>
          </li>
          <li>
            <h3 id="feature_back_title" class="text-uppercase">artfully crafted</h3>
          </li>
          <li>
            <p>{{ current_feature.paragraph }}</p>
          </li>
          <li>
            <button type="button" href="#" >get a quote</button>
          </li>
        </ul>
      </li>
    </ul>
  </section>
  
</template>


<style scoped lang="scss">
@use "/src/variabiles.scss" as *;
@use "/src/mixins.scss" as *;

#features_section {
  display: flex;
  flex-direction: column;
  align-items: center;
  

  
  h2 {
    font-size: 1.5rem;
    text-transform: capitalize;
    padding-top: 5rem;
    color: $secondary-color;
  }


  .raleway-secondary {
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
  }

  hr {
    width: calc(100%/10);
    border: 1px solid $primary-color;
    margin: 0.2rem;
    opacity: 1;
  }

  span {
    width: 50%;
    font-size: 0.6rem;
    padding-top: 1rem;
    padding-bottom: 4rem;
  
    text-align: center;
    color: $light_gray_font_color;
  }

  
}

#features_list {
  padding-bottom: 7rem;
}


#features_item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 1.5rem;

  background-color: #f5f5f5;
  border-radius: 10px;
  transition: 0.2s;

  &:hover {
    background-color: $primary-color;
    color: $secondary-color;
    transform: scale(1.05);

    button {
     display: block;
     transition: 0.3s;
    }

    #feature_icon_box {
      display: none;
    }

    #feature_front_title {
      display: none;
    }


  }



  li {
    list-style: none;

    span {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid rgb(155, 155, 155);

    }

    i {
      font-size: 1.5rem;
      padding: 0.5rem;

      color: $light_gray_font_color;
      border: $light_gray_font_color;
    }

    h3 {
      @include raleway_font;
      font-size: 1.5rem;
      font-weight: 400;
      color: $secondary-color;
      text-transform: capitalize;
    }

    #feature_back_title {
      font-size: 1.1rem;
      color: $light_gray_font_color;
      text-align: center;
    }

    p {
      font-size: 0.7rem;
      color: $light_gray_font_color;
      text-align: center;
      line-height: 1.5rem;
      margin: 0;
      text-transform: capitalize;
    }

    button {
      display: none;
      @include primary_button_style;
      background-color: #ffe07b;
      font-size: 0.7rem;
      margin-top: 1rem;
    }

  }
}
</style>
