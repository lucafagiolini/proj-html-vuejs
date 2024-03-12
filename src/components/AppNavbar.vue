<script>

</script>

<template>
   <section class="container d-flex justify-content-between align-items-center py-3 px-0">
    <img id="logo_navbar" src="/src/assets/logo/construction_logo_retina.png" alt="avada_construction_logo">
    <div class="d-flex align-items-center">
        <ul id="links_navbar" class="pe-3 roboto-regular text-uppercase">
            <li class="ps-0">Home</li>
            <li>about</li>
            <li>services</li>
            <li>work</li>
            <li>articles</li>
        </ul>

        <button id="nav_get_quote_btn" type="button" href="#" >get quote</button>

    </div>

   </section>
</template>

<style lang="scss">
@use "/src/variabiles.scss" as *;
@use "/src/mixins.scss" as *;


#logo_navbar {
  width: 230px;
  height: 80px;
}

#links_navbar {
  display: flex;
  margin: 0;
  font-size: 0.7rem;

  list-style: none;
  color: $light_gray_font_color;

  li {
    padding-right: 1rem;
    padding-left: 1rem;
    cursor: pointer;

    &:hover {
      color: $primary_color;
    }
  }
}

#nav_get_quote_btn {
    @include primary_button_style;
    font-size: 0.8rem;
}




</style>
