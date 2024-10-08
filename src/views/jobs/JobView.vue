<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <RouterLink :to="{ name: 'jobDetails', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

const jobs = [
  {
    title: 'KienPT.IT Full-stack developer',
    id: 1,
    detail: 'Lorem picsum',
  },
  {
    title: 'KienPT.IT React developer',
    id: 2,
    detail: 'Lorem picsum',
  },
  {
    title: 'KienPT.IT Vue developer',
    id: 3,
    detail: 'Lorem picsum',
  },
];

export default {
  data() {
    return {
      jobs,
    };
  },
  components: { RouterLink },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #801717;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>
