<template>
  <div class="_w-100pct bg">
    <!-- intro -->
    <div>
      <div class="container _mgv-128px">
        <div class="row">
          <div class="col-md-8 order-2 order-md-1">
            <div class="introduction">
              <h1 style="font-size: 1em; color: white;">KIDDEE</h1>
              <h3
                class="tagline"
                style="font-family: merriweather;font-weight: light"
              >Learn Interactive
                <br>
                <span style="font-family: merriweather;font-weight: bold">Design Thinking</span>
                <br>
                <span>Simply on your hand.</span>
              </h3>

              <div>
                <a href="#">
                  <span>
                    <img
                      arrow
                      src="~/assets/images/arrow_white.svg"
                      alt="Youth"
                      style="margin-top: 50px;"
                    >
                  </span>
                  <button type="submit" class="btn btn-primary" align="left">Get Started</button>
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4 order-1 order-md-2"></div>
        </div>
      </div>
    </div>

    <!-- How it works -->
    <!--<div class="container _mgv-64px">
      <div class="row">
        <div class="col-md-6" style="margin-right: 0"></div>
        <div class="col-md-6">
          <div align="left">
            <h4 style="color:white">How it works</h4>
          </div>
        </div>
      </div>
    </div>-->
    <!-- Why Design Thinking? -->
    <!--<div class="container _mgb-128px">
      <div class="row">
        <div class="col-12">
          <div style="margin-top: 20px">
            <h4 class="headline" style="color:white">Why Design Thinking?</h4>
            <p class="_pdh-64px" style="color:white">
              "Design Thinking" หรือกระบวนการคิดสร้างสรรค์
              เชิงออกแบบเป็นกระบวนการในการผลิตและคิดหา
              นวัตกรรมใหม่ๆ ที่เริ่มต้นจากการทำความเข้าใจคน
              หาความต้องการที่ซ่อนอยู่ในตลาด และเน้นการลงมือทำ
              ลองผิดลองถูก ทำซ้ำ เพื่อทดลองเรียนรู้
            </p>
            <span>
              <img src="~/assets/images/standing-23.svg" alt="Youth">
            </span>
          </div>
        </div>
      </div>
    </div>-->
    <!-- Benefits of Design Thinking -->
    <!--<div class="container _mgv-64px">
      <div class="row">
        <div class="col-12">
          <div align="middle">
            <h4 class="headline">Benefits of Design Thinking</h4>
            <div>
              <p class="description2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card _mgv-24px">
            <div class="card-block">
              <h4 class="card-title">Creativity</h4>
              <p class="card-text">
                ทักษะความคิดสร้างสรรค์เป็นหนึ่งในทักษะสำคัญที่ทำให้เราสามารถคิดแก้ปัญหา
                หลุดจากกรอบเดิม ทำให้เราสามารถเกิดไอเดียใหม่ได้
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card _mgv-24px">
            <div class="card-block">
              <h4 class="card-title">Problem Solving</h4>
              <p class="card-text">
                ทักษะความคิดสร้างสรรค์เป็นหนึ่งในทักษะสำคัญที่ทำให้เราสามารถคิดแก้ปัญหา
                หลุดจากกรอบเดิม ทำให้เราสามารถเกิดไอเดียใหม่ได้
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card _mgv-24px">
            <div class="card-block">
              <h4 class="card-title">Critical Thinking</h4>
              <p class="card-text">
                ทักษะความคิดสร้างสรรค์เป็นหนึ่งในทักษะสำคัญที่ทำให้เราสามารถคิดแก้ปัญหา
                หลุดจากกรอบเดิม ทำให้เราสามารถเกิดไอเดียใหม่ได้
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <!--<div class="container _mgv-64px">
      <div class="row">
        <div class="col-12">
          <div align="middle">
            <h4 class="headline">Are you ready?</h4>
            <p
              class="description2 _pdh-64px"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <span>
              <a href="#">
                <button type="submit" class="btn btn-primary">Get Started</button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    store.commit("SET_HEADER_COLOR", "white");
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url(~assets/images/Background2.svg);
  background-repeat: no-repeat;
  background-position: top right;
  background-size: auto;
}

.description {
  color: red;
}

.card {
  font-size: 14px;
  font-family: "poppins";
  position: relative;
  padding: 10px;
  padding-right: 30px;
  padding-left: 30px;
  min-height: 100px;
  border-radius: 10px;
  box-shadow: 0px 6px 20px 0px rgba(160, 160, 160, 0.3);
  text-align: center;
  transition: all 0.7s;
  border-radius: 6px;
  border-bottom: 6px solid #b1c7ff;
  background-color: white;
}

h2,
h4 {
  color: blue;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.75em;
}

h1 {
  color: orange;
  font-weight: 600;
  margin-bottom: 30px;
}

h5 {
  color: blue;
  font-size: 0.125em;
}

.tagline {
  color: white;
  font-size: 32 px;
  font-weight: 400;
  line-height: 1.5;
  font-size: 32px;
}

p {
  color: grey;
  font-family: "Bai Jamjuree";
  margin-bottom: 50px;
}

.text-center {
  text-align: center;
}

.inline-block {
  display: inline-block;
}

//

.card:hover {
  border-color: #ffbf00;
}

.card-title {
  font-size: 1.4em;
}

.flex {
  display: flex;
  max-width: 1200px;
  justify-content: space-around;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.btn {
  margin-right: 20px;
}

.btn {
  transition: 0.3s;
  position: relative;
  margin-top: 50px;
  margin-bottom: 160px;
  border: none;
  border-radius: 30px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: none;
  font-weight: 600;
  background-color: transparent;
}

.btn:hover {
  text-decoration: underline;
  background-color: transparent;
}

* {
  box-sizing: border-box;
}

.doodle1_image {
  margin-top: 0px;
}

.david-kelley-ideo-image {
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 15px 50px 30px 5px;
}

.quote {
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
}

.introduction {
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 50px;
}

/* Large devices (laptops/desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .headline {
    color: white;
  }

  .description2 {
    color: white;
  }
}

/* Medium devices (landscape tablets, 900px and up) */
@media only screen and (min-width: 900px) {
  .headline {
    color: white;
  }

  .description2 {
    color: white;
  }
}
</style>
