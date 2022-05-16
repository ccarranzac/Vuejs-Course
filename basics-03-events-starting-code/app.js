const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName:""
    };
  },
  methods:{
    increase(num){ this.counter=this.counter + num },
    decrease(num){ this.counter=this.counter - num },
    setName(event, lastName){ this.name=event.target.value+" "+lastName },
    submitForm(){ alert("Submitted") },
    confirmedInput(){ this.confirmedName= this.name }
  }
});

app.mount('#events');
