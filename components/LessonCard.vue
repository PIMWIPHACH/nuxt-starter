<template>
  <div class="card">
    <h2 class="location" style="text-align: left;">{{ location }}</h2>
    <h2 class="introduction" style="text-align: left;">{{ title }}</h2>
    <div style="padding: 0px;">
      <img
        src="~/assets/images/point_star.svg"
        style="weight: 18px;height: 18px;float: left;margin-right: 10px"
      >
      <div>
        <p class="time" style="font-family: poppins;text-align: left;">{{ duration }}</p>
      </div>

      <div>
        <p
          class="lesson-description"
          style="font-family: poppins;text-align: left;"
        >{{ description }}</p>
      </div>
      <!--  -->
      <button @click="changeDescription">Play</button>
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
    location: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    duration: "15 - 30 Mins",
    description:
      "Imagine you have a mission to save our planet. You may need to know about tools.."
  }),
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
  background-image: url(~assets/images/card_lesson1.svg);
  font-family: "poppins";
  position: relative;
  padding-top: 15px;
  padding-left: 15px;
  padding-bottom: 40px;
  min-height: 70px;
  border-radius: 10px;
  box-shadow: 0px 6px 20px 0px rgba(160, 160, 160, 0.3);
  text-align: center;
  transition: all 0.7s;
  border-bottom: 6px solid #b1c7ff;
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
  font-weight: bold;
  color: #151862;
}

.introduction {
  margin-bottom: 10px;
  font-size: 1.6em;
  font-weight: bold;
  color: #151862;
}

.time {
  margin-bottom: 20px;
  font-size: 0.8em;
  font-weight: bold;
  color: #151862;
}

.lesson-description {
  margin-bottom: 60px;
  font-size: 0.8em;
  font-weight: bold;
  color: #151862;
}

button {
  text-align: center;
  color: white;
  font-family: poppins;
  font-weight: bold;
  padding-right: 85px;
  padding-left: 85px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 5px;
  background-color: #00de91;
  border: 2.25px solid #00de91;
}
</style>
