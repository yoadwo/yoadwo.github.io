<template>
  <v-app-bar app color="yellow darken-1">
    <div class="d-flex align-end">
      <v-img
          alt="hacker logo"
          class="shrink mr-2"
          contain
          :src="hackerUrlDark"
          transition="scale-transition"
          width="40"
          style="cursor:pointer;"
           @click="$vuetify.goTo('#welcome', options)"
        />
      <v-spacer></v-spacer>
    </div>
    <v-btn  @click="$vuetify.goTo('#portfolio', options)" text>
      <span class="mr-2">Portfolio</span>
    </v-btn>
    <v-btn @click="$vuetify.goTo('#career', options)" text>
      <span class="mr-2">Career</span>
    </v-btn>
    <v-btn @click="$vuetify.goTo('#about', options)" text>
      <span class="mr-2">About</span>
    </v-btn>
    <v-btn @click="$vuetify.goTo('#contact', options)" text>
      <span class="mr-2">Contact</span>
    </v-btn>
    <v-spacer></v-spacer>

    <v-btn href="https://www.facebook.com/yoadw" target="_blank" text>
      <v-icon>mdi-facebook</v-icon>
    </v-btn>

    <v-btn href="https://www.linkedin.com/in/yoad-wolfsthal/" target="_blank" text>
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>

    <v-btn href="https://github.com/yoadwo" target="_blank" text>
      <v-icon>mdi-github</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import avatars from "../mixins/avatars";
export default {
  name: "Header",
  mixins: [avatars],
  methods: {
    scrollTop(){
      document.documentElement.scrollTop = 0;
    }
  },
  computed: {
    options() {
      return {
          duration: 300,
          offset: 0,
          easing: 'easeOutQuad',
        }
    }
  }
};
</script>