<template>
  <div class="bookSwiper">
    <!-- Swiper -->
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/images/order01.jpeg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/order02.jpeg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/order03.jpeg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/order04.jpeg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/order05.jpeg" alt="" />
        </div>
      </div>

      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>
    <div class="bottomBox">
      <div class="swiper-container gallery-thumbs">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/images/order01.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/images/order02.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/images/order03.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/images/order04.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/images/order05.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  mounted() {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      observer: true,
      observeParents: true,
    });
    var galleryTop = new Swiper(".gallery-top", {// eslint-disable-line no-unused-vars
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.bottomBox {
  width: 600px;
}
.gallery-thumbs .swiper-slide {
  width: 20%;
  float: left;
}
.bookSwiper {
  width: 600px;
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
}
</style>
