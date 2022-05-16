const app= Vue.createApp({
data(){
  return{
    input:"",
    input2:""
  }
},
methods:{
  displayAlert(){ alert("Alert") },
  showInput(event){ this.input= event.target.value },
  showInput2(event){ this.input2=event.target.value }
}
})

app.mount("#assignment")