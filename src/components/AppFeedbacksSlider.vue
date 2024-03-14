<script>
import { store } from "../store.js";

export default {
  name: "AppFeedbacksSlider",

  data() {
    return {
      store,
      testimonials_data: store.testimonials,
    }
    },
};
</script>

<template>
  <section id="fedback_slider_section">
    <div id="white_aria_top"></div>
    <div class="container h-100 d-flex flex-column justify-content-center align-items-center align-content-center ">
      <h3>Our Home Owners Say</h3>
      <hr>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item">
            <div class="testimonial_box">
              <img src="/src/assets/images/home-testimonial-84268399.jpg" class="d-block" alt="...">
              <p>"no man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property."
              </p>
              <div class="d-flex align-items-center">
                <span>harry smith</span>
                <i class="fa-solid fa-circle"></i>
                <span>home owner</span>
              </div>
            </div>
          </div>
          <div class="carousel-item active">
            <div class="testimonial_box">
              <img src="/src/assets/images/home-testimonial-113165296.jpg" class="d-block" alt="...">
              <p>"no man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property."
              </p>
              <div class="d-flex align-items-center">
                <span>katline jones</span>
                <i class="fa-solid fa-circle"></i>
                <span>home owner</span>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>  
    </div>
    <div id="white_aria_bottom"></div>
  </section>
    
</template>


<style scoped lang="scss">
@use "/src/variabiles.scss" as *;
@use "/src/mixins.scss" as *;
#fedback_slider_section {
    position: relative;
    height: 680px;
    background-image: url("/src/assets/images/home-parallax-144609983.jpg");
    background-size: cover;

    h3 {
      @include h2_primary_title;
      color: white;
      font-weight: 400;
      padding-top: 0;

    }

    hr {
      @include hr_primary;
      margin-bottom: 2rem;
    }


    .carousel-inner {

      .testimonial_box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

      }
        
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;

          object-fit: cover;
          
        }

        p {
          max-width: 500px;
          @include p_primary;
          color: white;
          width: 100%;
          padding: 2rem 0 0rem 0;
          text-align: center;
          font-size: 0.8rem

        }

        span {
          @include raleway_font;
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          text-transform: uppercase;
        
        }

        i {
          font-size: 0.2rem;
          color: white;
          padding: 0 0.5rem 0 0.5rem;
        }

    }

    #white_aria_top {
        @include background_ark_top;
        background-color: #f5f5f5;
    }
    #white_aria_bottom {
        @include background_ark_bottom;
        background-color: #f5f5f5;
    }

}
</style>