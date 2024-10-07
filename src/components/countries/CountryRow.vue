<template>
  <div class="country-row">
    <img :src="country.flag" alt="Country Flag" @click="showImagePreview(country.flag)" />
    <div class="country-info">
      <div>{{ country.name }} - {{ country.capital }}</div>
    </div>
  </div>

  <!-- Image preview modal -->
  <div v-if="openImagePreview" class="image-preview-modal" @click.self="closeImagePreview">
    <div class="close-button" @click="closeImagePreview">
      <IconClose />
    </div>
    <div class="image-preview-content">
      <img :src="selectedImage" alt="ImagePreview" height="600px" />
    </div>
  </div>
</template>

<script>
import IconClose from '../icons/IconClose.vue';

export default {
  components: { IconClose },
  props: ['country'],
  data() {
    return {
      openImagePreview: false,
      selectedImage: null,
    };
  },
  methods: {
    showImagePreview(imageSrc) {
      this.openImagePreview = true;
      this.selectedImage = imageSrc;
    },
    closeImagePreview() {
      this.openImagePreview = false;
      this.selectedImage = null;
    },
  },
};
</script>

<style>
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
}
.country-row img {
  height: 50px;
  margin-right: 16px;
  cursor: pointer;
}
.image-preview-modal {
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

.image-preview-content img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
}
</style>
