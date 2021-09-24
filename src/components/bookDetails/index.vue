<template>
  <div class="bookDetails book">
    <div class="container">
      <div class="content">
        <div class="commonTitle">
          <img src="../../assets/images/prve.png" alt="" />
          <h3 class="v_title">Aranya Art Center</h3>
        </div>
        <div class="contentBox flex">
          <info />
          <order />
        </div>
        <div class="bookDetailsHeng"></div>
        <join />
      </div>
    </div>
  </div>
</template>

<script>
import info from "./info.vue";
import order from "./order.vue";
import join from "../Join.vue";

export default {
  components: {
    info,
    order,
    join,
  },
};
</script>

<style lang="scss" scoped>
.bookDetails .contentBox {
  justify-content: space-between;
  padding-bottom: 56px;
}
.bookDetailsHeng {
  max-width: 738px;
  height: 2px;
  margin: 0 auto;
  border-bottom: #1928454d 2px solid;
  margin-bottom: 56px;
}
</style>
