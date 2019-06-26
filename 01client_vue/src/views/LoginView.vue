<template>
  <div>
    <div class="bg">
      <div class="out">
        <h2>{{msg}}</h2>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="账号密码登录" name="first">
            <div class="hello">
              <el-row>
                <el-col :span="24">
                  <el-input placeholder="请输入用户名" v-model="nameInput"></el-input>
                  <br>
                  <br>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-input placeholder="请输入密码" v-model="passwdInput" show-password></el-input>
                  <br>
                  <br>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-button class="cli" @click="loginAction">登录</el-button>
                </el-col>
                <!-- <el-col :span="24">
        <el-button @click="registerAction">注册用户</el-button>
                </el-col>-->
              </el-row>
            </div>
          </el-tab-pane>
          <!-- 注册 -->
          <el-tab-pane label="用户注册" name="second">
            <div class="hello">
              <el-row>
                <el-col :span="24">
                  <el-input placeholder="请输入用户名" v-model="nameInput"></el-input>
                  <br>
                  <br>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-input placeholder="请输入密码" v-model="passwdInput" show-password></el-input>
                  <br>
                  <br>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-button class="cli" @click="registerAction">点击注册</el-button>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="space"></div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import net from "../tools/net";
export default {
  name: "loginview",
  data() {
    return {
      msg: "登录房多多",
      nameInput: "",
      passwdInput: "",
      net: net,
      activeName: "second"
    };
  },
  components:{
    Footer
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //登陆
    loginAction: function() {
      let that = this;
      //以post联网获得服务器数据   localhost:8888/login
      this.net.post(
        "login",
        {
          name: this.nameInput,
          passwd: this.passwdInput
        },
        function(res) {
          console.log(res);
          console.log(res.data);
          if (res.data.code == 1) {
            alert("用户名不存在，请注册新用户");
          } else if (res.data.code == 2) {
            alert("密码错误，请重新输入");
          } else {
            console.log("用户名、密码正确");
            console.log(that.nameInput)
            localStorage.setItem('username',that.nameInput)
            //注册成功跳转页面
            that.$router.push("/")
          }
        }
      );
    },
    //注册
    registerAction: function() {
      //以post方式联网获得服务器数据   localhost:8888/register
      this.net.post(
        "register",
        {
          name: this.nameInput,
          passwd: this.passwdInput  
        },

        function(res) {
          console.log(res);
          console.log(res.data);
          if (res.data.code == 0) {
            alert("用户已经存在，请重新输入");
            return;
          } else {
            if (res.data.code == 1) {
              alert("注册成功");
            }
          }
        }
      );
    }
  }
};
</script>

<style scoped>
.bg {
  width: 100%;
  height: 700px;
  background: url("https://pages.anjukestatic.com/usersite/site/img/PlugLogin/bg.jpg")
    no-repeat;
  margin-top: 1px;
  position: absolute;
  top: 0px;
  left: 0px;
}
el-tabs {
  width: 400px;
  /* margin: 20px auto; */
}
.out {
  width: 500px;
  height: 250px;
  margin: 150px auto 0px;
  background-color: #fff;
  padding: 16px;
}
h2 {
  color: green;
}
.cli {
  width: 100%;
  background-color: #007f00;
  color: #fff;
}
.space {
  width: 100%;
  height: 700px;
}
</style>
