<template>
  <div class="mar">
    <div class="title">{{msg}}</div>
   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <el-form-item label="修改密码" prop="passInput">
        <el-input placeholder="请输入密码"  v-model="ruleForm.passInput" show-password></el-input>
      </el-form-item>
      <br>

      <el-form-item>
        <el-button type="primary" @click="changeUser">确定修改</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
  </el-form>
  </div>
</template>

<script>
import net from "../../tools/net";
export default {
  data() {
    return {
      msg: "修改资料",
      ruleForm:{
        passInput: ""
      },
      net: net,
      rules: {
        passInput: [
          { required: true, message: "请输入要修改的密码", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {  
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    changeUser: function() {
      let that = this;
      this.net.post(
        "clientChange",
        {
          passwd: that.ruleForm.passInput,
          name:localStorage.getItem('username')
        },
        function(res) {
          console.log(res);
          if (res.data.code == 1) {
            alert("修改成功");
          } else if (res.data.code == 0) {
            alert("修改失败");
          } 
        }
      );
    },
  }
};
</script>

<style scoped>
.mar {
  margin-left: 30px;
}
.title {
  font-size: 20px;
  color: #666;
  font-weight: 600;
  margin-bottom: 50px;
}
</style>