import Vue from "vue";
import VueLazyload from "vue-lazyload";
import VeeValidate from "vee-validate";
import VueScrollTo from "vue-scrollto";
import VModal from "vue-js-modal/dist/ssr.index";
import Transitions from "vue2-transitions";
import moment from "moment";
require("moment/locale/th");

const LessonSlider = () => ({
  component: import("~/components/LessonSlider")
});

Vue.use(VueScrollTo);
Vue.use(VeeValidate);
// VueLazyLoad
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "/images/error.png",
  // loading: '/images/loading.gif',
  attempt: 1,
  lazyComponent: true
});
Vue.use(require("vue-moment"), {
  moment
});
Vue.use(VModal, {
  dialog: true
});
Vue.use(Transitions);

Vue.component("LessonSlider", LessonSlider);
