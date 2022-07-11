export default {
  finalCounter(state) {
    return state.counter * 2;
  },
  normalizedCounter(state, getters) {
    if (getters.finalCounter < 0) {
      return 0;
    }
    if (getters.finalCounter > 100) {
      return 100;
    }
    return getters.finalCounter;
  },
};
