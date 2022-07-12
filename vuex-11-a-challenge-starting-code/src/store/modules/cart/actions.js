export default {
  addtoCart(context, payload) {
    context.commit('addProductToCart', payload);
  },
  removeFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  },
};
