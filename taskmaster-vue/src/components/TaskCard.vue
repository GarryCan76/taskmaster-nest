<script setup>
import axios from "axios";

async function changeStatus(data, setStatus){
  data.status = setStatus
  await axios.post('http://localhost:3000/task/status-change', {
    'id': data.id,
    'status': data.status
  });
}
</script>

<script >
export default {
  props :[
      'task'
  ]

}
</script>

<template>
<div class="task-box">
  <div v-if="task.status === 'done'">
    <button @click="changeStatus(task, 'not done')" class="done status">done</button>
    <button @click="changeStatus(task, 'archived')" class="archive status">archive</button>
  </div>
  <div v-else>
    <button @click="changeStatus(task, 'done')" class="not-done status">not done</button>
  </div>
  <h2>{{task.title}}</h2>
  <p>{{task.description}}</p>
</div>
</template>

<style scoped>
.task-box{
  width: 50%;
  background-color: #282c34;
  margin: 3px;
}
.not-done{
  background-color: #ff244d;
}
.done{
  background-color: #51c051;
}
.archive{
  background-color: #757575;
}
.status{
  margin: 1%;
  width: 40%;
  color: #ffffff;
}
</style>