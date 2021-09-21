<template>
  <div class="content">
    <div class="commonTitle">
      <img src="../../assets/images/prve.png" alt="" @click="jump('/home')" />
      <h3 class="v_title">Aranya Art Center</h3>
    </div>
    <div class="item flex" k-repeat="view_Item view" k-repeat-self="true">
      <div class="img">
        <img src="../../assets/images/view01.png" alt="" />
      </div>
      <div class="info">
        <h3 k-content="view_Item.title">Aranya beach</h3>
        <p k-content="view_Item.description">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click Edit Text” or double click me to add
        </p>
        <span k-content="view_Item.label-one">This is a label</span>
        <span k-content="view_Item.label-two">This is a label</span>
        <div class="heng"></div>
        <div class="v_location">
          <svg class="icon" aria-hidden="true" id="v_location">
            <use xlink:href="#icon-location_blue_14"></use>
          </svg>
          <span class="location" k-content="view_Item.location"
            >Dapuhe Town, Changli County, Qinhuangdao City</span
          >
        </div>
      </div>
      <div class="more">
        <span>From</span>
        <span class="money">$80</span>
        <a @click="jump('/book')">More Info</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jump(val) {
      this.$router.push(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  max-width: 45.3rem;
  margin: 0 auto;
  /* text-align: center;   */
  padding: 56px 24px;
  background: #f5f8f7;
  border-radius: 8px;
  opacity: 1;
  /* position: absolute; */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 11;

  .item {
    border: 1px solid #a7b0be;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 24px;

    &:hover {
      background: linear-gradient(270deg, #c0e1ff 0%, #e2f1fe 97%);
      box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.2);
    }

    .info {
      margin-left: 24px;
      width: 452px;
      text-align: left;

      h3 {
        font-size: 16px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: left;
        color: #192845;
        line-height: 22px;
      }

      p {
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #515161;
        line-height: 25px;
        margin: 16px 0;
      }

      span {
        font-size: 12px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: left;
        color: #192845;
        line-height: 16px;
        margin-right: 23px;
        position: relative;
        padding-left: 15px;

        &::before {
          position: absolute;
          content: "";
          width: 6px;
          height: 6px;
          background: #192845;
          border-radius: 50%;
          top: 5px;
          left: 0;
        }
      }

      .heng {
        width: 420px;
        height: 1px;
        opacity: 0.1;
        background: #192845;
        margin: 16px 0;
      }

      .v_location {
        display: flex;
        align-items: center;
        #v_location {
          width: 17px;
          height: 22px;
          margin-right: 8px;
        }
        span {
          position: static;
          padding-left: 0;
        }
        span.location {
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #515161;
          line-height: 22px;
        }
      }
    }

    .more {
      padding-top: 43px;
      text-align: center;

      span {
        font-size: 12px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #192845;
        line-height: 17px;
      }

      span.money {
        font-size: 32px;
        font-family: DINAlternate, DINAlternate-Bold;
        font-weight: 700;
        color: #192845;
        line-height: 37px;
        display: block;
        margin: 6px 0 32px;
      }

      a {
        background: #c0ffec;
        border-radius: 4px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: left;
        color: #192845;
        line-height: 20px;
        padding: 10px 32px;
        border: none;
        cursor: pointer;
      }
    }
  }
}
</style>
