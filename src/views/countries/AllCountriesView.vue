<template>
  <div class="container" v-if="!isFetching">
    <CountryRow v-for="country in countries" :key="country.id" :country="country" />
  </div>
</template>

<script>
import CountryRow from '@/components/countries/CountryRow.vue';

export default {
  components: { CountryRow },
  data() {
    return {
      countries: [],
      isFetching: true,
    };
  },
  methods: {},
  mounted() {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        data.map((item) => {
          this.countries.push({
            id: item.cca2,
            name: item.name.common,
            capital: item.capital ? item.capital[0] : 'Unknown',
            flag: item.flags.svg,
          });
        });
        this.isFetching = false;
      });
  },
};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.country-list {
  display: flex;
  width: 360px;
  margin: 12px;
}
</style>
