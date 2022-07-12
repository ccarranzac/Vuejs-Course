import { createStore } from 'vuex';
import productsModule from './modules/products/index';
import cartModule from './modules/cart/index';

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartModule,
  },
});

export default store;
