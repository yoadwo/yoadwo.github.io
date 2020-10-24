<template>
  <div class="container">
    <!-- About Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase">About</h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon">
        <i class="fas fa-star"></i>
      </div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- About Section Content-->
    <v-container>
      <v-row>
        <v-col cols="6" clas="ml-auto">
          <div class="lead">
            <p>Originally from Israel, the Land of milk, honey and Hummus (that's with a capital H).</p>
            <p>Coding since early elementary school, back when 'Matrix' was just a cool movie and not a system of linear equations... ;)</p>
          </div>
        </v-col>
        <v-col cols="6" clas="mr-auto">
          <div class="lead">
            <p>Once an aspiring surfer, scuba diver and even a martial artist (ten years!).</p>
            <p> These days, I'm more of a keyboard-sports kind of a guy: 
            I read the occasional tech blog, playing FPS games and fix my grandma's computer when it starts to behave 'funny'.</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import "../assets/css/divider.css";
import "../assets/css/section.css";
export default {
  name: "About"
};
</script>
<style scoped>
.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
</style>
