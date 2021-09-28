<template>
  <div class="order">
    <h3 class="bookDetailsTitle">Order Summary</h3>
    <img src="../../assets/images/order.png" alt="" />
    <div class="ticket">
      <div>
        <span class="left">Ticket type</span>
        <span class="right">Ordinary ticket</span>
      </div>
      <div>
        <span class="left">Date</span>
        <span class="right">Sep 13, 2021</span>
      </div>
      <div>
        <span class="left">Guest</span>
        <span class="right">{{ aduNum }} adults</span>
      </div>
      <div>
        <span class="left">Guest</span>
        <span class="right">{{ kidNum }} Kids</span>
      </div>
    </div>
    <div class="Subtotal">
      <div>
        <span class="left">Subtotal</span>
        <span class="right">${{ Subtotal }}</span>
      </div>
      <div>
        <span class="left">Tax（5%）</span>
        <span class="right">${{ Taxs }}</span>
      </div>
    </div>
    <div class="Total">
      <span class="left">Total</span>
      <span class="right">${{ Totals }}</span>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("bookAbout", [
      "aduNum",
      "kidNum",
      "Totals",
      "Taxs",
      "Subtotal",
    ]),
  },
};
</script>

<style lang="scss" scoped>
// .order {
//   width: 26%;
//   border: 1px solid #a7b0be;
//   border-radius: 8px;
//   padding: 24px 24px 56px;
//   span {
//     font-size: 14px;
//     font-family: PingFangSC, PingFangSC-Regular;
//     font-weight: 400;
//     color: #192845;
//     line-height: 20px;
//     text-align: left;
//   }
//   span.right {
//     font-family: PingFangSC, PingFangSC-Medium;
//     font-weight: 500;
//   }
//   h3.bookDetailsTitle {
//     margin-bottom: 16px;
//   }
//   .ticket {
//     margin-top: 24px;
//     // border-bottom: rgb(25 40 69 / 30%) 1px solid;
//     margin-bottom: 24px;
//     padding-bottom: 24px;
//     div {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 16px;
//       &:last-child {
//         margin-bottom: 0;
//       }
//     }
//   }
//   .Subtotal {
//     // border-bottom: rgb(25 40 69 / 30%) 1px solid;
//     margin-bottom: 24px;
//     padding-bottom: 24px;
//     div {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 16px;
//     }
//   }
//   .Total {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 16px;
//     margin-bottom: 0;
//     span {
//       font-size: 16px;
//       font-family: PingFangSC, PingFangSC-Medium;
//       font-weight: 500;
//       color: #192845;
//       line-height: 22px;
//     }
//     span.right {
//       font-family: DINAlternate, DINAlternate-Bold;
//       font-weight: 700;
//     }
//   }
// }
</style>
