<script>
import { store } from "../store.js";

export default {
  name: "AppNews",

  data() {
    return {
      store,
      latest_news_data: store.latest_news 
    }
    },
};

</script>


<template>
    <section id="news_section">
      <div class="container">
        <h3>latest news</h3>
        <hr>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
        </p>
        <ul class="d-flex row gap-4">
          <li class="col-4" v-for="(latest_news_item, index) in latest_news_data " :key="index">
            <div class="latest_news_image_box">
              <img :src="latest_news_item.img" alt="">

              <div class="alternative_content_box p-4">
                <div class="d-flex justify-content-center align-items-center gap-1">
                  <div class="icon_box">
                    <i class="fa-solid fa-link"></i>
                  </div>
                  <div class="icon_box">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <div class="d-flex justify-content-center align-items-center flex-column gap-1 py-1">
                  <h5 class="alternative_title">{{ latest_news_item.title }}</h5>
                  <span class="alternative_p">architecture, buildings, construction, news</span>
                </div>
              </div>

            </div>
            <div class="last_news_content_box">
              <h5>{{ latest_news_item.title }}</h5>
              <span>{{ latest_news_item.date }}</span>
              <hr>
              <p>{{ latest_news_item.paragraph }}</p>
            </div>
          </li>
        </ul>
        <h6><a href="#">view all projects</a></h6>
      </div>
        
      
      
    </section>
</template>



<style scoped lang="scss">
@use "/src/variabiles.scss" as *;
@use "/src/mixins.scss" as *;

#news_section {
  display: flex;
  background-color: #f5f5f5;
  

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


  h3 {
    @include h2_primary_title;
    padding-top: 0;
  }

  hr {
    @include hr_primary;
    margin-bottom: 2rem;
  }

  p {
    @include p_primary;
    padding: 0;
    padding-bottom: 2rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      width: 225px;
      background-color: white;
      padding: 0;
      transition: all 0.3s ease-in-out;

      .alternative_content_box {
        display: none;
      }

      &:hover {
        transform: scale(1.05);


        img {
          display: none;
        }

        .alternative_content_box {
          display: block;
          height: 135.56px;
        }
        
      }

      .latest_news_image_box {
        
        
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;

        }

        .alternative_content_box{
          background-color: $primary_color;
          
         


          .icon_box {
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.3rem;
            font-size: 0.8rem;
            color: $primary_color;
            background-color: white;
            border-radius: 50%;
          }

          .alternative_title {
            padding: 0;
            margin: 0;
            font-size: 0.9rem;
            font-weight: 400;
            text-transform: capitalize;
            text-align: center;
            color: white;
          }

          .alternative_p {
            color: white;
            font-size: 0.5rem;
            font-weight: 400;
            text-transform: capitalize;
            text-align: center;
          }
        }

      }

      .last_news_content_box {
        padding: 1rem 1rem 1rem 1rem;
        text-align: left;

        h5 {
          @include h2_primary_title;
          padding: 0;
          margin: 0;
          font-size: 1rem;
        }

        span {
          @include raleway_font;
          color: $light_gray_font_color;
          font-size: 0.8rem;
          font-weight: 400;
        }
        
        hr {
          width: 100%;
          border: rgba(66, 66, 66, 0.112) 0.5px solid; 
          margin: 0.5rem 0 0.5rem 0;
        }

        p {
          @include p_primary;
          width: 100%;
          padding: 0;
          margin: 0;
          font-size: 0.8rem;
          text-align: left;

        }


      }

    }
  }

  h6 {
        padding-top: 4rem;
        padding-bottom: 6rem;
       
        a {
            @include p_primary;
            text-transform: uppercase;
            font-size: 0.8rem;
            text-decoration: none;

           &:hover {
               text-decoration: underline;
           }

        }
       
    }

}


</style>