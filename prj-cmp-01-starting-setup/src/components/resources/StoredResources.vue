<template>
    <ul>
        <resource-item 
            v-for="item in resources" 
            :key="item.id"
            :resource="item"
        ></resource-item>
    </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue'

export default {
    components:{ ResourceItem },
    props:{ 
        resources:{ type: Object, required: true } 
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>