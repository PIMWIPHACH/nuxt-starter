<template>
  <div class="_w-100pct bg">
    <div>
      <div class="container _mgv-24px">
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
          <div class="col-12 _pdh-0px">
          </div>
          <div class="col-12"></div>

          </div>
          <div class="card">
            <h5 class="headline" >What is design thinking?</h5>
            <p class="lesson-desc">More than a methodology or framework, design thinking combines the problem-solving roots of design with deep empathy for the user. ..</p>
            <p class="swipe">(Swipe left for continue..)</p>
          </div>
           <div class="card">
            <h5 class="headline"></h5>
            <p class="lesson-desc">The design thinking-based framework popularized by the Stanford d.school can help your team take on the thorniest challenges with insightful solutions. ..</p>
            <p class="swipe">(Swipe left for continue..)</p>
          </div>
           <div class="card">
            <h5 class="headline"></h5>
            <p class="lesson-desc">In this guide, you’ll learn how to put design thinking into practice in your skill. ..</p>
            <p class="swipe"></p>
            <p class="reference">From Design Thinking Handbook by Eli Woolery</p>
            <nuxt-link class="btn" to="/lesson/introduction/quiz" >Next to the quiz</nuxt-link>
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
.w3-bar {
  margin-right: 0px;
  padding-right: 40px;
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
  font-size: 1.25em;
  font-weight: bold;
  color: white;
  background-color: transparent;
  border: none;
  margin-bottom: 0px;
  margin-top: px;
  letter-spacing: 0.25px;
}

.headline {
  font-size: 2em;
  font-weight: bold;
  margin: 20px 0px;
}

.card {
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
  text-align: left;
}

.swipe{
  font-size: 16px;
  color: #5881EC;
  margin: 20px 0px;
}

.reference {
  font-size: 14px;
  font-weight: bold;
  margin-top: 40px;
}

.btn {
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
