<template>
  <div class="p_contact">
    <div class="container">
      <h3 class="title">Contact Us</h3>
      <ContactForm />
      <ContactLocation />
    </div>
  </div>
</template>

<script>
import ContactForm from "./contact-form.vue";
import ContactLocation from "./contact-location.vue";

export default {
  name: "contact",
  components: {
    ContactForm,
    ContactLocation,
  },
};
</script>

<style lang="scss" scoped>
.p_contact {
  background-image: url(../../assets/images/i_banner.png);
  background-repeat: no-repeat;
  background-size: 200%;
  min-height: 45.5rem;
  position: relative;

  .container {
    max-width: 64rem;
    margin: 0 auto;
    text-align: center;
    padding-top: 7rem;
    opacity: 1;
    /* position: absolute; */
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 11;

    h3.title {
      margin-bottom: 1.2rem;
    }
  }
}
</style>
