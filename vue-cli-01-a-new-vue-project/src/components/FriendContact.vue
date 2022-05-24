<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li>Phone: <strong>{{ friend.phone }}</strong></li>
            <li>Email: <strong>{{ friend.email }}</strong></li>
        </ul>
    </li>    
</template>

<script>
export default {
    data(){
        return{
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel',
                phone: '42424',
                email:'manuel@email.com'
            }
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible=!this.detailsAreVisible
        }
    } 
}
</script>