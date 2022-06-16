<template>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      textIsVisible: false,
      usersVisible: false,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('before enter', el);
      el.style.opacity = 0;
    },
    beforeLeave(el) {
      console.log('before leave', el);
      el.style.opacity = 1;
    },
    enter(el, done) {
      console.log('enter', el);
      let round = 0;
      const interval = setInterval(function () {
        el.style.opacity = round * 0.1;
        round++;
        if (round > 100) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('after enter', el);
    },
    leave(el) {
      console.log('leave', el);
      el.style.opacity = 0;
    },
    afterLeave(el) {
      console.log('after leave', el);
    },
    enterCancelled(el) {
      console.log('enter cancelled', el);
    },
    leaveCancelled(el) {
      console.log('leave cancelled', el);
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleText() {
      this.textIsVisible = !this.textIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showUsers() {
      this.usersVisible = true;
    },
    hideUsers() {
      this.usersVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.5s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.route-enter-from {
}
.route-enter-active {
  animation: slide-scale 1s ease-out;
}
.route-enter-to {
}

route-leave-active {
  animation: slide-scale 1s ease-in;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

.fade-button-leave-to,
.fade-button-enter-from {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-leave-from,
.fade-button-enter-to {
  opacity: 1;
}
</style>
