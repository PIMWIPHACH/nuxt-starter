<template>
  <div class="card" :style="`background-image: url(${bgImage});`">
    <h2 class="location" style="text-align: left;">{{ location }}</h2>
    <h2 class="introduction" style="text-align: left;">{{ title }}</h2>
    <div style="padding: 0px;">
      <img
        src="~/assets/images/icon-clock.svg"
        style="weight: 18px;height: 18px;float: left;margin-right: 10px"
      >
      <div>
        <p class="time" style="font-family: poppins;text-align: left;">{{ duration }}</p>
      </div>
      <div class="_tal-l">
        <p class="level">{{ level }}</p>
      </div>

      <div>
        <p
          class="lesson-description"
          style="font-family: poppins;text-align: left;"
        >{{ description }}</p>
      </div>
      <!--  -->
      <nuxt-link class="playBtn" to="/lesson/introduction">Play</nuxt-link>
      <!-- <button @click="changeDescription">Play</button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    duration: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    level: {
      type: String,
      default: ""
    },
    location: {
      type: String,
      default: ""
    },
    bgImage: {
      type: String,
      default: ""
    }
  },
  data: () => ({}),
  // Define methods
  methods: {
    // Create a method (function)
    changeDescription() {
      // console.log(this.description);
      this.description = "hello world";
      // console.log(this.description);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  // background-image: url(~assets/images/card_lesson1.svg);
  font-family: "poppins";
  position: relative;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 40px;
  min-height: 70px;
  border-radius: 10px;
  box-shadow: 0px 6px 20px 0px rgba(160, 160, 160, 0.3);
  text-align: center;
  transition: all 0.7s;
  background-color: white;
  margin-bottom: 40px;
  &:hover {
    box-shadow: 0px 0px 40px -4px white;
  }
}

.location {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 0.8em;
  font-weight: semi-bold;
  color: #151862;
}

.introduction {
  margin-bottom: 10px;
  font-size: 1em;
  font-weight: bold;
  color: #151862;
  margin-bottom: 20px;
}

.time {
  margin-bottom: 20px;
  font-size: 0.8em;
  font-weight: regular;
  color: #151862;
}

.lesson-description {
  margin-bottom: 140px;
  font-size: 0.8em;
  font-weight: regular;
  color: #151862;
}

.playBtn {
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
}

.level {
  display: inline;
  font-size: 0.4em;
  color: white;
  background-color: #151862;
  margin-top: 10px;
  margin-left: 0px;
  padding: 2px 18px 2px;
  border-radius: 30px;
  text-align: left;
}
</style>
