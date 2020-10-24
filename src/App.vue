<template>
  <v-app>
    <Header />
    <v-content>
      <!-- Navigation-->
      <!-- <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
        <button
          class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <a
                class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#portfolio"
              >Portfolio</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a
                class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#contact"
              >Contact</a>
            </li>
          </ul>
        </div>
      </div>
      </nav>-->
      <MastHead id="welcome" />
      
      <!-- Portfolio Section-->      
      <section class="page-section portfolio mb-0" id="portfolio">
        <Portfolio />
      </section>

      <!-- Career Section-->      
      <section class="page-section career mb-0" id="career">
        <Career />
      </section>
      
      <!-- About Section-->
      <section class="page-section about mb-0" id="about">
        <About />
      </section>

      <!-- Contact Section-->
      <section class="page-section contact mb-0" id="contact">
        <Contact />
      </section>
      <!-- Copyright Section-->
      <!-- <section class="copyright py-4 text-center white--text"> -->
        <!-- <Footer /> -->
      <!-- </section> -->
      <Footer />
      
    </v-content>
  </v-app>
</template>
<script>
// import Particles from "./components/Particles";
import Header from "./components/Header";
import MastHead from "./components/MastHead";
import Portfolio from "./components/Portfolio";
import Career from "./components/Career";
import About from "./components/About";
import Contact from "./components/Contact"
import MastFooter from "./components/MastFooter"
import Footer from "./components/Footer"
import avatars from "./mixins/avatars";

export default {
  name: "App",
  mixins: [avatars],
  components: {
    // Particles,
    Header,
    MastHead,
    Portfolio,
    Career,
    About,
    Contact,
    MastFooter,
    Footer
  },
  data: () => ({
    // template idea taken from: https://startbootstrap.com/previews/freelancer/
    // template converted using: https://codeburst.io/how-i-created-seo-friendly-portfolio-cv-website-and-hosted-it-on-github-d5c4da43cf2f
    
    // todo: add translations
  })
};
</script>
<style scoped>
.page-section {
  padding: 4rem 0;
  
}
.page-section:nth-child(odd) {
  background-color: #7f89a4;
}
</style>
