<template>
  <div class="info">
    <p>Once your reservation is confirmed, you will get an email.</p>
    <div class="checking">
      <div>
        <span class="left">Ticket checking time</span>
        <span class="right">03:30 PM</span>
      </div>
      <div>
        <span class="left">Admission time by ticket</span>
        <span class="right">04:30 PM</span>
      </div>
    </div>
    <div class="performance">
      <h3>Performance Details</h3>
      <div>
        <span class="left">Phone Number</span>
        <span class="right">+1-234-5678910</span>
      </div>
      <div>
        <span class="left">Email</span>
        <span class="right">Aranya-Live@kooboo.com</span>
      </div>
      <div>
        <span class="left">Address</span>
        <span class="right">Chengyi North Street, Xia Men, AC 0592</span>
      </div>
    </div>
    <a href="/home" class="bookDetailsBtn">Return to home page</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info {
  padding-left: 82px;
  width: 50%;
  text-align: left;
  p {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: center;
    color: #192845;
    line-height: 20px;
    display: inline-block;
    padding: 30px 24px;
    border: 1px solid #a7b0be;
    border-radius: 4px;
    margin-bottom: 56px;
  }
  .checking {
    padding: 0 24px;
    padding-bottom: 56px;
    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .performance {
    padding: 0 24px;
    margin-bottom: 24px;
    h3 {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #192845;
      line-height: 22px;
      padding-bottom: 8px;
      // border-bottom: rgb(25 40 69 / 30%) 1px solid;
      margin-bottom: 24px;
    }
    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  span {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    color: #515161;
    line-height: 20px;
  }
  span.right {
    text-align: right;
    color: #192845;
  }
}
</style>
