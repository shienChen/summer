<template>
  <div class="summer-layout">
    <homepageHeader />
    <main>
      <router-view />
    </main>
    <homepageFooter />
  </div>
</template>

<script>
import homepageHeader from "./Header.vue";
import homepageFooter from "./Footer.vue";

export default {
  name: "Layout",
  components: {
    homepageHeader,
    homepageFooter,
  },
};
</script>
