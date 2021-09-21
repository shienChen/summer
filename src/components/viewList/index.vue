<template>
  <div class="p_view">
    <viewTitle />
    <viewContent />
  </div>
</template>

<script>
import viewTitle from "./title.vue";
import viewContent from "./content.vue";

export default {
  name: "viewList",
  components: {
    viewTitle,
    viewContent,
  },
};
</script>

<style lang="scss" scoped>
.p_view {
  background-image: url(../../assets/images/i_banner.png);
  background-repeat: no-repeat;
  background-size: 200%;
  background-position: center;
  min-height: 45.5rem;
  position: relative;
  padding-bottom: 56px;
}
</style>
