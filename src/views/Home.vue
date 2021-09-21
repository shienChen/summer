<template>
  <div class="home">
    <Banner />
    <Surf />
    <Show />
    <Shop />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Surf from "@/components/surf/index.vue";
import Show from "@/components/show/index.vue";
import Shop from "@/components/Shop.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Surf,
    Show,
    Shop,
  },
};
</script>
