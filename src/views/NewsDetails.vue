<template>
  <div class="newsDetails p_news">
    <div class="container">
      <h3 class="title">News Center</h3>
      <!-- <p>直接获取参数{{ id }}</p> -->
      <div class="content">
        <div class="commonTitle">
          <img src="../assets/images/prve.png" alt="" @click="jump('/News')" />
          <h3>{{ article.title }}</h3>
        </div>
        <p class="time">{{ article.time | dateFormat }}</p>
        <div class="des" v-html="article.article">
          <!-- {{ article.article }} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNewsId } from "@/api/news.js";
export default {
  name: "NewsDetails",
  data() {
    return {
      article: "",
      id: "",
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getNewsDetails();
  },
  methods: {
    jump(val) {
      this.$router.push(val);
    },
    async getNewsDetails() {
      this.id = this.$route.query.id;
      const result = await getNewsId({
        id: this.id,
      });
      console.log(result);
      this.article = result;
      console.log("this.article=" + this.article);
    },
  },
};
</script>

<style lang="scss" scoped>
.newsDetails {
  .container {
    h3.title {
      margin-bottom: 56px;
    }
    .content {
      background: #f5f8f7;
      border-radius: 8px;
      padding: 56px 32px 97px;
      .commonTitle {
        margin-bottom: 32px;
        h3 {
          font-size: 32px;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 500;
          color: #192845;
          line-height: 45px;
          padding-left: 80px;
          text-align: left;
        }
      }
      .time {
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #192845;
        line-height: 20px;
        padding-left: 80px;
      }
      .des {
        margin-top: 32px;
        img {
          margin-bottom: 32px;
        }
        h3 {
          font-size: 20px;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 500;
          text-align: left;
          color: #192845;
          line-height: 28px;
          margin-bottom: 24px;
        }
        p {
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #192845;
          line-height: 26px;
          margin-bottom: 32px;
        }
      }
    }
  }
}
</style>
