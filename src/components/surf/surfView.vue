<template>
  <div class="picture-wrapper">
    <div class="picture-item" v-for="location in locations" :key="location.id">
      <img
        :src="`http://summer-vue.chengcheng.kooboo.site${location.cover}`"
        alt=""
      />
      <div class="mask"></div>
      <div class="mask_txt">
        <h3>{{ location.name }}</h3>
        <p>{{ `${location.city}|${location.country}` }}</p>
        <a @click="toViewPage(location.name)"><span id="view">View</span></a>
      </div>
    </div>
  </div>
</template>

<script>
import { getLocationList } from "@/api/location";

export default {
  data: () => ({
    locations: [],
    params: {
      pageSize: 4,
      pageNum: 1,
    },
  }),
  async mounted() {
    const result = await getLocationList(this.params);
    console.log(result);
    this.locations = result.list;
  },
  methods: {
    toViewPage(locationId) {
      this.$router.push({
        name: "View",
        query: {
          name: locationId,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.picture-wrapper {
  display: flex;
  max-width: 72rem;
  margin: 0 auto;
  justify-content: space-between;

  .picture-item {
    width: 25%;
    position: relative;
    height: 740px;

    img {
      width: auto;
    }

    .mask {
      opacity: 0.72;
      background: #1c2121;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      text-align: center;
    }

    .mask_txt {
      opacity: 1;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      text-align: center;

      h3 {
        font-size: 2rem;
        font-family: PingFangSC, PingFangSC-Semibold;
        text-align: left;
        color: #ffffff;
        line-height: 1.8rem;
        padding: 2rem 0 0 2rem;
      }

      p {
        font-size: 1.2rem;
        font-family: PingFangSC, PingFangSC-Semibold;
        text-align: left;
        color: #ffffff;
        line-height: 1.65rem;
        letter-spacing: 0.5rem;
        margin: 8.3rem 0 6.4rem;
        padding-left: 2rem;
      }

      span#view {
        opacity: 0.3;
        display: block;
        width: 5.6rem;
        margin: 0 auto;
        height: 2rem;
        border: 1px solid #fff;
        border-radius: 0.2rem;
        font-size: 0.7rem;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: center;
        color: #fff;
        line-height: 2rem;
        letter-spacing: 0.2rem;
        cursor: pointer;
      }
    }

    &:hover {
      .mask {
        background: #1c212100;
      }
      .mask_txt {
        span#view {
          opacity: 1;
          border: 0.05rem solid #c0ffec00;
          color: #192845;
          background: #c0ffec;
          border-radius: 4px;
          box-shadow: 0px 8px 16px 0px #0000001a;
        }
      }
      img {
        transform: scaleY(1.22);
        transition: all 0.55s ease;
      }
    }
    &:nth-child(1) {
      .mask_txt h3 {
        width: 7rem;
      }
    }
    &:nth-child(2) {
      .mask_txt h3 {
        width: 7rem;
      }
    }

    &:nth-child(3) {
      .mask_txt h3 {
        width: 7rem;
      }
    }

    &:nth-child(4) {
      .mask_txt h3 {
        width: 8.5rem;
      }
    }
  }
}
</style>
