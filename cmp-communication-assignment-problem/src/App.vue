<template>
    <h1>Assignment</h1>
    <active-user 
        :username="username"
        :age="age"
    ></active-user>
    <user-data
        @update-data="updateData"
    ></user-data>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'
export default {
    components: { ActiveUser, UserData },
    data(){
        return{
            username:'',
            age:''
        }
    },
    methods:{
        updateData(username, age){
            this.username=username
            this.age=age
        }
    }
}
</script>

<style>
*{
    background-color: rgb(255, 0, 64);
}

h1{
    text-align: center;
    color: aliceblue;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>