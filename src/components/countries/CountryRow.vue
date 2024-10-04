<template>
  <div class="country-row">
    <img :src="country.flag" alt="Country Flag" />
    <div class="country-info">
      <div>{{ country.name }} - {{ country.capital }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['country'],
};
</script>

<style>
.country-row {
  display: flex;
  align-items: center;
  text-align: start;
  width: 400px;
  margin: 12px;
  padding: 16px;
  border: 2px solid cornflowerblue;
  border-radius: 8px;
}
.country-row img {
  height: 50px;
  margin-right: 16px;
}
</style>
