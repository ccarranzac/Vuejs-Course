<template>
    <base-dialog 
        v-if="invalidInput"
        title="Invalid Input"
        @close="closeDialog"
    >
        <template #default>
            <p>At least one input value is invalid</p>
            <p>Check input fields!!</p>
        </template>
        <template #actions>
            <base-button @click="closeDialog">Okay</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" v-model="resource.title">
            </div>
            <div>
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" v-model="resource.description"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" v-model="resource.link">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
export default {
    inject:['addResource'],
    data(){
        return{
            invalidInput:false,
            resource:{
                title:'',
                description:'',
                link:''
            }
        }
    },
    methods:{
        closeDialog(){ this.invalidInput= false },
        submitData(){
            if(
                this.resource.title.trim() === '' || 
                this.resource.description.trim() === '' || 
                this.resource.link.trim() === ''){
                this.invalidInput=true
                return
            }
            this.addResource(this.resource)
            this.resource.title=''
            this.resource.description=''
            this.resource.link=''
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>