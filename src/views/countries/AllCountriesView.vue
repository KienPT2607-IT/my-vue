<template>
  <div class="container" v-if="!isFetching">
    <div class="countries-list" v-for="country in countries" :key="country.id">
      <div>
        {{ country }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
          });
        });
        this.isFetching = false;
      });
  },
};
</script>

<style></style>
