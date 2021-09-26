<template>
  <div class="bookSucceed bookDetails book">
    <div class="container">
      <div class="content">
        <div class="commonTitle">
          <h3 class="v_title">Congrayulations!</h3>
          <p>Yoko Mandarin,your reservation was placed.</p>
        </div>
        <div class="contentBox flex">
          <orderInfo />
          <fares />
        </div>
        <div class="bookDetailsHeng"></div>
        <join />
      </div>
    </div>
  </div>
</template>

<script>
import orderInfo from "./orderInfo.vue";
import fares from "./fares.vue";
import join from "../Join.vue";
export default {
  components: {
    orderInfo,
    fares,
    join,
  },
};
</script>

<style lang="scss" scoped></style>
