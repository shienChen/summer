<template>
  <div class="img">
    <img src="../../assets/images/contact_img.png" alt="" />
    <div class="location">
      <div>
        <span>XiaMen-Software Park</span>
        <svg class="icon" aria-hidden="true" id="cha">
          <use xlink:href="#icon-close_22_white"></use>
        </svg>
      </div>
      <svg class="icon" aria-hidden="true" id="location_cu">
        <use xlink:href="#icon-location_cu"></use>
      </svg>
    </div>
    <div class="info flex">
      <div>
        <span>info@mysite.com</span>
      </div>
      <div>
        <span>Chengyi North Street, Xia Men, AC 0592</span>
      </div>
      <div>
        <span>Tel: 123-456-7890</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img {
  position: relative;

  .location {
    text-align: center;
    position: absolute;
    top: 1.2rem;
    left: 26.3rem;

    div {
      background: linear-gradient(270deg, #c0e1ff 0%, #e2f1fe 97%);
      box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
      position: relative;
      &::after {
        position: absolute;
        content: "";
        border: 15px solid transparent;
        border-top-color: #c0e1ff;
        bottom: -30px;
        left: 50%;
        margin-left: -15px;
      }

      span {
        font-size: 0.8rem;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: right;
        color: #192845;
        line-height: 1.1rem;
        text-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
        padding: 1.6rem 1.2rem;
        display: inline-block;
      }

      #cha {
        width: 0.65rem;
        height: 0.65rem;
        position: absolute;
        top: 0.6rem;
        right: 0.4rem;
      }
    }

    #location_cu {
      width: 2rem;
      height: 3.25rem;
      margin-top: 0.5rem;
    }
  }

  .info {
    position: absolute;
    top: 10.75rem;
    left: 10.25rem;

    div {
      background: linear-gradient(270deg, #c0e1ff 0%, #e2f1fe 97%);
      border-radius: 0.4rem;
      box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
      margin-right: 1.2rem;

      span {
        font-size: 0.8rem;
        font-weight: 400;
        text-align: left;
        color: #192845;
        line-height: 1.1rem;
        letter-spacing: 0.1rem;
        padding: 0.5rem 1.2rem;
      }
    }
  }
}
</style>
