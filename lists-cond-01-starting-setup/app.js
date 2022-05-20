const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      input: ''
    };
  },
  methods:{
    addGoal(){
      if(this.input!==""){
        this.goals.push(this.input) 
        this.input=""
      }
    },
    removeGoal(id){
      this.goals.splice(id, 1)
    }
  }
});

app.mount('#user-goals');
