<template>
  <div id="top">
    <Header/>
    <!-- Content -->
    <main
      :class="{'menu-sticky-active': $store.state.menuSticky}"
      class="min-height-100vh _dp-f _alit-ct _ovfx-hd"
    >
      <nuxt/>
    </main>
    <Footer/>
    <!-- Curtain -->
    <div v-if="$store.state.isCurtainVisible" class="curtain">
      <!-- Tutorial Panel -->
      <div class="content _tal-lt" style="margin-bottom: 128px">
        <div class="tut-panel">
          <div class="card _tal-lt _mgh-24px _mgv-48px">
            <div class="card-body">
              <h5
                class="_cl-#192344 _tal-lt _mgv-16px _pdh-24px"
                style="font-weight: bold;padding-top: 24px;color:#FF9317;"
              >{{ $store.state.tutorialSteps[$store.state.currentTutorialStep].topic }}</h5>
              <!--  -->
              <p
                class="_cl-#192344 _tal-lt _mgv-36px _pdh-24px _pdv-24px"
                style="font-family: poppins;font-size: 16px;"
              >{{ $store.state.tutorialSteps[$store.state.currentTutorialStep].description }}</p>
              <img
                class="_w-80pct _mgh-at _dp-b"
                v-if="$store.state.tutorialSteps[$store.state.currentTutorialStep].image"
                :src="$store.state.tutorialSteps[$store.state.currentTutorialStep].image"
                alt
              >
              <!-- You receive points -->
              <div
                class="receive-point"
                v-if="$store.state.tutorialSteps[$store.state.currentTutorialStep].image"
              ></div>
            </div>
          </div>
          <button
            class="bio-button _mgh-at _mgv-8px"
            style="background: #00DE91;border: solid #00DE91;font-family: poppins;font-weight: bold;letter-spacing: .75px; padding: 12px 0px; width: 90%;border-radius: 30px"
            @click="clickNext()"
          >{{ $store.state.tutorialSteps[$store.state.currentTutorialStep].btnText || 'Next' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
export default {
  components: {
    Header,
    Footer
  },
  methods: {
    clickNext() {
      if (
        this.$store.state.currentTutorialStep <
        this.$store.state.tutorialSteps.length - 1
      ) {
        this.$store.commit(
          "SET_CURRENT_STEP",
          this.$store.state.currentTutorialStep + 1
        );
      } else {
        return (window.location.href = "/lesson");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.curtain {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 130vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
}
.tut-panel {
  position: absolute;
  width: 100%;
  bottom: 280px;
  left: 0px;
}

.receive-point {
  font-family: poppins;
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  color: #ff9317;
  font-weight: bold;
}

.arrow {
  position: absolute;
  width: 80px;
  height: 80px;
  top: 180px;
  left: 70px;
}

.card {
  background: white;
  border-radius: 10px;
  margin-top: 0px;
  margin-bottom: 36px;
}
</style>