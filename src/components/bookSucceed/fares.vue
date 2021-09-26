<template>
  <div class="order">
    <img src="../../assets/images/order.png" alt="" width="100%" />
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
.order {
  width: 296px;
  padding: 0 0 24px 0;
  .ticket {
    padding: 0 24px 24px;
  }
  .Subtotal {
    padding: 0 24px 24px;
  }
  .Total {
    padding: 0 24px;
  }
}
</style>
