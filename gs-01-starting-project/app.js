//createApp recibe como parametro un objeto
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

/*const buttonEl= document.querySelector('button')
const inputEl= document.querySelector('input')
const listEl = document.querySelector('ul')

function addGoal(){
    const value=inputEl.value
    const newListItem = document.createElement('li')
    newListItem.textContent = value
    listEl.appendChild(newListItem)
    inputEl.value=''
}

buttonEl.addEventListener('click', addGoal)*/
