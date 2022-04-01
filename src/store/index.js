import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    macrameBagQty: 0,
    macrameHangerQty: 0,
    carabinaQty: 0,
    cameraStrapQty: 0
  },
  mutations: {
    addMacrameBag(state) {
      state.macrameBagQty++;
    },
    removeMacrameBag(state) {
      if (state.macrameBagQty > 0) {
        state.macrameBagQty--;
      }
    },
    addMacrameHanger(state) {
      state.macrameHangerQty++;
    },
    removeMacrameHanger(state) {
      if (state.macrameHangerQty > 0) {
        state.macrameHangerQty--;
      }
    },
    addCarabina(state) {
      state.carabinaQty++;
    },
    removeCarabina(state) {
      if (state.carabinaQty > 0) {
        state.carabinaQty--;
      }
    },
    addCameraStrap(state) {
      state.cameraStrapQty++;
    },
    removeCameraStrap(state) {
      if (state.cameraStrapQty > 0) {
        state.cameraStrapQty--;
      }
    }
  },
  actions: {},
  modules: {},
});
