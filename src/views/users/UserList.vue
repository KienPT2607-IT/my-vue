<template>
  <h1>User list</h1>
  <div v-for="user in users" :key="user.id" class="user">
    <router-link :to="{ name: 'userDetails', params: { uid: user.id } }">
      <h2>{{ user.id }}: {{ user.name }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => (this.users = data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.user {
  text-align: start;
}
.user h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #801717;
}
.user h2:hover {
  background: #ddd;
}

a {
  text-decoration: none;
}
</style>
