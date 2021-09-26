<template>
  <div class="p_view">
    <!-- <viewTitle /> -->
    <ViewTitle />
    <!-- <viewContent /> -->
    <ViewContent />
  </div>
</template>

<script>
import ViewContent from "./content.vue";
import ViewTitle from "./title.vue";

export default {
  components: {
    ViewContent,
    ViewTitle,
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
  // .title {
  //   text-align: center;
  //   margin-bottom: 56px;
  //   padding-top: 116px;
  //   li {
  //     display: inline-block;
  //     a {
  //       font-size: 16px;
  //       font-family: PingFangSC, PingFangSC-Semibold;
  //       font-weight: 600;
  //       color: #fff;
  //       line-height: 14px;
  //       padding-right: 32px;
  //       display: inline-block;
  //       padding-bottom: 16px;
  //       border-bottom: #fff 2px solid;
  //       margin-right: 0;
  //       cursor: pointer;
  //     }
  //     a.active {
  //       color: #c0ffec;
  //     }
  //   }
  // }
  // .content {
  //   max-width: 45.3rem;
  //   margin: 0 auto;
  //   /* text-align: center;   */
  //   padding: 56px 24px;
  //   background: #f5f8f7;
  //   border-radius: 8px;
  //   opacity: 1;
  //   /* position: absolute; */
  //   top: 0;
  //   left: 0;
  //   bottom: 0;
  //   right: 0;
  //   z-index: 11;

  //   .item {
  //     border: 1px solid #a7b0be;
  //     border-radius: 8px;
  //     padding: 24px;
  //     margin-bottom: 24px;

  //     &:hover {
  //       background: linear-gradient(270deg, #c0e1ff 0%, #e2f1fe 97%);
  //       box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.2);
  //     }

  //     .info {
  //       margin-left: 24px;
  //       width: 452px;
  //       text-align: left;

  //       h3 {
  //         font-size: 16px;
  //         font-family: PingFangSC, PingFangSC-Semibold;
  //         font-weight: 600;
  //         text-align: left;
  //         color: #192845;
  //         line-height: 22px;
  //       }

  //       p {
  //         font-size: 14px;
  //         font-family: PingFangSC, PingFangSC-Regular;
  //         font-weight: 400;
  //         text-align: left;
  //         color: #515161;
  //         line-height: 25px;
  //         margin: 16px 0;
  //       }

  //       span {
  //         font-size: 12px;
  //         font-family: PingFangSC, PingFangSC-Medium;
  //         font-weight: 500;
  //         text-align: left;
  //         color: #192845;
  //         line-height: 16px;
  //         margin-right: 23px;
  //         position: relative;
  //         padding-left: 15px;

  //         &::before {
  //           position: absolute;
  //           content: "";
  //           width: 6px;
  //           height: 6px;
  //           background: #192845;
  //           border-radius: 50%;
  //           top: 5px;
  //           left: 0;
  //         }
  //       }

  //       .heng {
  //         width: 420px;
  //         height: 1px;
  //         opacity: 0.1;
  //         background: #192845;
  //         margin: 16px 0;
  //       }

  //       .v_location {
  //         display: flex;
  //         align-items: center;
  //         #v_location {
  //           width: 17px;
  //           height: 22px;
  //           margin-right: 8px;
  //         }
  //         span {
  //           position: static;
  //           padding-left: 0;
  //         }
  //         span.location {
  //           font-size: 14px;
  //           font-family: PingFangSC, PingFangSC-Regular;
  //           font-weight: 400;
  //           text-align: left;
  //           color: #515161;
  //           line-height: 22px;
  //         }
  //       }
  //     }

  //     .more {
  //       padding-top: 43px;
  //       text-align: center;

  //       span {
  //         font-size: 12px;
  //         font-family: PingFangSC, PingFangSC-Medium;
  //         font-weight: 500;
  //         color: #192845;
  //         line-height: 17px;
  //       }

  //       span.money {
  //         font-size: 32px;
  //         font-family: DINAlternate, DINAlternate-Bold;
  //         font-weight: 700;
  //         color: #192845;
  //         line-height: 37px;
  //         display: block;
  //         margin: 6px 0 32px;
  //       }

  //       a {
  //         background: #c0ffec;
  //         border-radius: 4px;
  //         box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  //         font-size: 14px;
  //         font-family: PingFangSC, PingFangSC-Medium;
  //         font-weight: 500;
  //         text-align: left;
  //         color: #192845;
  //         line-height: 20px;
  //         padding: 10px 32px;
  //         border: none;
  //         cursor: pointer;
  //       }
  //     }
  //   }
  // }
}
</style>
