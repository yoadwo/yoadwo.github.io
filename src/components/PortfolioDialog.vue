<template>
  <v-dialog v-model="visible" :max-width="maxWidth">
    <v-card>
      <v-card-title class="headline">{{selectedTitle}}</v-card-title>
      <v-card-text>
        <p v-for="(p, i) in selectedDescription" :key="i">{{p}}</p>
        <v-container>
          <v-row>
            <v-col cols="3">
              <p v-for="(p, i) in selectedStack" :key="i">{{p}}</p>
            </v-col>
            <v-col cols="9" class="d-flex row child-flex">
              <v-card flat tile class="mx-1" v-for="i in selectedScreens" :key="i">
                <v-img :src="projectIconUrl(i)" aspect-ratio="1" contain></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="$emit('cool-clicked')">Cool!</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import avatars from "../mixins/avatars";
export default {
  name: "Portfolio",
  mixins: [avatars],
  props: ['selectedProject', 'max-width', 'visible'],
  data() {
    return {
      /* 
      <v-col v-for="i in selectedScreens" :key="i" class="d-flex child-flex" cols="4">
                      <v-card flat tile class="d-flex">
                        <v-img :src="projectIconUrl(i)" aspect-ratio="1" contain></v-img>
                      </v-card>
                    </v-col>
      */
    };
  },
  methods: {
  },
  computed: {
    selectedTitle() {
      return this.selectedProject ? this.selectedProject.title : "";
    },
    selectedDescription() {
      return this.selectedProject ? this.selectedProject.description : [];
    },
    selectedStack() {
      return this.selectedProject ? this.selectedProject.stack : [];
    },
    selectedScreens() {
      return this.selectedProject ? this.selectedProject.screens : [];
    }
  }
};
</script>
<style scoped>
.h-100 {
  height: 100% !important;
}

.w-100 {
  width: 100% !important;
}

.h-50 {
  height: 100% !important;
}

.w-50 {
  width: 100% !important;
}
</style>