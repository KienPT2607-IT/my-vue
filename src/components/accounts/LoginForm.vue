<template>
  <div class="container">
    <div class="form-container">
      <form action="">
        <h3>Login</h3>
        <div class="form-holder">
          <span>
            <IconUser />
          </span>
          <input type="text" class="form-control" placeholder="Username" v-model="username" />
        </div>
        <div class="form-holder">
          <span>
            <IconLock />
          </span>
          <input type="password" class="form-control" placeholder="Password" v-model="password" />
        </div>
        <button @click="handleLogin">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { MOC_ACCOUNT } from '@/utils/constants';
import IconLock from '../icons/thins/IconLock.vue';
import IconUser from '../icons/thins/IconUser.vue';

export default {
  components: { IconUser, IconLock },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      if (this.username === MOC_ACCOUNT.username && this.password === MOC_ACCOUNT.password) {
        this.$router.push('/home');
      }
    },
  },
};
</script>

<style scoped>
.container {
  background: #adcffd;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.form-container {
  background: #ffffff;
  width: 435px;
  display: flex;
}
.form-holder {
  position: relative;
  margin-bottom: 21px;
}
.form-holder span {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.form-control {
  border: none;
  border-bottom: 1px solid #e6e6e6;
  display: block;
  width: 100%;
  height: 38px;
  background: none;
  padding: 3px 42px 0px;
  color: #666;
  box-sizing: border-box;
}
h3 {
  text-align: center;
  text-transform: uppercase;
  font-size: 25px;
  font-family: Muli-Semibold;
  margin-bottom: 33px;
  letter-spacing: 3px;
  color: #333;
}
form {
  width: 100%;
  padding: 77px 61px 66px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
input {
  width: 100%;
  font-size: 1em;
}
input:focus {
  outline: none;
}
button {
  width: 100%;
  height: 49px;
  border: none;
  margin: 50px 0 0 0;
  color: #fff;
  background: #99cdff;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 2px;
  font-family: Muli-Semibold;
  padding: 0;
  overflow: hidden;
  transition: all 0.5s;
  position: relative;
  z-index: 0;
}
button::before,
button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(52, 152, 253, 0.25); /* Brighter color for hover effect */
  z-index: -1; /* Ensure the effect is behind the text */
  transition: transform 0.5s;
  transform: translateX(-100%);
}

button:hover::before,
button:hover::after {
  transform: translateX(0); /* Move the effect from left to right */
}

button:active::before,
button:active::after {
  transform: translateX(0); /* Keeps the effect visible on click */
}
</style>
