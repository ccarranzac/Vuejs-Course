<template>
    <section>
        <h2>Username: {{ username }}</h2>
        <h3>Age: {{ age }}</h3>
    </section>
</template>

<script>
export default {
    props:{
        username:{ type: String, required: true },
        age:{ type: String, required: true }
    },
}
</script>

<style scoped>

section{
    background: rgb(36, 26, 26);
    padding: 10px;
    border-radius: 10px;
}

h2, h3{
    color: aliceblue;
    background-color: rgb(36, 26, 26);
}
</style>