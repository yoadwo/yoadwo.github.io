<template>
  <div class="portfolio-item" >
    <v-avatar size="164">
      <div class="portfolio-item-caption d-flex align-center justify-center h-100 w-100" @click="$emit('project-clicked')">
        <div class="portfolio-item-caption-content text-center white--text">
          <i class="fas fa-info-circle fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid h-100 w-100" :src="projectIconUrl(project.image)" alt />
    </v-avatar>
    <!-- Portfolio Item 6-->
    <!-- <div class="col-md-6 col-lg-4">
          <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
            <div
              class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
            >
              <div class="portfolio-item-caption-content text-center text-white">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" :src="projectIconUrl('redPill_round.png')" alt />
          </div>
    </div>-->
  </div>
</template>
<script>
import avatars from "../mixins/avatars";
export default {
  name: "PortfolioItem",
  props: ["project"],
  mixins: [avatars],
  data() {
    return {};
  }
};
</script>
<style scoped>
.portfolio .portfolio-item {
  position: relative;
  display: block;
  /* max-width: 25rem; */
  /* border-radius: 0.5rem; */
  /* overflow: hidden; */
  height: 100%;
  width: 100%;
}
.portfolio .portfolio-item .portfolio-item-caption {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  background-color: rgba(127, 137, 164, 0.9);
}
.portfolio-item-caption {
  cursor: pointer;
}
.portfolio .portfolio-item .portfolio-item-caption:hover {
  opacity: 1;
}
.portfolio
  .portfolio-item
  .portfolio-item-caption
  .portfolio-item-caption-content {
  font-size: 1.5rem;
}

.portfolio-modal .portfolio-modal-title {
  font-size: 2.25rem;
  line-height: 2rem;
}
@media (min-width: 992px) {
  .portfolio-modal .portfolio-modal-title {
    font-size: 3rem;
    line-height: 2.5rem;
  }
}
.portfolio-modal .close {
  position: absolute;
  z-index: 1;
  right: 1.5rem;
  top: 1rem;
  font-size: 3rem;
  line-height: 3rem;
  color: #1abc9c;
  opacity: 1;
}

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