const app = Vue.createApp({
  data() {
    return {
        name: "Camilo Carranza",
        age: 22,
        imgUrl: "https://www.manejandodatos.es/wp-content/uploads/2018/02/vueJS.png"
    };
  },
  methods:{
      random(){
          return Math.random()
      }
  }
});

app.mount("#assignment");
