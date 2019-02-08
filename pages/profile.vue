<template>
  <div class="_w-100pct bg">
    <!-- Profile Head -->
    <div>
      <div class="container _mgv-48px">
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
    <div class="container _mgv-24px">
      <div class="row no-gutters">
        <div class="col-4 _pdh-8px">
          <div class="card">
            <div class="card-block">
              <h2 class="number">0</h2>
              <h4 class="card-title" style="margin-right: 60px">Point</h4>
            </div>
          </div>
        </div>

        <div class="col-4 _pdh-8px">
          <div class="card">
            <div class="card-block">
              <h2 class="number">0</h2>
              <h4 class="card-title" style="margin-right: 5px">Acheivement</h4>
            </div>
          </div>
        </div>

        <div class="col-4 _pdh-8px">
          <div class="card">
            <div class="card-block">
              <h2 class="number">0</h2>
              <h4 class="card-title" style="margin-right: 60px">Fuel</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Status -->
    <div class="container _mgv-48px">
      <div class="row">
        <div class="col-12">
          <div style="margin-left: 10px">
            <h2 class="status">Status</h2>
            <p style="font-family: poppins;">
              You haven’t finished
              any achievement yet.
            </p>
            <div class="_pdh-64px _mgv-48px">
              <a href="#">
                <button type="submit" class="btn">Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template

<script>
export default {
  async created() {
    // fetch data via api
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
  background-image: url(~assets/images/Background_profile.svg);
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
  color: white;
  margin-bottom: 0px;
  margin-top: 90px;
  letter-spacing: 0.5px;
}

.level {
  font-size: 0.5em;
  color: white;
  margin-bottom: 0px;
}

.number {
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

.btn {
  background-color: #f0edff;
  height: 250px;
  width: 250px;
  border-radius: 500px;
  color: darkblue;
  border: 2.25px solid #f0edff;
}

.status {
  font-size: 1.5em;
  font-weight: bold;
}
</style>