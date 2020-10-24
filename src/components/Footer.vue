<template>
  <div>
    <div class="copyright py-4 text-center white--text">
      <small>Copyright © Yoad Wolfsthal 2020</small>
    </div>
    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)-->
    <!-- <div class="scroll-to-top d-lg-none position-fixed"> -->
    <!-- <div class="scroll-to-top"> -->
    <!-- <a class="js-scroll-trigger d-block text-center text-white rounded" @click="document.documentElement.scrollTop = 0"> -->
    <!-- <i class="fa fa-chevron-up"></i> -->
    <!-- </a> -->
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style scoped>
small {
  font-size: 80%;
}
.copyright {
  background-color: #252934;
}
.scroll-to-top {
  z-index: 1042;
  right: 1rem;
  bottom: 1rem;
  display: none;
}
.scroll-to-top a {
  width: 3.5rem;
  height: 3.5rem;
  background-color: rgba(33, 37, 41, 0.5);
  line-height: 3.1rem;
}
</style>