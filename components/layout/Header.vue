<template>
  <!-- 
    Header is a top navigation bar component
    Features:
      - Change moment.js locale
  -->
  <header
    :class="{'has-shadow animate sticky _bgcl-white': $store.state.menuSticky && !$store.state.isMobileMenuActive}"
  >
    <div class="container">
      <div class="menu-container">
        <!-- Branding -->
        <nuxt-link id="branding" :to="localePath('index')">Logo</nuxt-link>
        <!-- Menu -->
        <nav
          :class="{'-show-mobile': $store.state.isMobileMenuActive}"
          class="_dp-f _fdrt-cl _h-72px _jtfct-spbtw"
        >
          <!-- Search + Lang -->
          <!-- Menu Items -->
          <ul class="nav _tal-ct _tal-l-md">
            <li
              v-scroll-reveal="{delay: i * 100}"
              v-for="(item, i) in $store.state.primaryMenu"
              :key="i"
              class="_pst-rlt list-title _cs-pt _zid-1"
            >
              <div class="_pdt-16px _pdbt-8px _pdv-0px-md title">
                <!-- Icon -->
                <div v-if="item.submenu">
                  <i :class="item.icon" class="fa-fw fa-md"/>
                  <span class="_pst-rlt _t-2px" v-html="item.title"/>
                </div>
                <nuxt-link v-else :to="localePath(item.path)">
                  <i :class="item.icon" class="fa-fw fa-md"/>
                  <span class="_pst-rlt _t-2px" v-html="item.title"/>
                </nuxt-link>
              </div>
              <div v-if="item.submenu" class="dropdown _pst-asl-md">
                <!-- [Mobile only] Down arrow -->
                <div class="_dp-b _dp-n-md">
                  <i class="fal fa-long-arrow-down fa-2x"/>
                </div>
                <ul>
                  <li v-for="(list, j) in item.submenu" :key="j" class>
                    <nuxt-link
                      :to="localePath(list.path)"
                      class="_cl-white-md _cl-pink hover-spacing -tpr _dp-ilb _dp-b-md _fs-4 _fs-5-md"
                      v-html="list.title"
                    />
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <!-- Hamburger Menu Icon -->
        <Hamburger id="hamburger"/>
      </div>
    </div>
    <!-- Loading curtain -->
    <no-ssr>
      <fade-transition>
        <LoadingCurtain v-if="$store.state.isPageLoading"/>
      </fade-transition>
    </no-ssr>
  </header>
</template>

<script>
import LoadingCurtain from "~/components/layout/LoadingCurtain";
import Hamburger from "~/components/layout/Hamburger";
export default {
  components: {
    Hamburger,
    LoadingCurtain
  },
  watch: {
    "$store.state.isSearchModalActive"(val) {
      if (val) {
        this.$modal.show("search");
      } else {
        this.$modal.hide("search");
      }
    }
  },
  created() {
    if (process.browser) {
      this.$moment.locale(this.$store.state.i18n.locale);
      window.addEventListener("scroll", () => {
        if (window.scrollY > 160) {
          this.$store.commit("SET_MENU_STICKY", true);
        } else {
          this.$store.commit("SET_MENU_STICKY", false);
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "~assets/styles/variables";

#lang-switcher {
  > span {
    margin-right: 4px;
    margin-left: 4px;
  }
}

header {
  /* @media (max-width: $md - 1px) {
    padding: 0px 0px;
    color: white;
  } */
  padding: 18px 0px;
}

#extra-bar {
  text-align: right;
  > div {
    display: inline-block;
    margin: 0px 8px;
    &:last-child {
      margin: 0px;
    }
  }
}

.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0px 12px; */
  #hamburger {
    display: none;
  }
  /* Menu Mobile */
  @media (max-width: $md - 1px) {
    /* Show hamburger */
    #hamburger {
      display: block;
    }
    /* Make nav a modal */
    nav {
      user-select: none !important;
      transition: opacity 0.5s ease-out;
      opacity: 0;
      height: 0;
      overflow: hidden;
      visibility: hidden;
      position: absolute;
      width: 100%;
      min-height: calc(90vh - 90px);
      top: 0px;
      left: 0;
      right: 0;
      padding: 64px 12px 32px 12px;
      background: rgba(255, 255, 255, 0.9);
      z-index: 0;
      box-shadow: 0px 10px 40px -5px rgba(0, 0, 0, 0.1);
      color: white;
      &.-show-mobile {
        visibility: visible;
        opacity: 1;
        height: auto;
        z-index: 1;
      }
    }
  }
}

ul.nav {
  z-index: 10 !important;
  li.list-title {
    @media (min-width: $md) {
      display: inline-block;
      padding: 0px 14px;
      .title {
        font-size: 120%;
      }
      &:last-child {
        padding-right: 0px;
      }
    }
    @media (max-width: $md - 1px) {
      .title {
        font-size: 175%;
      }
    }
  }
}

.dropdown {
  user-select: none !important;
  outline: none !important;
  visibility: hidden;
  opacity: 0;
  /* left: 0px; */
  transition: left 0.5s, height 0.5s, visibility 0s,
    opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  height: 0;
  overflow: hidden;
  min-width: 200px;
  z-index: 10 !important;
  position: relative;
  @media (max-width: $md - 1px) {
    &::before {
      content: "";
    }
    transition-delay: 0.2s;
  }
  @media (min-width: $md) {
    padding-top: 24px;
    left: calc(50% - 110px);
    ul {
      background-color: $default-color;
      padding: 12px 16px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      position: relative;
      z-index: 9;
      /* background: $default-color; */
      &::before {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent $default-color transparent;
        content: "";
        position: absolute;
        top: -10px;
        left: calc(50% - 5px);
      }
    }
  }
  li {
    margin: 12px 0px 12px 0px;
    position: relative;
    z-index: 1;
  }
}

.list-title {
  &:hover {
    .dropdown {
      visibility: visible;
      opacity: 1;
      height: auto;
      user-select: none !important;
      outline: none !important;
      @media (min-width: $md) {
        left: calc(50% - 100px);
      }
    }
  }
}
</style>
