<template>
  <TaskCreator/>
  <TaskList/>
</template>

<script>
import TaskList from "@/components/TaskList.vue";
import TaskCreator from "@/components/TaskCreator.vue";

export default {
  // dont let up de refresh functions
  name: 'App',
  components: {
    TaskCreator,
    TaskList,
  },
  data(){
    return {
      refreshFunction: ''
    }
  },
  methods: {
    refreshEvent(data){
      this.refreshFunction = data;
    }
  }
}
</script>

<style>
html{
  background-color: #282c34;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
  background-color: #2c3e50;
}
*{
  margin: 0;
}
</style>
