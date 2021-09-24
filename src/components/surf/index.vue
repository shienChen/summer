<template>
  <div class="i_surf">
    <div class="container">
      <location />
      <surfView />
    </div>
  </div>
</template>

<script>
import location from "./location.vue";
import surfView from "./surfView.vue";

export default {
  name: "surf",
  components: {
    location,
    surfView,
  },
};
</script>

<style lang="scss" scoped>
.i_surf {
  background-image: url(../../assets/images/i_surf.png);
  background-repeat: no-repeat;
  background-size: 105%;
  padding-bottom: 80px;
}
</style>
