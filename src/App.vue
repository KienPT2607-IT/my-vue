<template>
  <header v-if="!strictRoutes.includes($route.path)">
    <div class="wrapper">
      <nav>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
        <router-link :to="{ name: 'jobs' }">Jobs</router-link>
        <router-link :to="{ name: 'userList' }">Users</router-link>
        <router-link :to="{ name: 'allCountries' }">Countries</router-link>
      </nav>
    </div>
  </header>
  <div v-if="!strictRoutes.includes($route.path)" class="button-group">
    <button @click="goBack">Go back</button>
    <button @click="redirect">Redirect</button>
    <button @click="goForward">Go forward</button>
  </div>

  <div class="main-content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      strictRoutes: ['/login', '/register'],
    };
  },
  methods: {
    redirect() {
      this.$router.push({
        name: 'home',
      });
    },
    goBack() {
      this.$router.back(); // Equivalent to $router.go(-1)
    },
    goForward() {
      this.$router.forward(); // Equivalent to $router.go(1)
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.wrapper {
  margin-bottom: 20px;
}

.main-content {
  height: 100%;
  margin-bottom: 24px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

button {
  margin: 0 10px;
  padding: 10px;
  cursor: pointer;
  /* border: none; */
  /* border-radius: 4px; */
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}

main {
  padding: 0 32px;
  flex-grow: 1;
}
</style>
