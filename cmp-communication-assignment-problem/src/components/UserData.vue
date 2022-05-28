<template>
    <form @submit.prevent="updateData">
        <div>
            <label>Username</label>
            <input v-model="username" type="text"/>
        </div>
        <div>
            <label>Age</label>
            <input v-model="age" type="text"/>
        </div>
        <div>
            <button>Update</button>
        </div>
    </form>
</template>

<script>
export default {
    emits:['update-data'],
    data(){
        return{
            username:'',
            age:''
        }
    },
    methods:{
        updateData(){ this.$emit('update-data',this.username, this.age) }
    }
}
</script>

<style scoped>

form{
    background: rgb(36, 26, 26);
    padding: 10px;
    border-radius: 10px;
    margin-block: 10px;
}

div{
    display: flex;
    justify-content: space-between;
    background-color: rgb(36, 26, 26);
    margin-block: 10px;
}

label{
    color: aliceblue;
    font-weight: bold;
    background-color: rgb(36, 26, 26);
}

input{
    float:right;
    width: 20%;
    border-radius: 10px;
    border: none;
}   

button{
    color: aliceblue;
    padding: 10px;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
}

</style>