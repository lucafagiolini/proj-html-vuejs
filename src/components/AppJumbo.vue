<script>
export default {
  name: "AppJumbo",
};

</script>


<template>
   <section id="jumbo_container" class="position-relative">
    <h1 class="roboto-bold">building ispiring spaces</h1>
    <span class="raleway-primary py-3">we buld inspiring residential & commercial spaces</span>
    <div class="py-2">
      <button id="explore_recent_work_btn" type="button" href="#" >explore recent work</button>
      <button id="get_a_quote_today_btn" type="button" href="#" >get a quote today</button>
      <div id="promo_container" class="position-absolute p-3 gap-2">
        <div class="promo_box">
          <div id="demos_logo">
            <i class="fa-brands fa-atlassian"></i> 
          </div>
          <span>demos</span>
        </div>
        <div class="promo_box">
          <div>
            <span class="promoprice">$</span>
            <i class="fa-solid fa-3"></i>
            <i class="fa-solid fa-9"></i>
          </div>
          <span>on sale</span>
        </div>
      </div>
    </div>
   </section>
   <section id="jumbo_footer" class="pt-4 pb-5">
    <span>do you have a construction project we can help with?</span>
    <button id="get_a_free_quote_btn" type="button" href="#" >get a free quote</button>
   </section>
 </template>


<style scoped lang="scss">
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

  #promo_container {
    display: flex;
    flex-direction: column;
    right: 0;
    top: 0;

    .promo_box {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      
      padding: 0.5rem;
      border-radius: 3px;
      background-color: white;
      transition: transform 0.1s ease-in-out;

      &:hover{
        transform: scale(1.1);  
      }

      span {
        padding-top: 0.2rem;
        font-size: 0.5rem;
        font-weight: bold;
        color: #33475b;
      }

      .promoprice {
        top: 0;
        left: 5px;
        position: absolute;
        font-size: 0.7rem;
        color: #64bc7b;
      }

      .fa-3 {
        font-size: 1.1rem;
        color: #64bc7b;
      }

      .fa-9 {
        font-size: 1.1rem;
        color: #64bc7b;
      }

      #demos_logo {
        padding: 0.1rem 0.4rem 0.1rem 0.4rem;
        margin-bottom: 0.4rem;
        font-size: 0.5rem;
        border-radius: 3px;
        color: white;
        background-color: #33475b;
      }
    }
  }

  
    

}

#jumbo_footer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-transform: capitalize;


  font-weight: 300;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;


  background-color: $primary-color;
  color: $secondary-color;


  #get_a_free_quote_btn {
    @include terziary_button_style;
    position: absolute;
    bottom: -17px;



    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
}


</style>
