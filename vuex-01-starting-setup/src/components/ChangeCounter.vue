<template>
  <button @click="inc">Add 1</button>
  <button @click="increase({ value: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addTen() {
    //   //this.$store.commit('increase', { value: 2 });
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //   });
    // },
    //...mapActions(['increment', 'increase']),'numbers',
    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase',
    }),
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
  },
};
</script>
