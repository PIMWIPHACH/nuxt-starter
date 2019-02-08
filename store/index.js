import Cookie from "cookie";
import bowser from "bowser";

export const state = () => ({
  primaryMenu: [],
  footerMenu: [],
  isMobileMenuActive: false,
  isSearchModalActive: false,
  pages: null,
  menuSticky: false,
  isPageLoading: false
});

export const actions = {
  async isBrowserSupported({ commit }, ua) {
    const browser = bowser.getParser(ua);
    const isValidBrowser = browser.satisfies({
      // declare browsers per OS
      // per platform (mobile, desktop or tablet)
      mobile: {
        safari: ">7",
        "android browser": ">4"
      },
      // or in general
      "internet explorer": ">=11",
      safari: ">8",
      chrome: ">20.1.1432",
      firefox: ">51",
      opera: ">22"
    });
    console.log(isValidBrowser);
    return isValidBrowser;
  },
  async nuxtServerInit(
    { dispatch, commit, state, rootState },
    { req, app, redirect }
  ) {
    // Hotfix axios lang
    let lc = app.i18n.locale === "th" ? "" : app.i18n.locale;
    app.$axios.defaults.baseURL = `${app.$axios.defaults.baseURL}${lc}`;

    // await dispatch('api/getInitialData')
    const m = rootState.i18n.messages;
    const primaryMenu = [
      {
        title: "Login",
        path: "login"
      },
      {
        title: "Profile",
        path: "profile"
      }
    ];
    const footerMenu = primaryMenu;

    commit("SET_PRIMARY_MENU", primaryMenu);
    commit("SET_FOOTER_MENU", footerMenu);
    const isBrowserSupported = await dispatch(
      "isBrowserSupported",
      req.headers["user-agent"]
    );
    console.log(isBrowserSupported);
    if (!isBrowserSupported)
      return redirect(
        app.localePath({
          name: "unsupported"
        })
      );
    return;
  }
};

export const mutations = {
  SET_PRIMARY_MENU(state, menu) {
    state.primaryMenu = menu;
  },
  SET_FOOTER_MENU(state, menu) {
    state.footerMenu = menu;
  },
  SET_MOBILE_MENU_ACTIVE(state, bool) {
    if (process.browser) {
      if (bool) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    }
    state.isMobileMenuActive = bool;
  },
  SET_SEARCH_MODAL_ACTIVE(state, bool) {
    state.isSearchModalActive = bool;
  },
  SET_MENU_STICKY(state, bool) {
    state.menuSticky = bool;
  },
  SET_INITIAL_DATA(state, i) {
    state.pages = i.pages.reduce((result, item) => {
      const key = item.slug;
      result[key] = item;
      return result;
    }, {});
  },
  SET_PAGE_LOADING(state, bool) {
    state.isPageLoading = bool;
  }
};
