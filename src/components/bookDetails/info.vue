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
      <el-form-item label="Country" prop="region"
        ><el-select v-model="infoForm.region"
          ><el-option label="Volvo" value="Volvo"></el-option
          ><el-option label="Saab" value="Saab"></el-option
          ><el-option label="Opel" value="Opel"></el-option></el-select
      ></el-form-item>
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
import $ from "jquery";
export default {
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
        var data = JSON.stringify(this.infoForm);
        $.ajax({
          url: "/order",
          type: "POST",
          data: data,
          cache: false,
          success: function () {
            $("#success").show();
            $("#bookDetailsForm").trigger("reset");
            // api请求成功的回调 （页面跳转）
            // window.location.href("~")
          },
          error: function () {
            $("#error").show();
          },
        });
      });
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
