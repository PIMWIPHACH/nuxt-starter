<template>
  <div class="_w-100pct bg">
    <div>
      <div class="container _mgv-24px">
        <div class="row">
          <div class="col-4">
            <div class="doodle1_image">
              <img
                class="_w-24pct"
                style="margin-top: 50px;margin-left: 20px;"
                src="~/assets/images/profile2.svg"
                alt="Youth"
              >
            </div>
          </div>
          <div class="col-8 _pdh-0px">
            <p class="head" style="margin-left:20px;margin-top: 40px;">
              Hello, my name is Nick. Today I will be your instructor to
              teach you about this mission. {{ $route.params.slug }}
            </p>
          </div>
          <div class="col-12">
            <div class="overview">
              This Lesson you will learn quick
              <br>overview of the fundamental
              <br>principles behind Design Thinking
              <br>
              <br>Are you ready for mission?
            </div>
          </div>
          <div class="col-4">
            <div class="_pdh-24px" style="width: auto;">
              <a href="#">
                <button class="btn-back">Back</button>
              </a>
            </div>
          </div>
          <div class="col-8">
            <div class="_pdh-24px" style="width: auto;">
              <!-- <a href="#">
                <button class="btn" style="margin:auto">Play</button>
              </a>-->
              <nuxt-link class="btn" to="/lesson/introduction/detail">Play</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
}

.overview {
  text-align: center;
  margin-top: 200px;
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
  border-radius: 5px;
  background-color: #00de91;
  border: 2.25px solid #00de91;
  margin-bottom: 80px;
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
  border-radius: 5px;
  background-color: transparent;
  border: 2.25px solid white;
  margin-bottom: 80px;
}
</style>
