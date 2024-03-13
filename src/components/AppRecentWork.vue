<script>

export default {
  name: "AppRecentWork",
};

</script>

<template>
  <section class="container">
    <h3>explore recent work</h3>
    <hr>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
    </span>
    <div class="d-flex row gap-2 justify-content-center ">
        <img class="col-4" src="/src/assets/images/project2-featured-15013609-800x800.jpg" alt="">
        <img class="col-4" src="/src/assets/images/project1-featured-294276386-800x800.jpg" alt="">
        <img class="col-4" src="/src/assets/images/project3-featured-189023420-800x800.jpg" alt="">
    </div>
    <h6><a href="#">view all projects</a></h6>
    


  </section>
</template>

<style scoped lang="scss">
@use "/src/variabiles.scss" as *;
@use "/src/mixins.scss" as *;

section {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        @include h2_primary_title;
        padding-top: 0;
    }

    hr {
        @include hr_primary;
    }

    span {
        @include p_primary;
    }

    img {
        width: 400px;
    }

    h6 {
        padding-top: 4rem;
       
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