import { createStore } from 'vuex';
import productsModule from './modules/products/index';
import cartModule from './modules/cart/index';

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      auth: false,
    };
  },
  mutations: {
    login(state) {
      state.auth = true;
    },
    logout(state) {
      state.auth = false;
    },
  },
  actions: {
    logIn(context) {
      context.commit('login');
    },
    logOut(context) {
      context.commit('logout');
    },
  },
  getters: {
    getAuth(state) {
      return state.auth;
    },
  },
});

export default store;
