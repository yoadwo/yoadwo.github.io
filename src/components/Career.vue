<template>
  <div>
    <v-container>
      <!-- Career Section Heading-->
      <h2 class="page-section-heading text-center white--text text-uppercase mb-0">Career</h2>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="divider-custom-line"></div>
      </div>
    </v-container>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <div class="employment">
          <v-timeline dark>
            <v-timeline-item v-for="(year, i) in years" :key="i" :color="alternateColors(i)" small>
              <span
                slot="opposite"
                :class="`headline font-weight-bold ${alternateColors(i)}--text`"
                v-text="year.year"
              ></span>
              <v-card class="elevation-4">
                <v-card-title class="headline" :class="`${alternateColors(i)}--text`">{{ year.title }}</v-card-title>
                <v-card-text class="subtitle-1 white--text" v-text="year.description"></v-card-text>
                <v-list dense>
                  <v-list-item v-for="(item, i) in year.keyPoints" :key="i">
                    <v-list-item-content>
                      <v-list-item-title  v-text="item"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-card-text v-text="year.city"></v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import "../assets/css/divider.css";
import "../assets/css/section.css";
export default {
  name: "Career",
  data: () => ({
    years: [
      {
        color: "yellow",
        year: "2020",
        title: "Log-On",
        description: "Server-Side & Infrastructure",
        keyPoints: []
      },
      {
        color: "light-green",
        year: "2019",
        title: "Heila Systems",
        description: "Full Stack Web Developer",
        keyPoints: [
          "Develop In-house CMS Platform",
          "Microservices Maintenance",
          "Optimize set-up time with concurrency"
        ]
      },
      {
        color: "yellow",
        year: "2017",
        title: "SCE College",
        description:
          'Tutor: "Testing & Quality In Software", "Principles of Software Engineering"',
        keyPoints: [
          "Build class plans from scratch",
          "Push students for excellence"
        ]
      }
    ]
  }),
  methods: {
    alternateColors(i) {
      return i % 2 == 0 ? 'light-green' : 'yellow';
    }
  }
};
</script>
<style scoped>
.v-card__title {
  word-break: break-word;
}

.v-list-item__title {
  word-break: break-word;
  white-space: normal;
}
</style>