<template>
  <div>
    <!--  -->
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <LessonCard title="Introduction"/>
        </div>
        <div class="swiper-slide">
          <LessonCard title="Mission 1"/>
        </div>
        <div class="swiper-slide">
          <LessonCard title="Mission 2"/>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import LessonCard from "~/components/LessonCard";
export default {
  components: {
    LessonCard
  },
  created() {
    if (process.browser) {
      const VueAwesomeSwiper = require("vue-awesome-swiper/dist/ssr");
      Vue.use(VueAwesomeSwiper);
    }
  },
  data: () => ({
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    swiperOption: {
      slidesPerView: 1.4,
      spaceBetween: 20
    }
  })
};
</script>

<style>
</style>
