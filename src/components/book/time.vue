<template>
  <div class="timeBox">
    <!-- <p>直接获取参数{{ this.$route.query.id }}</p> -->
    <div class="time">
      <div class="shu">
        <span>From</span>
        <span class="money">${{ order.price }}</span>
        <span>one person</span>
      </div>
      <p>Lineup</p>
      <p class="band">Mandarin Band</p>
      <div class="showTime number">
        <span v-show="show">Show Time</span>
        <div>
          <input type="text" v-model="date" />
        </div>
        <img
          src="../../assets/images/calendar.png"
          alt=""
          id="orderTime"
          @click="isShow"
        />
      </div>
      <div class="adulys number">
        <span>Adulys：</span
        ><input type="number" min="0" v-model="order.aduNum" />
        <img src="/images/preset.png" alt="" @click="addAduNum" />
      </div>
      <div class="kids number">
        <span>Kids：</span
        ><input type="number" min="0" v-model="order.kidNum" />
        <img src="/images/preset.png" alt="" @click="subKidNum" />
      </div>
      <div class="flex">
        <span>{{ order.aduNum }}</span
        ><span class="name">Adults</span>
        <span class="right">${{ AduPrices }}</span>
      </div>
      <div class="flex">
        <span>{{ order.kidNum }}</span
        ><span class="name">Kids</span>
        <span class="right">${{ KidPrices }}</span>
      </div>
      <div class="flex">
        <span>Tax（5%）</span>
        <span class="right">${{ Taxs }}</span>
      </div>
      <div class="flex">
        <span>Total</span>
        <span>${{ Totals }}</span>
      </div>
      <a href="/bookDetails">Book Now</a>
    </div>
  </div>
</template>

<script>
import { getBookId } from "@/api/book.js";
import laydate from "layui-laydate";

export default {
  data() {
    return {
      order: {
        price: 0,
        aduNum: 0,
        kidNum: 0,
      },
      date: "",
      show: true,
    };
  },
  created() {
    this.getPrice();
  },
  methods: {
    async getPrice() {
      this.id = this.$route.query.id;
      const result = await getBookId({
        id: this.id,
      });
      console.log(result);
      this.order.price = result.from;
    },
    addAduNum() {
      // this.aduNum = parseInt(this.aduNum) + 1;
    },
    subKidNum() {
      // if (this.kidNum > 0) {
      //   this.kidNum = parseInt(this.kidNum) - 1;
      // }
    },
    isShow() {
      this.show = false;
    },
  },
  computed: {
    aduNum() {
      return this.order.aduNum;
    },
    kidNum() {
      return this.order.kidNum;
    },
    AduPrices() {
      return this.order.aduNum * this.order.price;
    },
    KidPrices() {
      return (this.order.kidNum * this.order.price) / 2;
    },
    Subtotal() {
      return this.AduPrices + this.KidPrices;
    },
    Taxs() {
      return this.Subtotal * 0.05;
    },

    Totals() {
      return this.Subtotal * 1.05;
    },
  },
  watch: {
    aduNum(aduNum) {
      sessionStorage.setItem("aduNum", aduNum);
    },
    kidNum(kidNum) {
      sessionStorage.setItem("kidNum", kidNum);
    },
    Subtotal(Subtotal) {
      sessionStorage.setItem("Subtotal", Subtotal);
    },
    Taxs(Taxs) {
      sessionStorage.setItem("Taxs", Taxs);
    },
    Totals(Totals) {
      sessionStorage.setItem("Totals", Totals);
    },
    date(date) {
      sessionStorage.setItem("date", date);
    },
  },
  mounted() {
    laydate.render({
      elem: "#orderTime", // 指定元素
      type: "datetime", // 组件的类型：year,month,time···
      format: "yyyy-MM-dd HH:mm", // 设置显示格式
      done: (value) => {
        // 点击确认执行的回调函数，会把当前选择的时间传入进来
        // 把选择的时间赋值给先前定义好的变量，显示在页面
        this.date = value;
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.timeBox {
  width: 30%;
  .time {
    border: 1px solid #a7b0be;
    border-radius: 8px;
    padding: 24px;
    .shu {
      position: relative;
      padding-left: 24px;
      text-align: left;
      &::before {
        position: absolute;
        content: "";
        width: 1px;
        height: 83px;
        opacity: 0.2;
        background: #192845;
        left: 0;
        top: 10px;
      }
    }
    span {
      font-size: 12px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #81818f;
      line-height: 17px;
    }
    span.money {
      font-size: 32px;
      font-family: DINAlternate, DINAlternate-Bold;
      font-weight: 700;
      color: #192845;
      line-height: 37px;
      margin: 6px 0;
      display: block;
    }
    .number {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #979797;
      border-radius: 4px;
      padding: 10px 16px 10px 24px;
      margin-bottom: 16px;
      input {
        width: 100%;
        border: none;
        font-size: 12px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #81818f;
        line-height: 17px;
        padding-left: 5px;
        background: none;
        outline: none;
      }
    }
    .flex {
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      span {
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #192845;
        line-height: 20px;
      }
      span.name {
        color: #81818f;
        margin-right: 120px;
      }
      span.right {
        color: #515161;
      }
    }
    a {
      background: #c0ffec;
      border-radius: 4px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      color: #192845;
      line-height: 20px;
      display: block;
      padding: 10px 75px;
      margin-top: 16px;
    }
    p {
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #515161;
      line-height: 20px;
      margin-top: 24px;
      text-align: left;
    }
    p.band {
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #192845;
      line-height: 20px;
      margin-top: 6px;
      margin-bottom: 24px;
    }
  }
}
#orderTime {
  cursor: pointer;
}
</style>
