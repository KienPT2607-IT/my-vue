<template>
  <div class="country-row" @click="showCountryDetailsModal">
    <img :src="country.flag" alt="Country Flag" />
    <div class="country-info">
      <div>{{ country.name }} - {{ country.capital }}</div>
    </div>
  </div>

  <!-- Image preview modal -->
  <!-- <div v-if="openImagePreview" class="image-preview-modal" @click.self="closeImagePreview">
    <div class="close-button" @click="closeImagePreview">
      <IconClose />
    </div>
    <div class="image-preview-content">
      <img :src="selectedImage" alt="ImagePreview" height="600px" />
    </div>
  </div> -->

  <!-- Detail modal -->
  <CountryDetailsModal
    v-if="openDetailsModal"
    :code="country.code"
    @close-modal="closeCountryDetailsModal"
  />
</template>

<script>
// import IconClose from '../icons/IconClose.vue';
import CountryDetailsModal from './CountryDetailsModal.vue';

export default {
  components: { CountryDetailsModal },
  props: ['country'],
  data() {
    return {
      // openImagePreview: false,
      // selectedImage: null,
      openDetailsModal: false,
    };
  },
  methods: {
    // showImagePreview(imageSrc) {
    //   this.openImagePreview = true;
    //   this.selectedImage = imageSrc;
    // },
    // closeImagePreview() {
    //   this.openImagePreview = false;
    //   this.selectedImage = null;
    // },
    showCountryDetailsModal() {
      this.openDetailsModal = true;
    },
    closeCountryDetailsModal() {
      this.openDetailsModal = false;
    },
  },
};
</script>

<style scoped>
.country-row {
  position: relative;
  display: flex;
  align-items: center;
  text-align: start;
  width: 400px;
  margin: 12px;
  padding: 16px;
  border: 2px solid cornflowerblue;
  border-radius: 8px;
  cursor: pointer;
}
.country-row img {
  height: 50px;
  margin-right: 16px;
}
</style>
/* .image-preview-content img { max-width: 90%; max-height: 90%; border-radius: 8px; }
.image-preview-modal { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent background */ display: flex;
justify-content: center; align-items: center; z-index: 1000; } .close-button { position: absolute;
top: 20px; right: 20px; color: rgb(221, 221, 221, 0.5); padding: 10px; border-radius: 50%; cursor:
pointer; transition: color 0.2s ease; } .close-button:hover { color: rgb(221, 221, 221, 1); } */
