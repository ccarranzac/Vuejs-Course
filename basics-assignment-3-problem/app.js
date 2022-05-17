const app= Vue.createApp({
    data(){
        return{
            result:0
        }
    },
    watch:{
        result(){
            const that= this
            setTimeout(function(){
                that.result=0
            }, 5000)
        }
    },
    computed:{
        resultNumber(){
            if(this.result < 37){ return "Not there yet" }
            else if(this.result > 37){ return "Too much!" }
            else{ return this.result }
        }
    },
    methods:{
        add(number){ this.result+=number }
    }
})

app.mount("#assignment")