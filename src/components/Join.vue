<template>
  <el-form
    :model="emailForm"
    :rules="emailRules"
    ref="emailRef"
    class="join"
    id="join"
  >
    <h3>Join our mailing list</h3>
    <el-form-item prop="email">
      <el-input
        v-model="emailForm.email"
        placeholder="Enter your email her"
        class="joinInput"
      >
      </el-input>
    </el-form-item>
    <el-button class="bookDetailsBtn" @click="addEmail"
      >Subscribe Now</el-button
    >
    <span>or</span>
    <a @click="jump('/contact')" target="_blank">Concact Us</a>
  </el-form>
</template>

<script>
import axios from "axios";
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
    return {
      emailForm: {
        email: "",
      },
      emailRules: {
        email: [
          {
            required: true,
            message: "Please enter email address",
            trigger: "blur",
          },
          { validator: checkEmail, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    addEmail() {
      this.$refs.emailRef.validate(async (valid) => {
        if (!valid) return;
        const res = await axios.post("/api/email", this.emailForm);
        if (res.status !== 200) {
          this.$message.error("Email failed, please try later.");
        }
        this.$message.success("You have placed your email successfully.!");
        this.$refs.emailRef.resetFields();
      });
    },
    jump(val) {
      this.$router.push(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.join {
  max-width: 356px;
  margin: 0 auto;
  h3 {
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: center;
    color: #192845;
    line-height: 22px;
  }
  .el-input {
    width: 100%;
    border: 1px solid #192845;
    border-radius: 4px;
    text-align: center;
    margin-top: 24px;
    outline: none;
  }
  .bookDetailsBtn {
    width: 100%;
    margin-bottom: 24px;
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
  span {
    display: block;
    text-align: center;
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: center;
    color: #192845;
    line-height: 22px;
    margin-bottom: 14px;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 154px;
      height: 2px;
      opacity: 0.3;
      background: #1928454d;
      right: 0;
      top: 11px;
    }
    &::before {
      position: absolute;
      content: "";
      width: 154px;
      height: 2px;
      opacity: 0.3;
      background: #1928454d;
      left: 0;
      top: 11px;
    }
  }
  a {
    display: inherit;
    text-align: center;
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: center;
    color: #2296f3;
    line-height: 22px;
    cursor: pointer;
  }
}
</style>
