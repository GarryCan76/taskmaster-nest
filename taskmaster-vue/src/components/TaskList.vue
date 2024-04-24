<template>
  <div v-if="data">
    <p>Task to complete</p>
    <ul>
      <li id="card-list" v-for="(task) in data" :key="task.id" class="card">
        <TaskCard :task="task"/>
      </li>
    </ul>
  </div>
  <p v-else>Loading...</p>
</template>

<script>
export default {
  props: ['refreshFunction'],
}
</script>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import TaskCard from "@/components/TaskCard.vue";

const data = ref(null);



onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/task/sendAllTasks');
    data.value = response.data;
    data.value.sort((a, b) => a.id - b.id);
    console.log(data.value);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<style scoped>
#card-list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
