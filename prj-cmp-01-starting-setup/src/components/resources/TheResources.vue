<template>
    <base-card>
        <base-button 
            @click="setTab('stored-resources')"
            :mode="storedResButtonMode"
        >Stored Resources</base-button>
        <base-button 
            @click="setTab('add-resources')"
            :mode="addResButtonMode"
        >Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="tab"></component>
    </keep-alive>   
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResources from './AddResource.vue'

export default {
    components:{ StoredResources, AddResources },
    data(){
        return{
            tab: 'stored-resources',
            storedResources:[
                { 
                    id: 'offcial guide',
                    title: 'Official Guide',
                    description: 'Official Vue.js documentation',
                    link: 'https://vuejs.org' 
                },
                { 
                    id: 'google',
                    title: 'Google',
                    description: 'Learn on Google',
                    link: 'https://google.com' 
                }
            ]
        }
    },
    computed:{
        storedResButtonMode(){
            return this.tab === 'stored-resources' ? null : 'flat'
        },
        addResButtonMode(){
            return this.tab === 'add-resources' ? null : 'flat' 
        }
    },
    provide(){
        return{
            resources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource
        }
    },
    methods:{
        setTab(tab){ this.tab= tab },
        addResource(resource){
            const newResource={
                id: new Date().toISOString(),
                ...resource
            }
            this.storedResources.unshift(newResource)
            this.tab = 'stored-resources'
        },
        removeResource(id){ this.storedResources.splice(id,1) }
    }
}
</script>

<style s
BaseButtoncoped>

</style>