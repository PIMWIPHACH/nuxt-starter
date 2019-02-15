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
          <div class="card _tal-lt _mgh-24px">
            <div class="card-body">
              <h5
                class="_cl-#192344 _tal-lt _mgv-16px _pdh-16px"
                style="font-weight: bold;padding-top: 24px;"
              >{{ $store.state.tutorialSteps[$store.state.currentTutorialStep].topic }}</h5>
              <p
                class="_cl-#192344 _tal-lt _mgv-36px _pdh-16px _pdv-16px"
                style="font-family: poppins;font-size: 14px;"
              >{{ $store.state.tutorialSteps[$store.state.currentTutorialStep].description }}</p>
            </div>
          </div>
          <button
            @click="$store.commit('SET_CURRENT_STEP', ($store.state.currentTutorialStep < $store.state.tutorialSteps.length - 1)? $store.state.currentTutorialStep + 1: 0)"
            class="bio-button _mgh-at _mgv-8px"
            style="background: #82E024;border: solid #82E024;font-family: poppins;font-weight: bold;letter-spacing: .75px;padding: 8px 40px;border-radius: 5px"
          >Next</button>
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
}
.tut-panel {
  position: absolute;
  width: 100%;
  bottom: 180px;
  left: 0px;
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
  margin-bottom: 36px;
}
</style>
