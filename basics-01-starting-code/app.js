const app = Vue.createApp({
  data() {
    return {
        courseGoal: 'Finish the course and Learn Vue',
        courseGoal2: 'Master Vue and build apps',
        courseGoal3: '<h2>Vue Course</h2>',
        vueLink: 'https://vuejs.org'
    };
  },
  methods:{
      outputGoal(){
          const random= Math.random();
          if(random < 0.5){ return this.courseGoal }
          else{ return this.courseGoal2 }
      }
  }
});

app.mount("#user-goal");
