<template>
  <header>
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
  <div class="button-group">
    <button @click="goBack">Go back</button>
    <button @click="redirect">Redirect</button>
    <button @click="goForward">Go forward</button>
  </div>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
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
}

.wrapper {
  margin-bottom: 20px;
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
  /* border: none; */
  /* border-radius: 4px; */
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}
</style>
