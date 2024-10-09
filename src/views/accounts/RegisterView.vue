<template>
  <div class="container">
    <div class="form-container" @submit.prevent="handleLogin">
      <form action="">
        <h3>Register</h3>
        <div class="form-holder">
          <span class="icon-label">
            <IconUser />
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            v-model="username"
            @input="validateUsername"
          />
          <span v-if="usernameError" class="error">* {{ usernameError }}</span>
        </div>
        <div class="form-holder">
          <span class="icon-label">
            <IconPhone />
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Phone Number"
            v-model="phoneNumber"
            @input="validatePhoneNumber"
          />
          <span v-if="phoneNumberError" class="error">* {{ phoneNumberError }}</span>
        </div>
        <div class="form-holder">
          <span class="icon-label">
            <IconEnvelope />
          </span>
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            v-model="email"
            @input="validateUsername"
          />
          <span v-if="usernameError" class="error">* {{ usernameError }}</span>
        </div>
        <div class="form-holder">
          <span class="icon-label">
            <IconLock />
          </span>
          <input
            :type="showPassword ? 'text' : 'password'"
            class="form-control"
            placeholder="Password"
            v-model="password"
            @input="validatePassword"
          />
          <span class="password-toggle-icon" @click="toggleShowPassword">
            <IconEyeClosed v-if="showPassword" />
            <IconEye v-else />
          </span>
          <span v-if="passwordError" class="error">* {{ passwordError }}</span>
        </div>
        <div class="form-holder">
          <span class="icon-label">
            <IconLock />
          </span>
          <input
            :type="showPasswordConfirm ? 'text' : 'password'"
            class="form-control"
            placeholder="Confirm Password"
            v-model="passwordConfirm"
            @input="validatePasswordConfirm"
          />
          <span class="password-toggle-icon" @click="toggleShowPasswordConfirm">
            <IconEyeClosed v-if="showPasswordConfirm" />
            <IconEye v-else />
          </span>
          <span v-if="passwordConfirmError" class="error">* {{ passwordConfirmError }}</span>
        </div>
        <button type="submit" :disabled="disableSubmit">Register</button>
        <div class="form-action">
          <router-link :to="{ name: 'login' }">Login</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import IconEnvelope from '@/components/icons/thins/IconEnvelope.vue';
import IconPhone from '@/components/icons/thins/IconPhone.vue';
import IconEye from '@/components/icons/thins/IconEye.vue';
import IconEyeClosed from '@/components/icons/thins/IconEyeClosed.vue';
import IconLock from '@/components/icons/thins/IconLock.vue';
import IconUser from '@/components/icons/thins/IconUser.vue';
import { MAX_PASSWORD_LENGTH, MOC_ACCOUNT } from '@/utils/constants';

const PHONE_NUMBER_REGEX = /^0\d{9}$/;
export default {
  components: { IconUser, IconLock, IconEye, IconEyeClosed, IconEnvelope, IconPhone },
  data() {
    return {
      MAX_PASSWORD_LENGTH,
      username: '',
      phoneNumber: '',
      email: '',
      password: '',
      passwordConfirm: '',
      showPassword: false,
      showPasswordConfirm: false,
      usernameError: '',
      passwordError: '',
      passwordConfirmError: '',
      phoneNumberError: '',
      emailError: '',
    };
  },
  methods: {
    handleRegister() {
      if (this.password !== this.passwordConfirm) return;

      if (this.username === MOC_ACCOUNT.username && this.password === MOC_ACCOUNT.password) {
        this.$router.push('/home');
      }
    },

    validateUsername() {
      const usernameRegex = /^[^\s]{6,16}$/;
      if (!this.username) {
        this.usernameError = '';
      } else {
        if (this.username.length < 6) {
          this.usernameError = 'Username must be at least 6 chars long.';
        } else if (this.username.length > 16) {
          this.usernameError = 'Username must be at most 16 chars long.';
        } else if (!usernameRegex.test(this.username)) {
          this.usernameError = 'Username cannot contain spaces.';
        } else {
          this.usernameError = '';
        }
      }
    },

    validateField(value) {
      if (!value) {
        return ''; // No error if the field is empty
      }
      if (value.length < 6 || value.length > 16) {
        return 'Password must be between 6 and 16 characters long.';
      } else if (!/[a-z]/.test(value)) {
        return 'Password must contain at least one lowercase letter.';
      } else if (!/[A-Z]/.test(value)) {
        return 'Password must contain at least one uppercase letter.';
      } else if (!/[0-9]/.test(value)) {
        return 'Password must contain at least one number.';
      }
      return ''; // No error if validation passed
    },

    validatePassword() {
      this.passwordError = this.validateField(this.password);
    },

    validatePasswordConfirm() {
      this.passwordConfirmError = this.validateField(this.passwordConfirm);
    },

    validatePhoneNumber() {
      if (this.phoneNumber === '') {
        this.phoneNumberError = '';
      } else {
        if (!PHONE_NUMBER_REGEX.test(this.phoneNumber)) {
          this.phoneNumberError = 'Phone number must be 10 digits long and start with 0';
        }
      }
    },

    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },

    toggleShowPasswordConfirm() {
      this.showPasswordConfirm = !this.showPasswordConfirm;
    },
  },
  computed: {
    disableSubmit() {
      const hasError = !this.usernameError || !this.passwordError;
      const isRequiredFieldsEmpty = !this.username || !this.password;
      return hasError || isRequiredFieldsEmpty;
    },
  },
};
</script>

<style scoped>
.custom-link::after {
  content: ' First After';
  color: red;
}

.nested-element::after {
  content: ' Second After';
  color: blue;
}
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

.form-action {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

a {
  text-decoration: none;
  color: inherit;
  position: relative;
}
a:active,
a:focus {
  color: inherit;
}
a::after {
  content: '';
  background: none;
  border-radius: 10px;
  width: 0;
  height: 3px;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: 0.5s;
}
a:hover::after {
  background: #adcffd;
  width: 100%;
}

.icon-label {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.password-toggle-icon {
  position: absolute;
  right: 0;
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

.error {
  color: red;
  font-size: 0.75em;
  position: absolute;
  left: 0;
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
