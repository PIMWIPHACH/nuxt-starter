<template>
  <div class="_w-100pct bg">
    <!-- Profile Head -->
    <div>
      <div class="container _mgv-24px">
        <div class="row">
          <div class="col-6">
            <div class="doodle1_image">
              <img
                class="_w-24pct"
                style="margin-top: 60px"
                src="~/assets/images/Profile.svg"
                alt="Youth"
              >
            </div>
          </div>
          <div class="col-6 _pdh-0px">
            <h1 class="name">Drew Barrymore</h1>
            <h3>
              <span class="level">Beginner</span>
            </h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Item Cards  -->
    <div class="container">
      <div class="row no-gutters">
        <div class="col-4 _pdh-8px">
          <div ref="point" class="card">
            <div class="card-block">
              <img
                src="~/assets/images/point_star.svg"
                style="weight: 24px;height: 24px;float: left;"
              >
              <h2 class="number" style="color: #FFCD1C; font-weight: semi-bold;">100</h2>
              <h4 class="card-title" style="margin-right: 50px;">Point</h4>
            </div>
          </div>
        </div>

        <div class="col-4 _pdh-8px">
          <div ref="achievement" class="card">
            <div class="card-block">
              <img
                src="~/assets/images/achieve_diamond.svg"
                style="weight: 24px;height: 24px;float: left;"
              >
              <h2 class="number" style="color: #FF008A">1</h2>
              <h4 class="card-title" style="margin-right: 5px;">Acheivement</h4>
            </div>
          </div>
        </div>

        <div class="col-4 _pdh-8px">
          <div ref="fuel" class="card">
            <div class="card-block">
              <img
                src="~/assets/images/icon_fuel.svg"
                style="weight: 28px;height: 28px;float: left;"
              >
              <h2 class="number" style="color: #FFCD1C">0</h2>
              <h4 class="card-title" style="margin-right: 60px;">Fuel</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Status -->
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div ref="status" style="margin-left: 10px">
            <h2 class="status">Status</h2>
            <h3 ref="episode" class="episode"></h3>
          </div>
        </div>

        <div class="status-desc">
          <p>
            “You haven’t finished
            any achievement yet."
          </p>
        </div>

        <div ref="complete" class="_mth-24px _pdh-64px">
          <a href="#">
            <button class="btn" @click="startTutorial">Start</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    store.commit("SET_HEADER_COLOR", "#0D1886");
  },
  watch: {
    "$store.state.currentTutorialStep"(val) {
      // console.log(val);
      if (val === 0) {
        this.$store.commit("SET_CURTAIN_VISIBLE", false);
        this.$refs["point"].style.zIndex = 0;
        this.$refs["achievement"].style.zIndex = 0;
        this.$refs["fuel"].style.zIndex = 0;
        this.$refs["status"].style.zIndex = 0;
        this.$refs["episode"].style.zIndex = 0;
        return;
      }
      this.$refs["point"].style.zIndex = 0;
      this.$refs["achievement"].style.zIndex = 0;
      this.$refs["fuel"].style.zIndex = 0;
      this.$refs["status"].style.zIndex = 0;
      this.$refs["episode"].style.zIndex = 0;

      let ref = this.$store.state.tutorialSteps[val].ref;
      this.$refs[ref].style.zIndex = 1;
    }
  },
  methods: {
    startTutorial() {
      console.log("start tutorial");
      this.$store.commit("SET_CURTAIN_VISIBLE", true);
      // let ref = "fuel";
      let currentStep = this.$store.state.currentTutorialStep;
      let ref = this.$store.state.tutorialSteps[currentStep].ref;
      this.$refs[ref].style.zIndex = 1;
    }
  }
};
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
  margin-left: 10px;
  margin-right: 10px;
}

.description {
  color: red;
}

.card {
  font-family: "poppins";
  position: relative;
  padding: 0.5px;
  min-height: 70px;
  border-radius: 10px;
  box-shadow: 0px 6px 20px 0px rgba(160, 160, 160, 0.3);
  text-align: center;
  transition: all 0.7s;
  border-bottom: 6px solid #b1c7ff;
  background-color: white;
  margin-bottom: 0px;
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
  margin-top: 90px;
  letter-spacing: 0.25px;
}

.level {
  font-size: 0.5em;
  color: white;
  margin-bottom: 0px;
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

.status-desc {
  text-align: center;
  color: white;
  font-family: poppins;
  margin: auto;
  margin-top: 30px;
}

.btn {
  font-family: poppins;
  font-weight: bold;
  letter-spacing: 0.5px;
  background-color: #01c480;
  color: white;
  font-size: 1.2em;
  border: 2.25px solid #01c480;
  padding: 15px 80px;
  margin-bottom: 100px;
  margin-top: 20px;
  border-radius: 30px;
}

.status {
  font-size: 1.2em;
  font-weight: bold;
  color: white;
}

.episode {
  margin-top: 20px;
  font-size: 1em;
  color: white;
  text-align: center;
}
</style>