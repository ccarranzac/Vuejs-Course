const app= Vue.createApp({
    data(){
        return{
            tasks:[],
            input:"",
            hidden: false
        }
    },
    computed:{
        buttonText(){
            if(this.hidden){ return "Show List!" }
            else{ return "Hide" }
        }
    },
    methods:{
        addTask(){
            if(this.input!==""){
                this.tasks.push(this.input)
                this.input=""
            }
        },
        toggleList(){ this.hidden=!this.hidden }
    }
})

app.mount("#assignment")