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
              <button class="progress-name">90%</button>
            </div>
          </div>
          <div class="col-12">
            <img class="icon-challenge"
            src="~/assets/images/mini-flag.svg"
            style="margin-bottom:10px;"
            >
          </div>
          <div class="col-12">
            <p class="question">Match the questions with the correct answers.</p>
          </div>
          </div>
           <div class="card">
            <h5 class="headline" style="text-align: center;">Design Thinking is a _____.</h5>
            <div class="answer-choice">
              <button class="choice">Way of thinking about design</button>
              <button class="choice" style="border: 2px solid #00de91;"><nuxt-link to="/lesson/_slug/reward">Method and mindset to define, 
              frame, and solve problems</nuxt-link></button>
              <button class="choice">Way to seperate “Thinking” 
              from “Making”</button>
              <button class="choice">Curriculum for teaching 
              non-designers design</button>
            </div>
            <button class="finish-quiz">Finish quiz</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data: () => ({
    quizes: [
      {
        question: 'Design Thinking is a _____.',
        choices: [
          'Way of thinking about design',
          'Method and mindset to define',
          'Way to seperate “Thinking',
          'Curriculum for teaching non-designers design'
        ],
        correctChoice: 1
      }, {
        question: 'Design Thinking is a _____.',
        choices: [
          'Way of thinking about design',
          '',
          '',
          ''
        ],
        correctChoice: 0
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
  background-color: #00de91;
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
  font-size: 1em;
  font-weight: bold;
  margin: 20px 0px;
  color: #151862;
}

.question {
  font-family: "poppins";
  color: white;
  margin: 10px 0px;

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


.finish-quiz {
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

.choice {
  width: 100%;
  text-align: center;
  color: #151862;
  font-family: poppins;
  font-weight: regular;
  font-size: 14px;
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 30px;
  background-color: #F2F5FE;
  border: 2.25px solid #F2F5FE;
  margin-top: 20px;
}

</style>
