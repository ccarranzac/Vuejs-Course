<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal"/>
  <button @click="setGoal">Set goal</button>
  <teleport to="body">
    <error-alert v-if="inputInvalid">
      <h2>Input is invalid</h2>
      <p>Please enter some text!</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </teleport>
</template>


<script>
import ErrorAlert from './ErrorAlert.vue'

export default {
  components:{ErrorAlert},
  data(){
    return{
      inputInvalid: false,
    }
  },
  methods:{
    setGoal(){
      const enteredValue = this.$refs.goal.value
      if(enteredValue === ''){
        this.inputInvalid=true
      }
    },
    confirmError(){ this.inputInvalid=false }
  }
}
</script>