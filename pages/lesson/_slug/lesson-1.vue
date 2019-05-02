<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="icon-close">
          <img
            class="icon-close"
            src="~/assets/images/icon-close-white.svg"
            style="weight: 30px;height: 30px;float: left;margin-bottom: 10px;margin-right: 20px;"
          >
        </div>
        <div class="w3-bar">
          <button class="progress"></button>
          <button class="progress"></button>
          <button class="progress"></button>
          <button class="progress"></button>
          <button class="progress-name">20%</button>
        </div>
      </div>
      <div class="col-12">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in cards" :key="index" class="swiper-slide">
              <!-- <LessonCard
            :bgImage="item.backgroundImage"
            :description="item.description"
            :duration="item.duration"
            :title="item.name"
              />-->

              <div class="card">
                <div
                  class="_dp-f _mgv-12px _jtfct-spbtw _fw-700"
                  style="font-size:20px;"
                >{{ item.headline }}</div>
                <div
                  class="_dp-f _jtfct-spbtw"
                  style="font-size:18px;line-height: 1.5;margin-top:20px;margin-bottom:40px;"
                >{{ item.desc }}</div>
                <div
                  class="_dp-f _jtfct-spbtw"
                  style="font-size:18px;line-height: 1.5;margin-top:20px;margin-bottom:160px;color:#5881EC;"
                >{{ item.swipe }}</div>
                <div
                  class="_dp-f _mgv-12px _jtfct-spbtw"
                  style="font-size:14px;font-weight: bold;line-height: 1.5;margin-top:20px;margin-bottom:20px;"
                >{{ item.reference }}</div>
                <nuxt-link
                  class="_dp-f _mgv-12px _jtfct-spbtw"
                  style="font-size:18px;line-height: 1.5;text-align:right;"
                  to="/lesson/introduction/quiz"
                >{{ item.btn }}</nuxt-link>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    cards: [
      {
        headline: "What is design thinking?",
        desc:
          "More than a methodology or framework, design thinking combines the problem-solving roots of design with deep empathy for the user..",
        swipe: "(Swipe left for continue..)",
        reference: "",
        btn: ""
      },
      {
        headline: "   ",
        desc:
          "The design thinking-based framework popularized by the Stanford d.school can help your team take on the thorniest challenges with insightful solutions..",
        swipe: "(Swipe left for continue..)",
        reference: "   ",
        btn: "   "
      },
      {
        headline: "   ",
        desc:
          "In this guide, you’ll learn how to put design thinking into practice in your skill..",
        swipe: "(Swipe left for continue..)",
        reference: "From Design Thinking Handbook by Eli Woolery",
        btn: "Next to quiz"
      }
    ]
  })
};
</script>

<style scoped>
.w3-bar {
  margin-right: 0px;
  padding-top: 6px;
  border: none;
  margin-bottom: 30px;
}

.progress {
  background-color: #fff;
  border: none;
  padding-right: 40px;
  padding-top: 6px;
  margin-right: 5px;
  border-radius: 30px;
}

.progress-name {
  font-family: poppins, sans-serif;
  font-size: 1em;
  font-weight: bold;
  color: white;
  background-color: transparent;
  border: none;
  margin-bottom: 0px;
  margin-top: px;
  letter-spacing: 0.25px;
  padding-right: 0px;
}

.headline {
  font-size: 1em;
  font-weight: bold;
  margin: 20px 0px;
}

.card {
  font-family: "poppins";
  position: relative;
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 40px;
  min-height: 70px;
  border-radius: 10px;
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: all 0.7s;
  background-color: white;
  margin-bottom: 40px;
  text-align: left;
}

.swipe-left {
  font-size: 16px;
  color: #5881ec;
  margin: 20px 0px;
}

.reference {
  font-size: 14px;
  font-weight: bold;
  margin-top: 40px;
}

.button {
  width: 100%;
  text-align: center;
  color: white;
  font-family: poppins;
  font-weight: bold;
  padding-right: 85px;
  padding-left: 85px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 30px;
  background-color: #00de91;
  border: 2.25px solid #00de91;
  margin-top: 40px;
}
</style>

