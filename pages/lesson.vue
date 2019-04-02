<template>
  <div class="_w-100pct bg">
    <!-- Profile Head -->
    <div>
      <div class="container _mgt-48px">
        <div class="row">
          <div style="margin-left: 25px;">
            <h1 class="name" style="font-weight: bold;line-height: 1.25">
              Supisara
              <br>Suwanrungruang
            </h1>
            <h3>
              <div class="level">Beginner</div>
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row no-gutters">
        <div class="col-12 _pdh-8px">
          <div class="progress-bar" style="display: inline-block">
            <div class="progress-bar">
              <div class="w3-bar" style="margin-top: 0px;">
                <button class="w3-btn" style="background-color: #82E024"></button>
                <button class="w3-btn"></button>
                <button class="w3-btn"></button>
                <button class="w3-btn"></button>
                <button class="w3-btn"></button>
                <button
                  class="w3-btn name"
                  style="margin-left: 0px;background-color: transparent;"
                >20%</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Item Cards  -->
    <div class="container">
      <div class="row no-gutters">
        <div class="col-3 _pdh-4px">
          <div ref="point">
            <div class="card-block">
              <img
                src="~/assets/images/point_star.svg"
                style="weight: 18px;height: 18px;float: left;"
              >
              <h2
                class="number"
                style="color: #FFCD1C; font-weight: semi-bold;font-size: 1.25em;"
              >100</h2>
            </div>
          </div>
        </div>

        <div class="col-3 _pdh-4px">
          <div ref="achievement">
            <div class="card-block">
              <img
                src="~/assets/images/achieve_diamond.svg"
                style="weight: 18px;height: 18px;float: left;"
              >
              <h2 class="number" style="color: #FF008A;font-size: 1.25em;margin-left: 10px;">1 / 10</h2>
            </div>
          </div>
        </div>

        <div class="col-3 _pdh-4px">
          <div ref="fuel">
            <div class="card-block">
              <img
                src="~/assets/images/icon_fuel.svg"
                style="weight: 22px;height: 22px;float: left;"
              >
              <h2 class="number" style="color: #FFCD1C;font-size: 1.25em;">0</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Status -->
    <div class="container _mgv-24px">
      <div class="row">
        <div class="col-12">
          <div style="margin-left: 10px">
            <!--  -->
            <!--  -->
            <LessonSlider/>
            <div>
              <!--  -->
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

<style lang="scss" scoped>
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

.w3-btn {
  margin-right: 0px;
  padding-right: 40px;
  padding-top: 6px;
  border-radius: 5px;
  border: none;
}

.btn {
  font-family: poppins;
  font-weight: bold;
  letter-spacing: 0.5px;
  background-color: #82e024;
  height: 50px;
  width: 150px;
  border-radius: 10px;
  color: white;
  border: 2.25px solid #82e024;
}

.status {
  font-size: 1.5em;
  font-weight: bold;
}

.swiper-slide {
  font-weight: bold;
}
</style>