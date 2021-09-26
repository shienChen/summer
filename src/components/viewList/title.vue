<template>
  <div class="title">
    <!-- <p>直接获取参数{{ id }}</p> -->
    <li v-for="item in viewCategory" :key="item.id">
      <a @click="jump(item.type)" :class="item.type === id ? 'active' : ''">{{
        item.title
      }}</a>
    </li>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: "",
      viewCategory: [],
      list: [],
      params: {
        pageSize: 10,
        pageNum: 1,
      },
    };
  },
  mounted() {
    this.getViewCategory();
    this.id = this.$route.query.name;
  },
  methods: {
    async getViewCategory() {
      const { data: res } = await axios.get("/api/view/category");
      this.viewCategory = res.data.list;
    },
    jump(type) {
      this.bus.$emit("type", type);
      // console.log("titleType=" + type);
      this.id = type;
    },
    jumpBook(id) {
      this.$router.push({ path: "/book/" + id });
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  margin-bottom: 56px;
  padding-top: 116px;
  li {
    display: inline-block;
    a {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: #fff;
      line-height: 14px;
      padding-right: 32px;
      display: inline-block;
      padding-bottom: 16px;
      border-bottom: #fff 2px solid;
      margin-right: 0;
      cursor: pointer;
    }
    a.active {
      color: #c0ffec;
    }
  }
}
</style>
