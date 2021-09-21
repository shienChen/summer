<template>
  <div class="i_banners">
    <div class="container">
      <div class="title">
        <span>Return to nature this summer</span>
        <p>&</p>
        <span>Kooboo template</span>
        <div class="flex" style="width: 13.2rem; margin: 0 auto">
          <div class="set">SET OUT</div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-right_arrow"></use>
          </svg>
        </div>
      </div>
      <div class="text">
        <div>
          <p>THE BOOK</p>
          <span
            >The Book of Genesis: A book on beginning, a story on living in the
            light of a covenant-making God.</span
          >
        </div>
        <div>
          <p>#XMAS SALE</p>
          <span
            >The Bible Beautiful: Visual imagery and thoughtful design
            integrated within the Bible.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss" scoped>
.i_banners {
  background-image: url(../assets/images/i_banner.png);
  background-repeat: no-repeat;
  background-size: 100%;

  .container {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;

    .title {
      margin-top: 7.9rem;
      text-align: center;

      span,
      p {
        font-size: 2.8rem;
        font-weight: 400;
        text-align: center;
        color: #c0ffec;
        line-height: 3.9rem;
      }

      .set {
        width: 9rem;
        height: 2.4rem;
        margin: 0 auto;
        border: 0.1rem solid #ffffff;
        border-radius: 0.15rem;
        line-height: 2.4rem;
        text-align: center;
        font-size: 0.8rem;
        color: #ffffff;
        letter-spacing: 0.15rem;
        font-family: PingFangSC, PingFangSC-Semibold;
      }
    }

    .text {
      max-width: 66rem;
      margin: 0 auto;
      display: flex;
      margin-top: 12.25rem;
      margin-bottom: 5.6rem;
      text-align: left;

      div {
        width: 14.4rem;
        margin-right: 6rem;

        p {
          font-size: 0.6rem;
          font-family: PingFangSC, PingFangSC-Semibold;
          text-align: left;
          color: #c0ffec;
          line-height: 0.85rem;
          letter-spacing: 0.2rem;
          margin-bottom: 1.25rem;
        }
        span {
          font-size: 0.7rem;
          font-weight: 400;
          text-align: left;
          color: #c0ffec;
          line-height: 0.9rem;
        }
      }
    }
  }
}
</style>
