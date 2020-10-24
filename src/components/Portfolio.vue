<template>
  <div class="container">
    <div ref="visible">
      <!-- Portfolio Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase mb-0">Portfolio</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Portfolio Grid Items-->
      <v-container>
        <v-row>
          <v-col
            align="center"
            justify="center"
            cols="12"
            md="6"
            lg="4"
            class="mb-10"
            v-for="(project, i) in projects"
            :key="i"
          >
            <PortfolioItem @project-clicked="openModal(project)" :project="project" />
          </v-col>
        </v-row>
        <v-row>
          <PortfolioDialog
            :visible="isDialogVisible"
            max-width="66%"
            :selected-project="selectedProject"
            @cool-clicked="closeModal()"
          />
        </v-row>
        <v-layout align-center justify-space-between row fill-height>
          <i :class="`devicon-${icon}`" style="font-size: 4em;" v-for="(icon,i) in icons" :key="i"></i>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
<script>
import PortfolioItem from "./PortfolioItem";
import PortfolioDialog from "./PortfolioDialog";
import "../assets/css/divider.css";
import "../assets/css/section.css";
export default {
  name: "Portfolio",
  components: {
    PortfolioItem,
    PortfolioDialog
  },
  data() {
    return {
      // todo: add "gvanim"
      projects: [
        {
          title: "SCE Time Table",
          image: "sce_logo.png",
          description: [
            "As a solution to a real need by students, developed a desktop application that displays a time table of every lecture and practical session on a user-friendly GUI.",
            "Including Login & Signup screens, each student could only access (and add) content according to his study program"
          ],
          stack: ["- Client: C#", "- Server: PHP", "- Database: MySQL"],
          screens: ["sce_add_class.png", "sce_login.png", "sce_user_main.png"]
        },
        {
          title: "Red Pill",
          image: "redPill_round.png",
          description: [
            "Again trying to solve a real-life pains, this time facilitating pill prescriptions. Also, The app was a first attempt at cross-platform systems.",
            "First, to help understand the doctors' infamous handwriting, it appends a QR code to the given prescription. The code can the be scanned by the pharmacist.",
            "Second, to help not forgetting to take the pills, the same QR code adds event reminders on the patients' phone, including a special reminder to refill the prescription, if needed."
          ],
          stack: [
            "- Client: .net Razor & jQuery",
            "- Server: .net",
            "- Mobile: Android"
          ],
          screens: [
            "redpill_android.png",
            "redpill_write.png",
            "redpill_read.png"
          ]
        },
        {
          title: "Dude, Where's My Car?",
          image: "dude_full_logo_round_big.jpg",
          description: [
            "My very first android application",
            "Just before Google and Waze came up with the same feature, I allowed my users to save the location of their parked car (as a pin on google maps), save its location, and share them with their friends.",
            "My special feature was the 'birds-eye' navigation: Allowing even the orientation-challenged people get a straight reading back to their car. Behind the scenes, my own calculations compensate between 'real north' and 'magnetic north'."
          ],
          stack: ["- Mobile: Android", "- external APIs: Google Maps"],
          screens: ["dude_main.png", "dude_camera.png", "dude_map.png"]
        }
      ],
      icons: [
        "go-plain",
        "javascript-plain",
        "vuejs-plain",
        "mysql-plain",
        "dot-net-plain",
        "csharp-plain",
        "java-plain",
        "android-plain",
        "python-plain",
        "git-plain",
        "google-plain"
      ],
      isDialogVisible: false,
      selectedProject: null
    };
  },
  methods: {
    openModal(project) {
      this.isDialogVisible = true;
      this.selectedProject = project;
    },
    closeModal(project) {
      this.isDialogVisible = false;
      // this.selectedProject = null;
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