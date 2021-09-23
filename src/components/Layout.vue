<template>
  <div class="summer-layout">
    <page-header />
    <main>
      <router-view />
    </main>
    <page-footer />
  </div>
</template>

<script>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";

export default {
  name: "Layout",
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>
