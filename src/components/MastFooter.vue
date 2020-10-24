<template>
  <footer class="footer text-center">
    <v-container>
      <v-row>
        <!-- Footer Location-->
        <!-- <div class="col-lg-4 mb-5 mb-lg-0"> -->
        <v-col cols="12" lg="6" class="mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4">Location</h4>
          <p class="lead mb-0">
            2 Aharonovic Street
            <br />Tel Aviv, IL 6356604
          </p>
        </v-col>
        <!-- Footer Social Icons-->
        <v-col lg="6" class="mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4">Around the Web</h4>
          <v-btn class="ma-2" icon outlined large fab color="white" target="_blank" href="https://www.facebook.com/yoadw">
            <v-icon>fab fa-fw fa-facebook-f</v-icon>
          </v-btn>
          <v-btn class="ma-2" icon outlined large fab color="white" target="_blank" href="https://www.linkedin.com/in/yoad-wolfsthal/">
            <v-icon>fab fa-fw fa-linkedin-in</v-icon>
          </v-btn>
          <v-btn class="ma-2" icon outlined large fab color="white" target="_blank" href="https://github.com/yoadwo">
            <v-icon>fab fa-fw fa-github</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>
<script>
export default {
  name: "MastFooter"
};
</script>
<style scoped>
.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.v-btn:hover .v-btn--fab:hover .v-btn--flat:hover .v-btn--icon:hover .v-btn--outlined:hover .v-btn--round:hover .theme--light:hover {
  /* not overriding */
  color: #212529 !important;
  background-color: #f8f9fa !important;
  border-color: #f8f9fa !important;
}
</style>