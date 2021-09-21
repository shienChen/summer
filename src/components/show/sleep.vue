<template>
  <div class="sleep flex">
    <div class="video">
      <img src="../../assets/images/sleep01.png" alt="" />
      <div class="mask"></div>
      <div class="maskBtn">
        <svg class="icon" aria-hidden="true" id="maskBtn">
          <use xlink:href="#icon-play"></use>
        </svg>
      </div>
      <div class="maskText commonText">
        <span>Current location</span>
        <p>Aranya｜</p>
        <p>China</p>
      </div>
    </div>
    <div class="details">
      <img src="../../assets/images/sleep.png" alt="" />
      <h3>Sleep</h3>
      <span>Peace of mind</span>
      <svg class="icon" aria-hidden="true" id="stars">
        <use xlink:href="#icon-stars"></use>
      </svg>
      <svg class="icon" aria-hidden="true" id="stars">
        <use xlink:href="#icon-stars"></use>
      </svg>
      <svg class="icon" aria-hidden="true" id="stars">
        <use xlink:href="#icon-stars"></use>
      </svg>
      <svg class="icon" aria-hidden="true" id="stars">
        <use xlink:href="#icon-stars"></use>
      </svg>
      <svg class="icon" aria-hidden="true" id="stars">
        <use xlink:href="#icon-stars"></use>
      </svg>
      <p>
        The role of doing a user study at the beginning of the project Better
        than testing 50 users after the project is launched The role of doing a
        user study at the beginning of the project Better than testing 50 users
        after the project is launched
      </p>
      <div class="more">More</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sleep {
  .video {
    position: relative;
    margin-right: 1.6rem;

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.48;
      background: #262938;
      border-radius: 0.4rem;
      filter: blur(1.2rem);
    }

    .maskBtn {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 4rem;
      height: 4rem;
      margin-left: -2rem;
      margin-top: -2rem;
      opacity: 1;
      background: #ffb3a2;
      border-radius: 50%;
      box-shadow: 0px 0.25rem 0.5rem 0px #0000001a;

      #maskBtn {
        width: 6rem;
        height: 5rem;
        margin-left: -1rem;
        margin-top: -0.25rem;
      }
    }

    .maskText {
      position: absolute;
      top: 1.6rem;
      right: 1.6rem;
      opacity: 1;
    }

    .commonText {
      span {
        color: #f7f8fb;
      }

      span::after {
        background: #d8d8d8;
      }
    }
  }

  .details {
    text-align: left;
    #stars {
      width: 1rem;
      height: 1rem;
    }
    h3 {
      font-size: 2.8rem;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 3.9rem;
      margin: 1.7rem 0 0.2rem;
    }

    span {
      font-size: 1rem;
      font-family: PingFangSC, PingFangSC-Semibold;
      text-align: left;
      color: #f7f8fb;
      line-height: 1.4rem;
      letter-spacing: 0.35rem;
    }

    p {
      width: 25.2rem;
      font-size: 0.7rem;
      font-family: PingFangSC, PingFangSC-Semibold;
      text-align: left;
      color: #f7f8fb;
      line-height: 1.2rem;
      letter-spacing: 0.1rem;
      margin: 2.4rem 0;
    }

    .more {
      width: 5.5rem;
      height: 2.3rem;
      border: 0.05rem solid #c0ffec;
      border-radius: 0.2rem;
      font-size: 0.8rem;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #c0ffec;
      line-height: 2.3rem;
      letter-spacing: 0.1rem;
      text-align: center;
    }
  }
}
</style>
