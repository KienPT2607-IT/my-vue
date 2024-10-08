<template>
  <div class="country-detail-modal">
    <div class="close-button" @click="closeModal">
      <IconClose />
    </div>
    <div class="loader-container">
      <div class="info-container" v-if="!isFetching">
        <div class="flag-container">
          <img :src="country.flag" alt="ImagePreview" height="200px" />
          <img
            v-if="country.coatOfArm"
            :src="country.coatOfArm"
            alt="ImagePreview"
            height="200px"
          />
        </div>
        <br />
        <div class="detail-container">
          <div class="info-row">
            <div class="title">Code:</div>
            {{ country.code }}
          </div>
          <div class="info-row">
            <div class="title">Name:</div>
            {{ country.name.official }}
          </div>
          <div class="info-row">
            <div class="title">Capital:</div>
            {{ country.capital }}
          </div>
          <div class="info-row">
            <div class="title">Currencies:</div>
            {{ currencyType }} - {{ getCurrencyInfo }}
          </div>
        </div>
      </div>
      <div class="loader" v-else></div>
    </div>
  </div>
</template>

<script>
import IconClose from '../icons/IconClose.vue';

export default {
  components: { IconClose },
  props: ['code'],
  data() {
    return {
      isFetching: true,
      country: {},
      currencyType: '',
      currencyInfo: {},
    };
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
  },
  mounted() {
    fetch(`https://restcountries.com/v3.1/alpha/${this.code}`)
      .then((res) => res.json())
      .then((data) => {
        this.country.name = data[0].name;
        this.country.currencies = data[0].currencies;
        this.currencyType = Object.keys(data[0].currencies)[0];
        this.country.capital = data[0].capital[0];
        this.country.coatOfArm = data[0].coatOfArms.svg
          ? data[0].coatOfArms.svg
          : data[0].coatOfArms.png;
        this.country.flag = data[0].flags.svg ? data[0].flags.svg : data[0].flags.png;
        this.country.code = this.code;
        this.isFetching = false;
      });
  },
  computed: {
    getCurrencyInfo() {
      const name = this.country.currencies[this.currencyType].name;
      const symbol = this.country.currencies[this.currencyType].symbol;
      return `${name} (${symbol})`;
    },
  },
};
</script>

<style scoped>
.country-detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.info-container {
  background: white;
  padding: 16px;
  border-radius: 16px;
  width: 600px;
}
.flag-container {
  margin: 16px 0 0 0px;
  display: flex;
  justify-content: space-around;
}
.detail-container {
  margin: 16px;
  /* padding: 20px; */
  /* width: inherit; */
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
.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  color: rgb(221, 221, 221, 0.5);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: color 0.2s ease;
}
.close-button:hover {
  color: rgb(221, 221, 221, 1);
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
.image-preview-content img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
}
</style>
