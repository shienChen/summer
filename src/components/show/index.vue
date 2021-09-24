<template>
  <div class="i_show">
    <div class="container">
      <travel />
      <sleep />
    </div>
  </div>
</template>

<script>
import travel from "./travel.vue";
import sleep from "./sleep.vue";

export default {
  name: "show",
  components: {
    travel,
    sleep,
  },
};
</script>

<style lang="scss" scoped>
.i_show {
  background-image: url(../../assets/images/travel_bg.png);
  background-repeat: no-repeat;
  background-size: 105%;
  padding-top: 3.6rem;
  padding-bottom: 3.6rem;

  // display: none;

  .container {
    max-width: 64rem;
    margin: 0 auto;
  }
}
</style>
