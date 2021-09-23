<template>
  <div class="bookText">
    <div class="flex">
      <h3>Description of ticket return and exchange：</h3>
      <span
        >This performance does not support ticket refund and exchange. If you
        can't watch normally, please handle it by yourself. Please understand
        the inconvenience caused to you</span
      >
    </div>
    <div class="flex">
      <h3>Admission ticket：</h3>
      <span>The real name system is implemented in this performance</span>
    </div>
    <div class="flex">
      <h3>Terms：</h3>
      <span>Read Our Policies</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bookText {
  max-width: 738px;
  margin: 56px auto;
  border-top: #1928454d 1px solid;
  border-bottom: #1928454d 1px solid;
  justify-content: space-between;
  align-items: center;
  .flex {
    padding: 32px 0;
    justify-content: space-between;
    border-bottom: #1928454d 1px solid;
    &:last-child {
      padding: 32px 0 57px;
      span {
        position: relative;
        color: #192845;
        &::after {
          position: absolute;
          content: "";
          width: 118px;
          height: 1px;
          background-color: #192845;
          bottom: 0;
          left: 0;
        }
      }
    }
    h3 {
      width: 25%;
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #192845;
      line-height: 24px;
    }
    span {
      width: 68%;
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #81818f;
      line-height: 24px;
    }
  }
}
</style>
