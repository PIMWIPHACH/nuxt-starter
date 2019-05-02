import Cookie from "cookie";
import bowser from "bowser";

export const state = () => ({
  primaryMenu: [],
  footerMenu: [],
  isMobileMenuActive: false,
  isSearchModalActive: false,
  pages: null,
  menuSticky: false,
  isPageLoading: false,
  headerColor: "#fff",
  isCurtainVisible: false,
  tutorialSteps: [
    {
      ref: "point",
      topic: "Point",
      description:
        "Points from each mission, you can exchange for more various items in this platform."
    },
    {
      ref: "achievement",
      topic: "Achievement",
      description:
        "Everytime you completed the mission, you get and collect your own badge to have permission for each next mission."
    },
    {
      ref: "fuel",
      topic: "Fuel",
      description:
        "You need to have fuel everytime unless you can’t travel to another planet to complete missions."
    },
    {
      ref: "status",
      topic: "Status",
      description:
        "The Status tells you where you are now in your journey to remind you how many journey you have left."
    },
    {
      ref: "episode",
      topic: "Episode",
      description:
        "To be able to completed each mission, you need to learn Design Thinking process and use the principles to solve it."
    },
    {
      ref: "",
      topic: "",
      description: "",
      btnText: "Start Mission 1",
      image: "/images/reward-tutorial.png"
    }
  ],
  currentTutorialStep: 0,
  lessons: [
    {
      name: "00 Why Design Thinking?",
      slug: "introduction",
      duration: "15 - 30 Mins",
      level: "Beginner",
      description:
        "“Short introduction about what is Design Thinking and why is important to understand to you.”",
      backgroundImage: "/images/card_lesson1.svg"
    },
    {
      name: "01 Empathize",
      slug: "mission-1",
      duration: "30 - 45 Mins",
      level: "Beginner",
      description:
        "“You will work to solves other’s problems and innovative design work begins with Empathy!”",
      backgroundImage: "/images/card_lesson2.svg"
    },
    {
      name: "02 Define",
      slug: "mission-2",
      duration: "30 - 60 Mins",
      level: "Beginner",
      description:
        "“You will learn to reframe your point of view based on insights from your users can be powerful design tool.”",
      backgroundImage: "/images/card_lesson3.svg"
    },
    {
      name: "03 Ideate",
      slug: "mission-3",
      duration: "30 - 60 Mins",
      level: "Beginner",
      description:
        "“Imagine you have a mission to save our planet. You need to know about tools.. Let’s find out!”",
      backgroundImage: "/images/card_lesson4.svg"
    },
    {
      name: "04 Prototype",
      slug: "mission-4",
      duration: "30 - 60 Mins",
      level: "Beginner",
      description:
        "“You will learn to build prototypes throughout the design process. Get smarter, faster!”",
      backgroundImage: "/images/card_lesson5.svg"
    },
    {
      name: "05 Test",
      slug: "mission-5",
      duration: "30 - 60 Mins",
      level: "Beginner",
      description:
        "“Learn to observe how your end user approaches your product give you the most important feedback of all.”",
      backgroundImage: "/images/card_lesson6.svg"
    }
  ]
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
        path: "Profile "
      },
      {
        title: "Lesson",
        path: "Lesson"
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
    // if (!isBrowserSupported)
    //   return redirect(
    //     app.localePath({
    //       name: "unsupported"
    //     })
    //   );
    return;
  }
};

export const mutations = {
  SET_CURRENT_STEP(state, n) {
    state.currentTutorialStep = n;
  },
  SET_CURTAIN_VISIBLE(state, bool) {
    state.isCurtainVisible = bool;
  },
  SET_HEADER_COLOR(state, color) {
    state.headerColor = color;
  },
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
