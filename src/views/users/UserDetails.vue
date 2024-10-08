<template>
  <div class="loader-container">
    <div class="info-container" v-if="user.id">
      <div class="info-row">
        <div class="title">ID:</div>
        {{ user.id }}
      </div>
      <div class="info-row">
        <div class="title">Name:</div>
        {{ user.name }}
      </div>
      <div class="info-row">
        <div class="title">Username:</div>
        {{ user.username }}
      </div>
      <div class="info-row">
        <div class="title">Email:</div>
        {{ user.email }}
      </div>
      <div class="info-row">
        <div class="title">Address:</div>
        <!-- {{ user.address }} -->
        {{ user.address.suite }} - {{ user.address.street }}, {{ user.address.city }}
        <div class="chip-tag" @click="copyToClipboard(user.address.zipcode)">
          <span class="tag"> {{ user.address.zipcode }}</span>
        </div>
      </div>
      <div class="info-row">
        <div class="title">Phone:</div>
        {{ user.phone }}
      </div>
      <div class="info-row">
        <div class="title">Website:</div>
        <a target="_blank" :href="formatUrl(user.website)" class="website">{{ user.website }}</a>
      </div>
      <div class="info-row">
        <div class="title">Company:</div>
        {{ user.company.name }}
      </div>
    </div>
    <div v-else>
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['uid'],
  data() {
    return {
      user: {},
    };
  },
  methods: {
    formatUrl(url) {
      // Check if the URL starts with http or https, if not, prepend http://
      return url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`;
    },
    copyToClipboard(content) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          alert(`Copied: ${content}`);
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
        });
    },
  },
  mounted() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.uid}`)
      .then((res) => res.json())
      .then((data) => (this.user = data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
a {
  text-decoration: none;
}
.info-container {
  margin: 36px;
  /* padding: 20px; */
  height: inherit;
  width: inherit;
  background: #f4f4f4;
  padding: 10px 0;
  border-radius: 16px;
}
.info-row {
  display: flex;
  padding: 10px;
  align-items: center;
}
.title {
  width: 100px;
  text-align: start;
  margin: 0 10px;
}
.chip-tag {
  background: #fff;
  margin: 0 10px;
  padding: 6px;
  border-radius: 8px;
  border: 2px solid #aa9999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.chip-tag span {
  font-size: 0.9em;
  font-weight: bold;
  color: #333;
}
.loader {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
