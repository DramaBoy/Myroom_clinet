<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-col :span="24">
        <el-input placeholder="请输入内容" v-model="nameInput"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-input placeholder="请输入内容" v-model="passwdInput"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-button @click="loginAction">登录按钮</el-button>
      </el-col>
      <el-col :span="12">
        <el-button @click="registerAction">注册用户</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import net from "../tools/net";
export default {
  name: "login view",
  data() {
    return {
      msg: "登录页面",
      nameInput: "",
      passwdInput: "",
      net: net
    };
  },
  methods: {
    loginAction: function() {
      //以post联网获得服务器数据   localhost:8888/login
      this.net.post(
        "login",
        {
          name: this.nameInput,
          passwd: this.passwdInput
        },
        function(res) {
          console.log(res);
        }
      );
    },
    registerAction: function() {
      this.$router.push("/register");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
