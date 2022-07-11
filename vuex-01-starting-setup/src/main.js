import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      auth: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter += payload.value;
    },
    setAuth(state, payload) {
      state.auth = payload.isAuth;
    },
  },
  getters: {
    getAuth(state) {
      return state.auth;
    },
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
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      console.log(context);
      context.commit('increase', payload);
    },
    logIn(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logOut(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
});

const app = createApp(App);
app.use(store);

app.mount('#app');
