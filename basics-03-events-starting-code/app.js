const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname:""
    };
  },
  watch:{
    counter(value){
      if(value > 50){ 
        const that= this;
        setTimeout(function(){
          that.counter=0
        }, 2000)
        this.counter = 0
      }
    }
  },
  computed:{
    outputFullname(){
      if(this.name ==="" || this.lastname===""){ return "" }
      return this.name + " " + this.lastname  
    },
  },
  methods:{
    increase(num){ this.counter=this.counter + num },
    decrease(num){ this.counter=this.counter - num },
    setName(event){ this.name=event.target.value },
    resetInput(){ this.name="" }
  }
});

app.mount('#events');
