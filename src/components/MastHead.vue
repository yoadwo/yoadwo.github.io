<template>
  <header class="masthead white--text text-center particles-rel">
    <!-- <Particles width="100%" height="100%" class="particles-child"/> -->
    <div id="particles" class="particles-child"></div>
    <div class="d-flex flex-column align-center particles-rel">
      <img class="masthead-avatar mb-5" :src="profileUrl" alt />
      <h1 class="masthead-heading text-uppercase mb-0">Yoad Wolfsthal</h1>
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"></div>
        <i class="fas fa-star"></i>
        <div class="divider-custom-line"></div>
      </div>
      <p class="masthead-subheading font-weight-light mb-0">Full Stack Developer</p>
    </div>
  </header>
</template>
<script>
import avatars from "../mixins/avatars";
import Particles from "./Particles";
import '../assets/css/divider.css';
export default {
  name: "MastHead",
  mixins: [avatars],
  components: {
    Particles
  },
  mounted() {
    // https://jparticles.js.org/#/examples/particle
    new JParticles.particle("#particles", {
      // The straight line distance between the two particle centers is 90
      proximity: 150,
      // All points are within the range of 100(including) for the positioning point radius,
      // the distance between the center points is less than
      // or equal to the `proximity` value, then the connection
      range: 80
    });
  }
};
</script>
<style scoped>
.container {
  min-width: 992px !important;
}
.masthead {
  padding-top: calc(3rem + 14px);
  padding-bottom: 4rem;
  background-color:#252934; 
  }
.masthead .masthead-heading {
  font-size: 2.75rem;
  line-height: 2.75rem;
}
.masthead .masthead-subheading {
  font-size: 1.25rem;
}
.masthead .masthead-avatar {
  /* width: 15rem; */
  width: 30%;
  height: 30%;
}

@media (min-width: 992px) {
  .masthead {
    padding-top: calc(3rem + 44px);
    padding-bottom: 4rem;
  }
  .masthead .masthead-heading {
    font-size: 4rem;
    line-height: 3.5rem;
  }
  .masthead .masthead-subheading {
    font-size: 1.5rem;
  }
}
.particles-rel {
  position: relative;
}
.particles-child {
  position: absolute;
  height: calc(100% + 10rem);
  width: 100%;
   /* padding-bottom: calc(-1 * calc(4rem)); */
   top: 0;
  left: 0;
}
</style>