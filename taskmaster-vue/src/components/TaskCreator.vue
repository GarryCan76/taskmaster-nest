<script setup>
import axios from "axios";
async function Submit(){
  await axios.post('http://localhost:3000/task/receive', {
    'title': document.getElementById("title").value,
    'description': document.getElementById('description').value,
    'status': 'not done'
  });


}
</script>

<template>
<div id="top">
  <form @submit.prevent="Submit(); $emit('sendrefresh')" id="task-form">
    <p>Create new task</p>
    <input type="text" id="title" name="title" placeholder="Task Name" required>
    <input type="text" id="description" name="description" placeholder="Task Description" required>
    <input type="submit" value="submit" required>
  </form>
</div>
</template>

<style scoped>
#top{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
#task-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  width: 20%;
  margin: 1%;
}
#task-form > * {
  margin: 3%;
}
</style>