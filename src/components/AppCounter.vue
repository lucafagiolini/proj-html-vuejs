<script>
import { store } from "../store.js";

export default {
  name: "AppCounter",
  data() {
    return {
      store, 
      counters_data: store.counters
    }
    },
};
</script>


<template>
    <section id="counter_section">
        <div id="white_aria_top"></div>
        <div id="white_aria_bottom"></div>
        <ul>
            <li class="px-4" v-for="(counter_item, index) in counters_data" :key="index" >
                <i :class="counter_item.icon"></i>
                <span>{{ counter_item.count_number }}</span>
                <h4>{{ counter_item.title }}</h4>
            </li>
        </ul>
    </section>
    
</template>

<style scoped lang="scss">
@use "/src/variabiles.scss" as *;
@use "/src/mixins.scss" as *;

#counter_section {
    position: relative;
  
    height: 580px;
    background-image: url("/src/assets/images/home-244125289.jpg");
    background-size: cover;

    #white_aria_top {
        align-self: center;
        position: absolute;
        left: 0;
        top: 0px;
        width: 100%;
        height: 100px;
        overflow-x: hidden;

        background-color: white;
        border-radius: 0 0 50% 50% / 50%;
    }
    #white_aria_bottom {
        position: absolute;
        left: 0;
        bottom: 0px;
        width: 100%;
        height: 100px;

        background-color: white;
        border-radius: 50% 50% 0 0 / 50%;
    }

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        
        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: scale 0.3s ease;
            cursor: pointer;

            &:hover {
                scale: 2;
    
            }

            i {
                font-size: 2.5rem;
                color: $primary-color;
            }

            span {
                @include raleway_font;
                font-size: 2.5rem;
                color: $primary-color;
            }

            h4 {
                @include roboto_font;
                text-transform: uppercase;
                font-weight: 400;
                font-size: 0.6rem;
                color: white    ;
            }
        }
    }
}




</style>