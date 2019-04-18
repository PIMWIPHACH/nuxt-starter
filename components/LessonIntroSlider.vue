<template>
  <div>
    <!--  -->
    <div v-swiper:mySwiper="swiperOption" @slideChange="onSlideChanged">
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in $store.state.lesson.introduction"
          :key="index"
          class="swiper-slide"
        >
          <!-- <LessonCard
            :bgImage="item.backgroundImage"
            :description="item.description"
            :duration="item.duration"
            :title="item.name"
          />-->
          <div class="card">
            <div class="_dp-f _mgv-12px _jtfct-spbtw">
              <h6>{{ item.cardContent.title }}</h6>
              <h6>{{ index + 1 }}/{{ $store.state.lesson.introduction.length }}</h6>
            </div>
            <p class="_mgv-24px" v-html="item.cardContent.desc"></p>
            <div>
              <img
                class="_w-24pct"
                style="width: 200px;height:150px;margin-left: 60px;"
                :src="item.cardContent.image"
                alt="Youth"
              >
            </div>
            <button class="next-to-quiz-button">Next to quiz</button>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  components: {},
  data: () => ({
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }),
  created() {
    if (process.browser) {
      const VueAwesomeSwiper = require("vue-awesome-swiper/dist/ssr");
      Vue.use(VueAwesomeSwiper);
    }
  },
  methods: {
    onSlideChanged() {
      console.log(this.mySwiper.activeIndex);
      this.$emit("onSlideChanged", this.mySwiper.activeIndex);
    }
  }
};
</script>

<style>
</style>
