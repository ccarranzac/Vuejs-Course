<template>
    <li>
        <h2>{{ name }} {{ isFavorite === true ? '(Favorite)' : '' }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li>Phone: <strong>{{ phoneNumber }}</strong></li>
            <li>Email: <strong>{{ emailAddress }}</strong></li>
        </ul>
    </li>    
</template>

<script>
export default {
    props:{
        name: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        emailAddress: { type: String, required: true },
        isFavorite: { 
            type: Boolean,
            required: false, 
            default: false
            }
    },
    data(){
        return{
            detailsAreVisible: false,
        }
    },
    methods:{
        toggleDetails(){ this.detailsAreVisible=!this.detailsAreVisible }
    } 
}
</script>