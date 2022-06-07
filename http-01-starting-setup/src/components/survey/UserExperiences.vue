<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="loading">Loading...</p>
      <p v-else-if="!loading && error">{{ error }}</p>
      <p v-else-if="!loading && results.length === 0">No stored Experiences found!!!</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data(){
    return{
      results:[],
      loading: false,
      error: null
    }
  },
  methods:{
    loadExperiences(){
      this.loading= true
      this.error= null
      this.axios
      .get('https://vue-http-demo-f72c2-default-rtdb.firebaseio.com/surveys.json')
      .then( res =>{
        const results=[]
        for(const id in res.data){
          results.push({
            id: id,
            name: res.data[id].name,
            rating: res.data[id].rating
          })
        }
        this.results=results
        this.loading= false
      })
      .catch( err =>{
        this.error=`${err.message} - Please Try it Later!`
        this.loading= false
      })
    }
  },
  mounted(){
    this.loadExperiences()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>