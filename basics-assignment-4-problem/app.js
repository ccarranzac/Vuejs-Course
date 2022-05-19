const app= Vue.createApp({
    data(){
        return{
            input:"",
            visible: true,
            color:""
        }
    },
    computed:{
        customClass(){
            if(this.input==="user1"){
                if(this.visible){  return ["user1","visible"]  }
                else{ return ["user1","hidden"] }
            }
            else if(this.input==="user2"){
                if(this.visible){  return ["user2","visible"]  }
                else{ return ["user2","hidden"] }
            }
            else{
                if(this.visible){ return "visible" }
                else{ return "hidden" }
            }
        }
    },
    methods:{
        toogleVisible(){ this.visible=!this.visible }
    }
})

app.mount("#assignment")