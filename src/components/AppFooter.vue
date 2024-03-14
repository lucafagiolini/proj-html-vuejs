<script>
import { store } from "../store.js";

export default {
  name: "Appfooter",

  data() {
    return {
      store,
    }
    },
};

</script>


<template>
    <div id="gray_aria"></div>
    <section id="footer_section">
        <div class="container">
            <div class="row d-flex px-2 py-5">
                <div class="col-3">
                    <img src="/src/assets/logo/footer-logo.png" alt="">
                    <p>
                        We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.
                    </p>
                    <button>learn more</button>

                </div>
                <div class="col-3">
                    <h6>latest tweets</h6>
                    <div class="d-flex">
                        <img class="logo_Theme_Fusion" src="/src/assets/logo/3a74ce3d0532b7773b174c45ca3bd05a_bigger.png" alt="">
                        <div class="d-flex flex-column">
                            <div class="d-flex justify-content-between">
                                <span class="Theme_fusion">ThemeFusion</span>
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                            <span>@Theme_Fusion</span>
                            <p>Do you need sublime WordPress hosting for your next website? Take advantage of exclusive partner offers that we have secured just for you, & launch your site in seconds with <span class="link_twitter">#avada</span> on Wp Engine hosating & get 30% Off this Black Friday <span class="link_twitter">bit.ly/3kjLLE2 #BlackFriday2020</span></p>
                             <img class="img_tweet" src="/src/assets/images/En2TRxLW4AEiWUN.jpeg" alt="">
                             <div class="d-flex justify-content-between">
                                 <div class="d-flex gap-2">
                                    <i class="fa-regular fa-heart"></i>
                                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                 </div>
                                 <span>22h</span>
                             </div>
                        </div>
                    </div>

                </div>
                <div class="col-3">
                    <h6>contact us today</h6>
                    <div class="d-flex gap-2 pb-2">
                        <i class="fa-solid fa-globe"></i>
                        <div class="d-flex flex-column">
                            <span>corporate location</span>
                            <span>1600 amphiteatre parkway</span>
                            <span>london wc11ba</span>
                        </div>
                    </div>
                    <div class="d-flex gap-2 pb-2">
                        <i class="fa-solid fa-house-chimney"></i>
                        <div class="d-flex flex-column">
                            <span>residential locatio</span>
                            <span>9521 broadsberry avenue</span>
                            <span>paddington rc7 gza</span>
                        </div>
                    </div>
                    <div class="d-flex gap-2 pb-2">
                        <i class="fa-solid fa-phone"></i>
                        <div class="d-flex flex-column">
                            <span>1.800.458.556 / 1.800.532.2112</span>
                        </div>
                    </div>
                    <div class="d-flex gap-2 pb-2">
                        <i class="fa-regular fa-envelope"></i>
                        <div class="d-flex flex-column">
                            <span>info@your-domain.com</span>
                        </div>
                    </div>
                    <div class="d-flex gap-2 pb-2">
                        <i class="fa-regular fa-clock"></i>
                        <div class="d-flex flex-column">
                            <span>monday - friday: 9:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                    <div class="d-flex gap-2 pb-2">
                        <i class="fa-regular fa-clock"></i>
                        <div class="d-flex flex-column">
                            <span>saturday - sunday: 9:00 AM - 12:00 PM</span>
                        </div>
                    </div>

                </div>
                <div class="col-3">
                    <h6>find us</h6>
                    <img src="/src/assets/images/construction_map_pin.png" alt="">

                </div>

            </div>
            
        </div>
        <div id="copirgight_footer">
            <div class="container">
                <p class="d-flex justify-content-start ">copyright 2012 -2015 avada theme by  <span> theme fusion  </span>  |  all rights reserved | powered by <span>wordpress</span>.</p>
            </div>
        </div>
        <div class="aria_footer">

        </div>
    </section>
  
</template>


<style scoped lang="scss">
@use "/src/variabiles.scss" as *;
@use "/src/mixins.scss" as *;

#gray_aria {
    background-color: #3f3f3f;
    height: 20px;
}

#footer_section {
    background-color: #1e1e1e;

    h6 {
        color: $primary_color;
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
    }


    .col-3:first-child{
        img {
            width: 180px;
        }
        p {
            @include raleway_font;
            color: $light_gray_font_color;
            font-size: 0.8rem;
            width: 100%;
            padding-top: 2rem;
            padding-bottom: 1rem;
            margin: 0;
            text-align: left;
            line-height: 1.5rem
            
        }

        button {
            @include primary_button_style;
        }
    }

    .col-3:nth-child(2) {
        .logo_Theme_Fusion {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            margin-right: 1rem;
        }
        


        span {
            @include raleway_font;
            color: rgb(171, 171, 171);
            font-size: 0.7rem;
            font-weight: 700;
        }


        .Theme_fusion {
            @include raleway_font;
            color: white;
            font-size: 0.8rem;
            font-weight: 700;
        }

        i {
            color: #667480;
            font-size: 0.8rem;
        }

        p {
           @include roboto_font;
           color: white;
           font-size: 0.7rem;
           line-height: 0.9rem;

              .link_twitter {
                color: #2a7cb9;
                font-weight: 700;
              }
        }

        .img_tweet {
            width: 100%;
            
            margin-top: 1rem;
        }
    }

    .col-3:nth-child(3) {
        i {
            color: $light_gray_font_color;
            font-size: 0.8rem;
        }

        span {
            @include raleway_font;
            color: $light_gray_font_color;
            font-size: 0.7rem;
            font-weight: 400;
            padding: 0;
            margin: 0;
            text-transform: capitalize;
        }
    }

    .col-3:nth-child(4) {
        img {
            width: 240px;
        }
    }

    #copirgight_footer {
        background-color: #0d0d0d;
        p {
            @include raleway_font;
            @include p_primary;
            color: $light_gray_font_color;
            font-size: 0.7rem;
            text-align: left;
            padding: 2rem 0;
            text-transform: uppercase;
        }

        span {
            color: rgb(149, 149, 149);
            font-weight: 500;
            text-transform: uppercase;
        }
    }

    .aria_footer {
        background-color: #111111;
        height: 20px;
    }
}
   



</style>