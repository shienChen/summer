<template>
  <div class="p_about">
    <div class="container">
      <h3 class="title">About Us</h3>
      <span class="title"
        >The team is highly professional and innovative, bringing the concept of
        「meta universe」 into tourism e-commerce</span
      >
      <p class="title">
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. Feel free to drag and drop me anywhere you
        like on your page. I’m a great place for you to tell a story and let
        your users know a little more about you.
      </p>
      <div class="wrapper">
        <div class="item">
          <img src="../assets/images/about01.png" alt="" />
          <h3>Yoko Kanno</h3>
          <span>Executive Creative Director</span>
          <p>
            “Look at the world, look at yourself Look at the world, look at
            yourself”
          </p>
        </div>
        <div class="item">
          <img src="../assets/images/about02.png" alt="" />
          <h3>Jimi Hedrix</h3>
          <span>Executive Creative Director</span>
          <p>“Burning Man Festival on the internet”</p>
        </div>
        <div class="item">
          <img src="../assets/images/about03.png" alt="" />
          <h3>UI Designer</h3>
          <span>Executive Creative Director</span>
          <p>“meta universe，to be personally on the scene”</p>
        </div>
      </div>
    </div>
    <div class="about_mask"></div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
.p_about {
  background-image: url(../assets/images/i_banner.png);
  background-repeat: no-repeat;
  background-size: 105%;
  min-height: 45.5rem;
  position: relative;

  .container {
    max-width: 64rem;
    margin: 0 auto;
    text-align: center;
    padding-top: 5.8rem;
    padding-bottom: 4.2rem;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 11;

    h3.title {
      margin-bottom: 0.4rem;
    }

    span.title {
      font-size: 0.8rem;
      font-weight: 400;
      text-align: center;
      color: #c0ffec;
      line-height: 1.4rem;
      display: inline-block;
      width: 27.5rem;
    }

    p.title {
      font-size: 0.8rem;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: center;
      color: #c0ffec;
      line-height: 1.4rem;
      letter-spacing: 0.1rem;
      margin: 2.4rem 0;
    }

    .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item {
        width: 20.5rem;
        height: 14.5rem;
        background: linear-gradient(270deg, #c0e1ff 0%, #e2f1fe 97%);
        border-radius: 0.4rem;
        text-align: center;

        img {
          padding-top: 2rem;
        }

        h3 {
          font-size: 1rem;
          font-family: PingFangSC, PingFangSC-Semibold;
          color: #192845;
          line-height: 1.4rem;
          margin-bottom: 0.2rem;
          margin-top: 0.8rem;
        }

        span {
          font-size: 0.7rem;
          font-weight: 400;
          text-align: left;
          color: #444444;
          line-height: 1rem;
        }

        p {
          font-size: 0.7rem;
          font-weight: 400;
          color: #192845;
          line-height: 1.2rem;
          margin-top: 0.8rem;
        }
      }
    }
  }

  .about_mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;
    background: #000000;
  }
}
</style>
