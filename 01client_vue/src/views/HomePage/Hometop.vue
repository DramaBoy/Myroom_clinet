<template>
<div class='hometop'>
    <!-- 头部广告开始 -->
<div class='header-ad'>
<img src="http://pic6.ajkimg.com/mat/97d6d0837134398fcbe1cbafe988f007?imageMogr2/format/jpg/thumbnail/1080x71" >
</div>
<!--  头部广告结束-->
<!-- logo部分开始-->
<div class='glblogo'>
<!--  左边-->
  <span class="glblogo-lf">
    <span class="logo-info">
      房多多
  </span>
    <span class="city-name">
      <el-dropdown>
  <span class="el-dropdown-link">
    成都<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>北京</el-dropdown-item>
    <el-dropdown-item>上海</el-dropdown-item>
    <el-dropdown-item>深圳</el-dropdown-item>
    <el-dropdown-item >广州</el-dropdown-item>
    <el-dropdown-item >杭州</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    </span>
  </span>
<!--  右边-->
  <span class="glblogo-rt">
    <span v-for="(items,index) in glblogo_rt" :key="index">
      {{items}}
    </span>
  </span>
</div>
<!--  logo结束-->
<!--  导航条开始-->
  <div class="glbnavbar">
    <!--导航条内容-->
      <div class="glbnavbar-content">
      <!--左边-->
        <div class="Ltabsnewslf">
          <span   v-for="(items,index) in L_tabsnewslf" :key="index"  @click="switchover(index)"   :class="index==activityIndex?selecting:unselect">
            {{items}}
          </span>
        </div>
        <!-- 右边-->
        <div class="Ltabsnewsrt">
          <div class="m">
            <span @click="userlogin">
              <i class="el-icon-user-solid"> </i>
              登录
            </span>
            <span @click="userregister ">
              注册
            </span>
          </div>
          <img src="../../assets/iosand.png" alt="">
        </div>
      </div>
  </div>
<!--  导航条结束-->
<!-- 主页内容 -->
 <homecontent></homecontent>
 <!-- 主页页脚 -->
  <homefooter class="home-footer"></homefooter>  
</div>    
</template>
<script>
import homecontent from  "@/views/HomePage/Homecontent"
import homefooter from  "@/views/HomePage/Homefooter"
export default {
    name:'Hometop',
    data(){
      return{
        glblogo_rt:['经纪人推广 ','新房推广','中国网络经纪人','房易通'],
        L_tabsnewslf:['首页','新房','热门活动','租房','商铺写字楼','海外地产','楼讯','房价','问答',],
        activityIndex: "",
        selecting: "selecting",
      }
    },
  methods:{
    userlogin(){
       this.$router.push({ path: "/login" });
    },
    userregister(){
       this.$router.push({path:'/login'})
    },
    switchover(index){
      this.activityIndex = index;
      switch (index) {
        case 1:
          this.$router.push({ path: "/newhouse" });
          break;
        case 2:
          this.$router.push({ path: "/hotactive" });
          break;
       case 5:
          this.$router.push({ path: "/abroadindex" });
          break;
       case 6:
          this.$router.push({ path: "/navbarcom" });
          break;
        default:
            this.$router.push({ path: "/" });
          break;
      }
    }
  },
  components:{
    homecontent,
    homefooter
  }
}
</script>

<style scoped>
.hometop{
  cursor: pointer;
}
/* 头部广告 */
.header-ad{
    width:1180px;
    height:70px;
    margin: 0 auto;
}
.header-ad img{
  width:1180px;
  height:70px;
}
/* logo部分 */
.glblogo{
 width: 1180px;
 height: 64px;
  margin: 0 auto;
  display: flex;
  line-height: 64px;
  justify-content: space-between;
}
/*左边*/
.glblogo .glblogo-lf{
  width: 180px;
  height: 64px;
}
.glblogo .glblogo-lf .logo-info{
   list-style: none;
   display: inline-block;
   text-align: center;
   color: #62AB00;
   font-family: YouYuan;
   font-weight: bolder;
   font-size: 26px;
 }
.glblogo .glblogo-lf .city-name .el-dropdown-link{
font-size: 12px;
  margin-left: 10px;
}
/*右边*/
.glblogo .glblogo-rt{
   width: 260px;
   height: 64px;
   /*background-color:  yellow;*/
 }
.glblogo .glblogo-rt span{
  color: #797979;
  text-decoration: none;
  font-size: 12px;
}
.glblogo .glblogo-rt span:hover{
color: #FF911B;
}
/* 导航条部分*/
.glbnavbar{
  width: 100%;
  height: 48px;
  background-color: #62AB00;
}
.glbnavbar .glbnavbar-content{
width: 1180px;
  height: 48px;
  margin: 0 auto;
  line-height: 48px;
  display: flex;
  justify-content: space-between;
}
/*左边*/
.glbnavbar .glbnavbar-content .Ltabsnewslf{
  width: 800px;
  height: 48px;
  display: flex;
  justify-content: space-between;
}
.glbnavbar .glbnavbar-content .Ltabsnewslf  span{
  width: 100%;
  height: 48px;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
/*切换导航栏的样式*/
.selecting {
  background-color: rgb(89, 151, 0);
}
.unselect {
  background-color: rgb(98, 171, 0);
}
.glbnavbar .glbnavbar-content .Ltabsnewslf  span:hover{
  background-color: rgb(79, 126, 1);
}
/*右边*/
.glbnavbar .glbnavbar-content .Ltabsnewsrt{
  width: 271px;
  height: 48px;
  display: flex;
  justify-content: space-between;
}
.glbnavbar .glbnavbar-content .Ltabsnewsrt .m{
  width: 107px;
  height: 48px;
}
.glbnavbar .glbnavbar-content .Ltabsnewsrt .m span{
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
}
.glbnavbar .glbnavbar-content .Ltabsnewsrt img{
  width: 110px;
  height: 27px;
  margin-top: 10px;
}
/* 导航条部分结束*/
.home-footer{
  margin-top: 200px;
}
</style>
