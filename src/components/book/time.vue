<template>
  <div class="timeBox">
    <!-- <p>直接获取参数{{ this.$route.params.id }}</p> -->
    <div class="time">
      <div class="shu">
        <span>From</span>
        <span class="money">${{ price }}</span>
        <span>one person</span>
      </div>
      <p>Lineup</p>
      <p class="band">Mandarin Band</p>
      <div class="showTime number">
        <span>Show Time</span>
        <img src="/images/calendar.png" alt="" />
        <input
          type="text"
          class="demo-input"
          placeholder="请选择日期"
          id="test1"
        />
      </div>
      <div class="adulys number">
        <span>Adulys：</span><input type="number" v-model="aduNum" />
        <img src="/images/preset.png" alt="" @click="addAduNum" />
      </div>
      <div class="kids number">
        <span>Kids：</span><input type="number" v-model="kidNum" />
        <img src="/images/preset.png" alt="" @click="subKidNum" />
      </div>
      <div class="flex">
        <span>{{ aduNum }}</span
        ><span class="name">Adults</span>
        <span class="right">${{ AduPrices }}</span>
      </div>
      <div class="flex">
        <span>{{ kidNum }}</span
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
import axios from "axios";

export default {
  data() {
    return {
      aduNum: 1,
      kidNum: 0,
      aduPrice: 0,
      kidPrice: 0,
      tax: 0,
      total: 0,
      price: 0,
    };
  },
  created() {
    this.getPrice();
  },
  methods: {
    async getPrice() {
      const { data: res } = await axios.get("/api/view/get/", {
        params: {
          id: this.$route.params.id,
        },
      });
      console.log(res);
      this.price = res.data.price;
      // console.log(this.price);
    },
    addAduNum() {
      this.aduNum = parseInt(this.aduNum) + 1;
    },
    subKidNum() {
      if (this.kidNum > 0) {
        this.kidNum = parseInt(this.kidNum) - 1;
      }
    },
  },
  computed: {
    AduPrices() {
      return this.aduNum * this.price;
    },
    KidPrices() {
      return (this.kidNum * this.price) / 2;
    },
    Taxs() {
      return (this.AduPrices + this.KidPrices) * 0.05;
    },
    Totals() {
      return this.AduPrices + this.KidPrices;
    },
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
</style>
