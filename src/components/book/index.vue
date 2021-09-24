<template>
  <div class="book">
    <div class="container">
      <div class="content">
        <div class="commonTitle">
          <a href="/view"><img src="../../assets/images/prve.png" alt="" /></a>
          <h3 class="v_title">Aranya Art Center</h3>
        </div>
        <div class="article" v-for="item in articalList" :key="item.id">
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </div>
        <div class="bookBox flex">
          <swiper />
          <bookTime />
        </div>
        <bookText />
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "./swiper.vue";
import bookTime from "./time.vue";
import bookText from "./text.vue";
// import axios from "axios";

export default {
  data() {
    return {
      articalList: [],
      total: 0,
    };
  },
  components: {
    swiper,
    bookTime,
    bookText,
  },
  // created() {
  //   this.getArticleList();
  // },
  // methods: {
  //   async getArticleList() {
  //     const { data: res } = await axios.get("/api/article/list");
  //     console.log(res);
  //     // if (res.meta.status !== 200) {
  //     //   return this.$message.error("获取用户列表失败！");
  //     // }
  //     this.articalList = res.data.list;
  //     this.total = res.data.total;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
// .book {
//   background-image: url(../../assets/images/i_banner.png);
//   background-repeat: no-repeat;
//   background-size: 200%;
//   background-position: center;
//   min-height: 45.5rem;
//   position: relative;
//   .container {
//     max-width: 47.75rem;
//     margin: 0 auto;
//     padding-top: 5.8rem;
//     padding-bottom: 2.8rem;
//     opacity: 1;
//     /* position: absolute; */
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     z-index: 11;
//     .content {
//       background: #f5f8f7;
//       border-radius: 8px;
//       padding: 56px 24px;

//       .bookBox {
//         justify-content: space-between;
//       }
//     }
//   }
// }

.bookBox {
  justify-content: space-between;
}
</style>
