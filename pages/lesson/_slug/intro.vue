<template>
  <div class="_w-100pct bg">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="progress-bar">
            <div class="icon-close">
              <img
                class="icon-close"
                src="~/assets/images/icon-close-white.svg"
                style="weight: 30px;height: 30px;float: left;margin-bottom: 15px;margin-right: 20px;"
              >
            </div>
            <div class="w3-bar" style="margin-top: 0px;">
              <button class="progress-btn" style="background-color: #82E024"/>
              <button class="progress-btn"/>
              <button class="progress-btn"/>
              <button class="progress-btn"/>
              <img
                class="icon-star"
                src="~/assets/images/point_star.svg"
                style="weight: 30px;height: 30px;margin-left: 20px;"
              >
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="doodle1_image">
            <img
              class="_w-24pct"
              style="margin-left: 10px;margin-top: 30px;"
              src="~/assets/images/profile2.svg"
              alt="Youth"
            >
          </div>
        </div>
        <div class="col-8">
          <p
            class="conversation"
            style="margin-top: 40px;"
          >{{ $store.state.lesson.introduction[currentIndex].conv }}</p>
        </div>
      </div>
      <!-- LessonIntroSlider -->
      <LessonIntroSlider @onSlideChanged="updateCurrentIndex"/>

      <!-- <div class="card col-8">
        <div class="col-12 _mgv-12px">
          <h4 style="font-size: 18px;">Get to know “Design”</h4>
        </div>
        <div class="col-4">1/3</div>
        <div class="col-12">
          <p class="_mgv-24px">
            ก่อนที่จะเริ่มอธิบายถึง Design Thinking เราควรจะทำความเข้าใจ
            คำว่า การออกแบบ (Design) เสียก่อน
          </p>
        </div>
        <div>
          <img
            class="_w-24pct"
            style="width: 200px;height:150px;margin-left: 15px;"
            src="~/assets/images/table-chair.svg"
            alt="Youth"
          >
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import LessonIntroSlider from "~/components/LessonIntroSlider";
export default {
  components: {
    LessonIntroSlider
  },
  data: () => ({
    currentIndex: 0
  }),
  methods: {
    updateCurrentIndex(i) {
      this.currentIndex = i;
    }
  }
};
</script>

<style lang="scss">
body {
  overflow: hidden;
  overflow-y: auto;
  max-width: 100% !important;
  background: rgba(0, 0, 0, 0.015);
  color: #202b92;
  background-color: white;
}

.bg {
  background-image: url(~assets/images/Background_intro.svg);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: auto;
}

img {
  margin-right: 10px;
}

.description {
  color: red;
}

h2 {
  font-size: 2em;
  margin-top: 10px;
  margin-bottom: 10px;
}

.name {
  font-size: 1.25em;
  font-weight: bold;
  color: white;
  margin-bottom: 0px;
  margin-top: px;
  letter-spacing: 0.25px;
}

.level {
  display: inline;
  font-size: 0.4em;
  color: white;
  margin-top: 10px;
  padding: 2px 13px 2px;
  border: 1px solid white;
  border-radius: 30px;
}

.rectangle {
  height: 10px;
  width: 70px;
  margin: 0 0 0 20px;
  background-color: white;
  display: inline-block;
}

.number {
  font-size: 1.75em;
  font-weight: 600;
  text-align: left;
  margin-left: 10px;
  color: #b1c7ff;
}

h4 {
  font-size: 0.8em;
  margin-bottom: 10px;
  font-weight: bold;
  margin-left: 0px;
}

.progress-btn {
  margin-top: 30px;
  margin-right: 0px;
  padding-right: 40px;
  padding-top: 6px;
  border-radius: 5px;
  border: none;
}

.status {
  font-size: 1.5em;
  font-weight: bold;
}

.swiper-slide {
  font-weight: bold;
}

.conversation {
  font-family: "poppins", sans-serif;
  color: white;
}

.icon-star {
  margin-top: 20px;
}

.icon-close {
  margin-top: 20px;
}

.card {
  margin-top: 20px;
  margin-bottom: 30px;
  font-family: "poppins";
  position: relative;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 50px;
  min-height: 70px;
  border-radius: 10px;
  box-shadow: 0px 6px 20px 0px rgba(160, 160, 160, 0.3);
  text-align: left;
  transition: all 0.7s;
  border-bottom: 6px solid #b1c7ff;
  background-color: white;
  margin-bottom: 40px;
  &:hover {
    box-shadow: 0px 0px 40px -4px white;
  }
}

.next-to-quiz-button {
  width: 100%;
  color: white;
  font-family: poppins;
  font-weight: bold;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 5px;
  text-align: center;
  background-color: #00de91;
  border: 2.25px solid #00de91;
}
</style>
