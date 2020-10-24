<template>
  <div id="particles" v-bind:style="{ width: width, height: height}"></div>
</template>
<script>
export default {
  name: "Particles",
  props: ["width", "height"],
  /* mounted() {
    new JParticles.particle("#particles", {
      // The straight line distance between the two particle centers is 90
      proximity: 90,
      // All points are within the range of 100(including) for the positioning point radius,
      // the distance between the center points is less than
      // or equal to the `proximity` value, then the connection
      range: 100
    });
  } */
};
</script>