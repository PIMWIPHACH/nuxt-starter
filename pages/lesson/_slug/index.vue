<template>
  <div @click="section = 2" class="_w-100pct bg">
    <div>
      <div class="container _mgv-24px">
        <div class="row">
          <div class="col-12 _pdh-32px">
            <img style="width: 72px" src="~/assets/images/profile2.svg" alt="Youth">
            <!-- First Section -->
            <div class="_mgt-32px">
              <p class="_cl-white" style="font-family:poppins;">
                Hello, my name is Nick. Today I will be your instructor to
                teach you about this mission: {{ $route.params.slug }}
                <br>
                <br>(Tap to continue..)
              </p>
            </div>
            <!-- Second Section -->
            <div v-if="section === 2" class="_mgt-32px">
              <p
                class="_cl-white"
                style="font-family:poppins;"
              >This Lesson you will learn quick overview of the fundamental principles behind Design Thinking</p>
              <br>
              <p
                class="_cl-white"
                style="font-family:poppins;font-size: 20px;"
              >Are you ready for mission?</p>
              <!-- Buttons -->
              <div class="row _mgt-64px _alit-ct">
                <div class="col-6 _cl-white _tal-ct">
                  <h5>Back</h5>
                </div>
                <div class="col-6">
                  <nuxt-link
                    to="/lesson/introduction/lesson-1"
                    class="_cl-white bio-button -positive _w-100pct _bdrd-24px _pdv-12px"
                  >
                    <h5>Start</h5>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-12 _pdh-0px">
            <p class="head" style="margin-left:20px;margin-top: 40px;">
              Hello, my name is Nick. Today I will be your instructor to
              teach you about this mission. {{ $route.params.slug }}
            </p>
          </div>-->
          <!-- <div class="col-12">
            <div class="overview">
              This Lesson you will learn quick
              <br>overview of the fundamental
              <br>principles behind Design Thinking
              <br>
              <br>Are you ready for mission?
            </div>
          </div>-->
          <!-- <div class="col-4">
            <div class="_pdh-24px" style="width: auto;">
              <a href="#">
                <button class="btn-back">Back</button>
              </a>
            </div>
          </div>-->
          <!-- <div class="col-8">
            <div class="_pdh-24px" style="width: auto;">
              <nuxt-link class="btn" to="/lesson/introduction/detail">Play</nuxt-link>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    section: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  })
};
</script>

<style>
.head {
  font-family: poppins;
  color: white;
}

.bg {
  background-image: url(~assets/images/card_lesson1_start.svg);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: auto;
  min-height: 100vh;
}

.overview {
  text-align: left;
  margin-top: 60px;
  margin-bottom: 60px;
  font-family: poppins;
  color: white;
  font-weight: 200;
  line-height: 1.75;
}

.btn {
  text-align: center;
  color: white;
  font-family: poppins;
  font-weight: bold;
  padding-right: 65px;
  padding-left: 65px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 30px;
  background-color: #00de91;
  border: 2.25px solid #00de91;
  margin-top: 10px;
  margin-bottom: 60px;
}

.btn-back {
  text-align: center;
  color: white;
  font-family: poppins;
  font-weight: bold;
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 30px;
  background-color: transparent;
  border: 2.25px solid white;
  margin-bottom: 80px;
}
</style>
