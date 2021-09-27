<template>
  <div>
    <div id="header" class="index_nav">
      <div class="content">
        <svg class="icon" aria-hidden="true" id="logo">
          <use xlink:href="#icon-kooboo_black_30"></use>
        </svg>
        <ul class="header__nav">
          <li class="navitem">
            <a :class="{ active: show == 1 }" @click="jumpHome()" target="_self"
              ><span>Home</span></a
            >
          </li>
          <li class="navitem">
            <a
              :class="{ active: show == 2 }"
              @click="jumpAbout()"
              target="_self"
              ><span>About Us</span></a
            >
          </li>
          <li class="navitem">
            <a :class="{ active: show == 3 }" @click="jumpNews()" target="_self"
              ><span>News Center</span></a
            >
          </li>
          <li class="navitem">
            <a
              :class="{ active: show == 4 }"
              @click="jumpContact()"
              target="_self"
              ><span>Contact US</span></a
            >
          </li>
        </ul>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      str: "",
      id: "",
      strs: "",
      show: 1,
    };
  },
  methods: {
    jumpHome() {
      this.$router.push("/home");
      this.show = 1;
    },
    jumpAbout() {
      this.$router.push("/about");
      this.show = 2;
    },
    jumpNews() {
      this.$router.push("/news");
      this.show = 3;
    },
    jumpContact() {
      this.$router.push("/contact");
      this.show = 4;
    },
  },
};
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 3rem;
  opacity: 0.87;
  backdrop-filter: blur(30px);
  position: fixed;
  z-index: 1111;

  .content {
    text-align: center;
    max-width: 64rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #logo {
      width: 6.1rem;
      height: 1.5rem;
    }

    .header__nav {
      display: inline-block;

      li.navitem {
        float: left;
        position: relative;
        transition: all 0.4s ease-out 0s;
        padding: 0 1.3rem;
        line-height: 3.2em;

        &:hover {
          a {
            color: #c0ffec;
          }
        }

        a {
          color: #fff;
          font-size: 0.8rem;
          transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
          font-family: PingFangSC, PingFangSC-Semibold;
          cursor: pointer;
        }
      }
    }
  }
}
#header .content .header__nav li.navitem a.active {
  color: #c0ffec;
}
</style>
