<template>
  <el-form :model="ruleForm" :rules="rules" ref="FormRef" class="form">
    <div class="contact_form flex">
      <el-form-item label="Enter Your Name" prop="name">
        <el-input
          v-model="ruleForm.name"
          placeholder="Mandarin"
          style="width: 417px"
        ></el-input>
      </el-form-item>
      <el-form-item label="Enter Your Email" prop="email">
        <el-input
          v-model="ruleForm.email"
          placeholder="Email"
          style="width: 356px"
        ></el-input>
      </el-form-item>
    </div>

    <el-form-item label="Enter Your Subject" prop="subject" class="title">
      <el-input
        v-model="ruleForm.subject"
        placeholder="Subject"
        id="subject"
      ></el-input>
    </el-form-item>
    <el-form-item label="Enter Your Message" prop="message">
      <el-input
        type="textarea"
        v-model="ruleForm.message"
        placeholder="Message"
        style="height: 180px"
      ></el-input>
    </el-form-item>
    <div id="success">You have placed your order successfully.!</div>
    <div id="error">Order failed, please try later.</div>
    <el-button type="submit" class="btn btn-block" @click="addUser"
      >Subscribe</el-button
    >
  </el-form>
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
    return {
      ruleForm: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please enter a user name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: "The username contains 3 to 10 characters",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Please enter email address",
            trigger: "blur",
          },
          { validator: checkEmail, trigger: "blur" },
        ],
        subject: [
          { required: true, message: "Please enter a topic", trigger: "blur" },
        ],
        message: [
          {
            required: true,
            message: "Please enter the content",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    addUser() {
      this.$refs.FormRef.validate(async (valid) => {
        console.log(valid);
        if (!valid) return;
        var data = JSON.stringify(this.ruleForm);
        $.ajax({
          url: "/user",
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
.form {
  width: 797px;
  margin: 0 auto;
  background: #f5f8f7;
  border-radius: 8px;
  padding: 32px 24px;
  margin-bottom: 100px;
  text-align: left;
  input {
    border: 1px solid #a7b0be;
    border-radius: 4px;
    padding: 0.625rem 1.2rem;
    margin-top: 16px;
    outline: none;
  }
  .contact_form {
    justify-content: space-between;
  }
  .btn-block {
    width: 100%;
    height: 40px;
    background: #c0ffec;
    border-radius: 4px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border: none;
    span {
      line-height: 40px;
    }
  }
}
</style>
