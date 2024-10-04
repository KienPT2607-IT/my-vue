<template>
  <div class="page-layout">
    <div class="container" v-if="!isFetching">
      <CountryRow v-for="country in paginatedCountries" :key="country.id" :country="country" />
    </div>
    <div class="pagination-controls">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
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
      currentPage: 1,
      countriesPerPage: 20,
    };
  },
  methods: {
    prevPage() {
      this.currentPage -= 1;
    },
    nextPage() {
      this.currentPage += 1;
    },
  },
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
  computed: {
    totalPages() {
      return Math.ceil(this.countries.length / this.countriesPerPage);
    },
    paginatedCountries() {
      const start = (this.currentPage - 1) * this.countriesPerPage;
      const end = start + this.countriesPerPage;
      return this.countries.slice(start, end);
    },
  },
};
</script>

<style>
.page-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
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
.pagination-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9; /* Optional: Add a background for better visibility */
  border-top: 1px solid #ddd; /* Optional: Add a border at the top */
}
</style>
