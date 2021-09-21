<template>
  <div class="bookSwiper">
    <!-- Swiper -->
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          style="background-image: url(../../assets/images/order01.png)"
        ></div>
        <div
          class="swiper-slide"
          style="background-image: url(../../assets/images/order02.png)"
        ></div>
        <div
          class="swiper-slide"
          style="background-image: url(../../assets/images/order03.png)"
        ></div>
        <div
          class="swiper-slide"
          style="background-image: url(../../assets/images/order04.png)"
        ></div>
        <div
          class="swiper-slide"
          style="background-image: url(../../assets/images/order05.png)"
        ></div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>
    <div class="swiper-container gallery-thumbs">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          style="background-image: url(../../assets/images/order01.png)"
        ></div>
        <div
          class="swiper-slide"
          style="background-image: url(../../assets/images/order02.png)"
        ></div>
        <div
          class="swiper-slide"
          style="background-image: url(../../assets/images/order03.png)"
        ></div>
        <div
          class="swiper-slide"
          style="background-image: url(../../assets/images/order04.png)"
        ></div>
        <div
          class="swiper-slide"
          style="background-image: url(../../assets/images/order05.png)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper from "../../assets/swiper-bundle.min.js";
// import "../../assets/swiper-bundle.min.css";

export default {
  mounted() {
    // this.$nextTick(() => {
    //   let galleryThumbs = new Swiper(".gallery-thumbs", {
    //     spaceBetween: 10,
    //     slidesPerView: 5,
    //     freeMode: true,
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true,
    //   });
    // });
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
}
.gallery-top {
  height: 80%;
  width: 100%;
}

.gallery-thumbs {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
  .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
