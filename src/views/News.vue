<template>
  <div class="p_news">
    <div class="container">
      <h3 class="title">News Center</h3>
      <div class="wrapper">
        <div class="item flex" v-for="item in newsList" :key="item.id">
          <div class="img">
            <!-- <img src="../assets/images/news01.png" /> -->
            <img :src="item.img" />
          </div>
          <div class="text">
            <div class="title flex">
              <h3>{{ item.title }}</h3>
              <span id="time">{{ item.time }}</span>
            </div>
            <p>
              {{ item.describe }}
            </p>
            <div class="Btn">
              <span>real-time info</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="news_mask"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "News",
  data() {
    return {
      newsList: [],
      total: 0,
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    async getNewsList() {
      const { data: res } = await axios.get("/api/news/list");
      console.log(res);
      this.newsList = res.data.list;
      this.total = res.data.total;
    },
  },
};
</script>

<style lang="scss" scoped>
.p_news {
  background-image: url(../assets/images/i_banner.png);
  background-repeat: no-repeat;
  background-size: 205%;
  background-position: center;
  min-height: 45.5rem;
  position: relative;

  .container {
    max-width: 42.25rem;
    margin: 0 auto;
    text-align: center;
    padding-top: 5.8rem;
    padding-bottom: 2.8rem;
    opacity: 1;
    /* position: absolute; */
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 11;

    h3.title {
      margin-bottom: 1.6rem;
    }

    .wrapper {
      background: #f5f8f7;
      border-radius: 0.4rem;
      padding: 1.6rem 0.8rem;

      .item {
        width: 40.65rem;
        border: 0.05rem solid #a7b0be;
        border-radius: 0.4rem;
        margin-bottom: 1.2rem;
        padding: 1.2rem;

        &:hover {
          background: linear-gradient(270deg, #c0e1ff 0%, #e2f1fe 97%);
          box-shadow: 0 0.8rem 1.2rem 0 rgba(0, 0, 0, 0.1);
        }

        .img {
          width: 11.5rem;
          margin-right: 1.2rem;
        }

        .text {
          .title {
            justify-content: space-between;
            align-items: center;

            h3 {
              font-size: 0.8rem;
              font-family: PingFangSC, PingFangSC-Semibold;
              text-align: left;
              color: #192845;
              line-height: 1.1rem;
            }

            span {
              font-size: 0.7rem;
              font-weight: 400;
              text-align: right;
              color: #81818f;
              line-height: 0.8rem;
            }
          }

          p {
            font-size: 0.7rem;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #515161;
            line-height: 1.2rem;
            margin: 1.2rem 0;
          }

          .Btn {
            border: 0.05rem solid #81818f;
            border-radius: 4px;
            display: inline-block;
            float: left;

            span {
              font-size: 0.06rem;
              font-weight: 400;
              text-align: left;
              color: #81818f;
              line-height: 0.8rem;
              display: inline-block;
              padding: 0.4rem 0.6rem;
            }
          }
        }
      }
    }
  }
}
</style>
