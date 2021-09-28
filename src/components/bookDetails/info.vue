<template>
  <div class="info">
    <h3 class="bookDetailsTitle">Detailed Information</h3>
    <el-form
      :model="infoForm"
      :rules="infoRules"
      ref="infoRef"
      class="form bookDetailsForm"
      id="bookDetailsForm"
    >
      <div class="flex">
        <el-form-item label="First Name" prop="firstName"
          ><el-input v-model="infoForm.firstName" placeholder="Yoko"></el-input
        ></el-form-item>
        <el-form-item label="Last Name" prop="lastName"
          ><el-input
            v-model="infoForm.lastName"
            placeholder="Mandarin"
          ></el-input
        ></el-form-item>
      </div>
      <div class="flex">
        <el-form-item label="Email Address" prop="address"
          ><el-input v-model="infoForm.address"></el-input
        ></el-form-item>
        <el-form-item label="Phone Number" prop="number"
          ><el-input v-model="infoForm.number"></el-input
        ></el-form-item>
      </div>
      <!-- <el-form-item label="Country" prop="region">
        <el-select v-model="infoForm.region"
          ><el-option label="Volvo" value="Volvo"></el-option
          ><el-option label="Saab" value="Saab"></el-option
          ><el-option label="Opel" value="Opel"></el-option
        ></el-select>
      </el-form-item> -->

      <!-- <h2>{{ countryTitle }}</h2> -->
      <el-form-item label="Country" prop="region">
        <foreign-area
          prop="region"
          popularCity="受欢迎的国家"
          selectBg="选择器的背景颜色"
          groupBg="选项的背景颜色"
          @selectCountry="监听选中的国家;"
          v-on:func="country"
        ></foreign-area>
      </el-form-item>

      <div class="text">
        By completing this booking I acknowledge I have read and accepted the
        <a href="/"><span>Property Policies.</span></a>
      </div>
      <div id="success">You have placed your order successfully.!</div>
      <div id="error">Order failed, please try later.</div>
      <el-button type="submit" class="bookDetailsBtn" @click="addOrder"
        >Confirm Reservation</el-button
      >
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import foreignArea from "@/components/bookDetails/foreignArea.vue";
export default {
  components: { foreignArea },
  data() {
    //验证邮箱规则
    var checkEmail = (rule, value, cb) => {
      const regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (regEmail.test(value)) {
        return cb();
      }
      cb(new Error("Please enter a valid email address"));
    };
    //验证手机号规则
    var checkMobile = (rule, value, cb) => {
      const regMobile =
        /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (regMobile.test(value)) {
        return cb();
      }
      cb(new Error("Please enter a valid mobile phone number"));
    };
    return {
      infoForm: {
        firstName: "",
        lastName: "",
        address: "",
        number: "",
        region: "",
      },
      infoRules: {
        firstName: [
          {
            required: true,
            message: "Please enter your firstName",
            trigger: "blur",
          },
        ],
        lastName: [
          {
            required: true,
            message: "Please enter your lastName",
            trigger: "blur",
          },
        ],
        address: [
          {
            required: true,
            message: "Please enter email address",
            trigger: "blur",
          },
          { validator: checkEmail, trigger: "blur" },
        ],
        number: [
          {
            required: true,
            message: "Please enter your number",
            trigger: "blur",
          },
          { validator: checkMobile, trigger: "blur" },
        ],
        region: [
          {
            required: true,
            message: "Please select the active area",
            trigger: "change",
          },
        ],
      },
    };
  },

  methods: {
    addOrder() {
      this.$refs.infoRef.validate(async (valid) => {
        // console.log(valid);
        if (!valid) return;
        const res = await axios.post("/api/order", this.infoForm);
        console.log(res);
        if (res.status !== 200) {
          this.$message.error("Order failed, please try later.");
        }
        this.$message.success("You have placed your order successfully.!");
        this.$refs.infoRef.resetFields();
        this.$router.push("/bookSucceed");
      });
    },
    country(e) {
      // this.countryTitle = e;
      this.infoForm.region = e;
      console.log("countryTitle=" + this.infoForm.region);
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  width: 66%;
  h3.bookDetailsTitle {
    font-size: 24px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    text-align: left;
    color: #192845;
    line-height: 33px;
    padding-bottom: 24px;
    border-bottom: #1928454d 1px solid;
    margin-bottom: 24px;
  }
  .bookDetailsForm {
    width: 100%;
    background: none;
    border-radius: 0;
    padding: 0;
    margin-bottom: 0px;
    text-align: left;
    .flex {
      justify-content: space-between;
    }
    .el-input {
      width: 286px;
      outline: none;
    }
    .bookDetailsBtn {
      background: #c0ffec;
      border-radius: 4px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
      padding: 10px 75px;
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      color: #192845;
      line-height: 20px;
      border: none;
      cursor: pointer;
    }
    .text {
      margin: 24px 0;
      font-size: 12px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #192845;
      line-height: 20px;
      position: relative;
      padding-left: 16px;
      &::after {
        position: absolute;
        content: "";
        width: 6px;
        height: 6px;
        background: #a7b0be;
        border-radius: 50%;
        top: 18px;
        left: 0px;
      }
      span {
        display: block;
        color: #2296f3;
      }
    }
  }
}
</style>
