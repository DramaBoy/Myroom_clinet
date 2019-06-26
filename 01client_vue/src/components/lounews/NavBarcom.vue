<template>
  <div class="navbarcom">
    <!-- 头部公共组件 -->
    <!--楼讯头部导航栏start-->
    <div class="topbar">
      <div class="left-list">
        <div class="left-listgo">
          <Header/> 
        </div>
      </div>
      <!--楼讯头部导航栏end-->
      <!-- 楼讯二级导航栏start -->
      <div class="navbar">
        <span class="navbar-img" >房多多</span>
        <div class="navbar-lounews">
          <span>|</span>
          <span id="lounewtitle">楼讯</span>
          <span class="chengdu">
            成都
            <i class="el-icon-caret-bottom"></i>
          </span>
        </div>
        <!-- 搜索框 -->
        <div class="btninput">
          <el-input
            placeholder="请输入楼盘名称、地址或房源特征"
            style="width:550px"
            class="myelinput input-with-select"
            size="medium"
          >
            <el-button slot="append" style="background: #f60">搜索</el-button>
          </el-input>
        </div>
      </div>
      <!-- 内容导航栏开始 -->
      <div class="barmain">
        <ul>
          <li
            v-for="(item,index) in topbar"
            :key="index"
            @click="switchcase(index)"
            v-bind:class="index==activityIndex?selecting:unselect"
          >{{item}}</li>
        </ul>
      </div>
      <!--内容导航栏结束  -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header-1.vue"
export default {
  name: "NavBarcom",
  data() {
    return {
      activityIndex: "",
      selecting: "selecting",
      unselect: "unselect",
      topbar: ["首页", "楼评导购", "热点新闻", "特色专题"]
    };
  },
  components:{
    Header 
  },
  methods: {
    // 导航栏部分点击页面跳转
    switchcase(index) {
      // console.log(index);
      this.activityIndex = index;
      // this.$router.push({name:'home',query: {id:'1'}})
      //  this.$router.replace() (用法同上,push)
      switch (index) {
        case 0:
          this.$router.push({ path: "/navbarcom" });
          break;
        case 1:
          this.$router.push({ path: "/daogou" });
          break;
        case 2:
          this.$router.push({ path: "/hotnews" });
          break;
        case 3:
          this.$router.push({ path: "/specialstopic" });
          break;
        default:
          this.$router.push({ path: "/navbarcom" });
          break;
      }
    }
  }
};
</script>

<style scoped>
/*  楼讯二级导航开始*/
.navbar {
  width: 1196px;
  height: 50px;
  line-height: 50px;
  margin: 10px auto;
  position: relative;
  /* background-color: pink; */
  line-height: 50px;
}
.btninput {
  position: absolute;
  top: 0px;
  right: 0px;
}
.navbar .navbar-lounews {
  width: 120px;
  height: 50px;
  margin-left: 100px;
}
.navbar .navbar-lounews #lounewtitle {
  line-height: 25px;
  font-size: 24px;
  color: #62ab00;
  font-family: "Microsoft YaHei", "微软雅黑", "Hiragino Sans GB", tahoma, arial,
    simhei;
}
.navbar .navbar-lounews .chengdu {
  color: #666;
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;
}
.navbar .navbar-img {
  width: 85px;
  height: 50px;
  float: left;
  list-style: none;
  text-align: center;
  color: #62AB00;
  font-family: YouYuan;
  font-weight: bolder;
  font-size: 26px;
}
/*  楼讯二级导航结束*/
i {
  font-style: normal;
}

/*楼讯头部导航栏start*/
.topbar {
  width: 100%;
  height: 46px;
}
.topbar .left-list {
  width: 1196px;
  height: 46px;
  /* background-color: pink; */
  margin: 0 auto;
}
.topbar .left-list .left-listgo1 {
  margin-left: 20px;
  font-size: 14px;
  cursor: pointer;
  color: #666;
}
.topbar .left-list .left-listgo1 span {
  padding: 0 6px;
}
.topbar .left-list .left-listgo1 span:hover {
  color: #f60;
}
.topbar .anjulogo {
  width: 85px;
  height: 46px;
  float: left;
  /* background-color: pink; */
  list-style: none;
  display: inline-block;
  text-align: center;
  color: #62AB00;
  font-family: YouYuan;
  font-weight: bolder;
  font-size: 26px;
}
.topbar .right-list {
  width: 310px;
  height: 46px;
  /* background-color: blueviolet; */
  float: right;
}
.topbar .right-list span {
  font-size: 14px;
  cursor: pointer;
  color: #666;
  margin-left: 10px;
}
.topbar .right-list span:hover {
  color: #f60;
}
.topbar .right-list .mylogin-box {
  width: 135px;
  height: 80px;
  background-color: gainsboro;
  position: absolute;
  top: 46px;
  right: 324px;
  z-index: 99999;
  display: none;
}
.topbar .right-list .mylogin-box p {
  color: #666;
  font-size: 14px;
}
.topbar .right-list .mylogin-box p:hover {
  color: #f60;
}
.topbar .right-list .login-first:hover .mylogin-box {
  display: block;
}
/*  楼讯头部导航结束*/

/* 内容导航栏开始 */
.barmain {
  width: 1196px;
  height: 40px;
  background-color: #62ab00;
  margin: 10px auto;
  line-height: 40px;
}
li {
  list-style: none;
}
.barmain ul li {
  display: inline-block;
  padding: 0px 15px;
  color: #ffff;
  font-size: 16px;
}
/* 导航栏切换的样式的类名 */
.selecting {
  background-color: rgb(89, 151, 0);
}
.unselect {
  background-color: rgb(98, 171, 0);
}
.barmain li:hover {
  background-color: rgb(79, 126, 1);
}
/* 内容导航栏结束 */
</style>