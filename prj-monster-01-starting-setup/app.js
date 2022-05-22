 function randomNumber(min, max){
    return Math.floor(Math.random()*(max-min))+ min
 }
 
 const app= Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            round: 0,
            finalState: null,
            logs: []
        }
    },
    computed:{
        monsterBarStyle(){
            if(this.monsterHealth < 0){
                return { width: '0%' }   
            }
            return { width: this.monsterHealth + '%' }
        },
        playerBarStye(){
            if(this.playerHealth < 0){
                return { width: '0%' }   
            }
            return { width: this.playerHealth + '%' }
        },
        useEspecialAttack(){ return this.round % 3 !== 0 }
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth<=0){
                this.finalState='draw'
            }else if(value <= 0){
                this.finalState='monster'
            }
        },
        monsterHealth(value){ 
            if(value <= 0 && this.playerHealth<=0){
                this.finalState='draw'
            }else if(value <=0){
                this.finalState='player'
            }
        }
    },
    methods:{
        newGame(){
            this.playerHealth=100
            this.monsterHealth=100
            this.round=0
            this.finalState=null
            this.logs=[]
        },
       attackMonster(){
           this.round++
           const damage= randomNumber(5, 12)
           this.monsterHealth-=damage
           this,this.addLogMessage("Player", "attack", damage)
           this.attackPlayer()
        },
        attackPlayer(){
           const damage= randomNumber(8, 12)
           this.playerHealth-=damage
           this,this.addLogMessage("Monster", "attack", damage)
        },
        specialAttack(){
            this.round++
           const damage= randomNumber(10, 25)
           this.monsterHealth-=damage
           this,this.addLogMessage("Player", "attack", damage)
           this.attackPlayer()
        },
        healPlayer(){
            this.round++
            const heal= randomNumber(8,15)
            if(this.playerHealth + heal >100){ this.playerHealth=100 }
            else{ this.playerHealth+=heal }
            this,this.addLogMessage("Player", "heal", heal)
            this.attackPlayer()            
        },
        surrender(){ this.finalState="monster" },
        addLogMessage(who, what, value){
            this.logs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }
 })

 app.mount("#game")