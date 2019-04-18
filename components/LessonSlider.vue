<template>
  <div>
    <!--  -->
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide">
          <LessonCard title="Introduction"/>
        </div>
        <div class="swiper-slide">
          <LessonCard title="Mission 1"/>
        </div>
        <div class="swiper-slide">
          <LessonCard title="Mission 2"/>
        </div>-->
        <div v-for="(item, index) in $store.state.lessons" :key="index" class="swiper-slide">
          <LessonCard
            :bgImage="item.backgroundImage"
            :description="item.description"
            :duration="item.duration"
            :title="item.name"
          />
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
  data: () => ({
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    swiperOption: {
      slidesPerView: 1.4,
      spaceBetween: 20
    }
  }),
  created() {
    if (process.browser) {
      const VueAwesomeSwiper = require("vue-awesome-swiper/dist/ssr");
      Vue.use(VueAwesomeSwiper);
    }
  }
};
</script>

<style>
</style>
