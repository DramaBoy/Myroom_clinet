<template>
  <div>
    <div class="album-head">
      <div class="fuceng1" v-if="flag">
        <div style="position:relative;left:1100px;color:white;font-size:30px;cursor: pointer;" @click="close">x</div>
        <div class="left">
          <img
           v-for="(item,index) in data1" :key="index" :src="item.image" v-show="item.type==index1+1&&item.order==1"
            style="width:620px;height:425px;margin:40px 20px"
            alt
          >
          <div><img style="width:99px;height:74px;margin-left:20px;" v-for="(item,index) in data1" :key="index" :src="item.image" v-show="item.type==index1+1" 
         @mouseover="mouse(index)" alt=""></div>
        </div>
        <div class="right">
          <div class="album-info album-info-tab">
            <h4 style="color:white;font-family: Arial, 'STHeiti', 'Microsoft YaHei', 'SimSun'">相册详情</h4>
            <div class="phone">
              <i class="lp-icons phone-icon"></i>
              <strong>400 015 0712</strong>
              <strong id="phone_num_image"></strong>
              <input type="hidden" value="#phone_num_image" class="replace_phone_400">
            </div>
            <div class="tab-con">
              <a hidefocus="true" href="###" :class="[this.flage1?'cur':'']" @click="become1" >
                <i class="arr-icon"></i>
                视频
              </a>
              <a hidefocus="true" href="###" :class="[this.flage2?'cur':'']" @click="become2">
                <i class="arr-icon"></i>
                楼盘图
              </a>
              <a hidefocus="true" href="###" :class="[this.flage3?'cur':'']" @click="become3">
                <i class="arr-icon"></i>
                沙盘图
              </a>
              <a hidefocus="true" href="###" :class="[this.flage4?'cur':'']" @click="become4">
                <i class="arr-icon"></i>
                样板间
              </a>
              <a hidefocus="true" href="###" :class="[this.flage5?'cur':'']" @click="become5">
                <i class="arr-icon"></i>
                位置图
              </a>
              <a hidefocus="true" href="###" :class="[this.flage6?'cur':'']" @click="become6">
                <i class="arr-icon"></i>
                配套图
              </a>
              <a hidefocus="true" href="###" :class="[this.flage7?'cur':'']" @click="become7">
                <i class="arr-icon"></i>
                售楼处
              </a>
              <a hidefocus="true" href="###" :class="[this.flage8?'cur':'']" @click="become8">
                <i class="arr-icon"></i>
                楼盘证照
              </a>
            </div>
          </div>
        </div>
      </div>

      <a class="first on" href="#">全部图片</a>
      <a v-for="(item,index) in arr" :key="index" @click="turn(index)">{{item.title}}</a>
    </div>

    <div class="album-content">
      <div class="others-pic" id="one">
        <div class="album-h">
          <a class="aa">视频</a>
        </div>
        <ul class="others-b clearfix">
          <li class="o-list" v-for="item in data1" :key="item.index" v-show="item.title=='视频'">
            <a class="o-item">
              <img @click="fuceng" width="200" height="150" :src="item.image" alt="成华奥园广场视频">
            </a>
            <a class="album-des">视频</a>
          </li>
        </ul>
      </div>

      <div class="others-pic" id="two">
        <div class="album-h">
          <a class="aa">楼盘图</a>
        </div>
        <ul class="others-b clearfix">
          <li class="o-list" v-for="item in data1" :key="item.index" v-show="item.title=='楼盘图'">
            <a class="o-item">
              <img @click="fuceng" width="200" height="150" :src="item.image" alt="成华奥园广场视频">
            </a>
            <a class="album-des">楼盘图-楼盘建筑物外景</a>
          </li>
        </ul>
      </div>

      <div class="others-pic" id="three">
        <div class="album-h">
          <a class="aa">沙盘图</a>
        </div>
        <ul class="others-b clearfix">
          <li class="o-list" v-for="item in data1" :key="item.index" v-show="item.title=='沙盘图'">
            <a class="o-item">
              <img @click="fuceng" width="200" height="150" :src="item.image" alt="成华奥园广场视频">
            </a>
            <a class="album-des">沙盘图-规划沙盘</a>
          </li>
        </ul>
      </div>

      <div class="others-pic" id="four">
        <div class="album-h">
          <a class="aa">样板间</a>
        </div>
        <ul class="others-b clearfix">
          <li class="o-list" v-for="item in data1" :key="item.index" v-show="item.title=='样板间'">
            <a class="o-item">
              <img @click="fuceng" width="200" height="150" :src="item.image" alt="成华奥园广场视频">
            </a>
            <a class="album-des">样板图-墙壁手绘</a>
          </li>
        </ul>
      </div>

      <div class="others-pic" id="five">
        <div class="album-h">
          <a class="aa">位置图</a>
        </div>
        <ul class="others-b clearfix">
          <li class="o-list" v-for="item in data1" :key="item.index" v-show="item.title=='位置图'">
            <a class="o-item">
              <img @click="fuceng" width="200" height="150" :src="item.image" alt="成华奥园广场视频">
            </a>
            <a class="album-des">位置图-区位图</a>
          </li>
        </ul>
      </div>

      <div class="others-pic" id="six">
        <div class="album-h">
          <a class="aa">配套图</a>
        </div>
        <ul class="others-b clearfix">
          <li class="o-list" v-for="item in data1" :key="item.index" v-show="item.title=='配套图'">
            <a class="o-item">
              <img @click="fuceng" width="200" height="150" :src="item.image" alt="成华奥园广场视频">
            </a>
            <a class="album-des">配套图-楼盘周边配套</a>
          </li>
        </ul>
      </div>

      <div class="others-pic" id="seven">
        <div class="album-h">
          <a class="aa">售楼处</a>
        </div>
        <ul class="others-b clearfix">
          <li class="o-list" v-for="item in data1" :key="item.index" v-show="item.title=='售楼处'">
            <a class="o-item">
              <img @click="fuceng" width="200" height="150" :src="item.image" alt="成华奥园广场视频">
            </a>
            <a class="album-des">售楼处-售楼处外景图</a>
          </li>
        </ul>
      </div>

      <div class="others-pic" id="eight">
        <div class="album-h">
          <a class="aa">楼盘证照</a>
        </div>
        <ul class="others-b clearfix">
          <li class="o-list" v-for="item in data1" :key="item.index" v-show="item.title=='楼盘证照'">
            <a class="o-item">
              <img @click="fuceng" width="200" height="150" :src="item.image" alt="成华奥园广场视频">
            </a>
            <a class="album-des">楼盘证照-预售许可证</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import net from "../tools/net";
export default {
  name: "Newphotoalbum",
  props: ["id"],
  data() {
    return {
      net: net,
      flag: false,
      arr: [
        { title: "视频" },
        { title: "楼盘图" },
        { title: "沙盘图" },
        { title: "样板间" },
        { title: "位置图" },
        { title: "配套图" },
        { title: "售楼处" },
        { title: "楼盘证照" }
      ],
      data1: {},
      flage1:true,
      flage2:false,
      flage3:false,
      flage4:false,
      flage5:false,
      flage6:false,
      flage7:false,
      flage8:false,
      index1:0
    };
  },
  created: function() {
    let that = this;
    this.net.get("image", { id: that.id }, function(res) {
      console.log(that.id);
      console.log(res.data);
      console.log(1111111111111);
      that.data1 = res.data;
      // console.log(res.data[0].image1);
      // that.data1 = res.data[0];
    });
  },
  methods: {
    fuceng: function() {
      this.flag = true;
    },
    close: function() {
      this.flag = false;
    },
    turn:function(index){
      if(index==0){
const returnEle = document.querySelector("#one");
    if (!!returnEle) {
      returnEle.scrollIntoView(true);
    }
      }
      if(index==1){
const returnEle = document.querySelector("#two");
    if (!!returnEle) {
      returnEle.scrollIntoView(true);
    }
      }
      if(index==2){
const returnEle = document.querySelector("#three");
    if (!!returnEle) {
      returnEle.scrollIntoView(true);
    }
      }
      if(index==3){
const returnEle = document.querySelector("#four");
    if (!!returnEle) {
      returnEle.scrollIntoView(true);
    }
      }
      if(index==4){
const returnEle = document.querySelector("#five");
    if (!!returnEle) {
      returnEle.scrollIntoView(true);
    }
      }
      if(index==5){
const returnEle = document.querySelector("#six");
    if (!!returnEle) {
      returnEle.scrollIntoView(true);
    }
      }
      if(index==6){
const returnEle = document.querySelector("#seven");
    if (!!returnEle) {
      returnEle.scrollIntoView(true);
    }
      }
      if(index==7){
const returnEle = document.querySelector("#eight");
    if (!!returnEle) {
      returnEle.scrollIntoView(true);
    }
      }
    },

    become1:function(){
this.flage1=true
this.flage2=false
this.flage3=false
      this.flage4=false
      this.flage5=false
      this.flage6=false
      this.flage7=false
      this.flage8=false
      this.index1=0
    },
become2:function(){
this.flage1=false
this.flage2=true
this.flage3=false
      this.flage4=false
      this.flage5=false
      this.flage6=false
      this.flage7=false
      this.flage8=false
      this.index1=1
    },
become3:function(){
this.flage1=false
this.flage2=false
this.flage3=true
      this.flage4=false
      this.flage5=false
      this.flage6=false
      this.flage7=false
      this.flage8=false
      this.index1=2
    },
    become4:function(){
this.flage1=false
this.flage2=false
this.flage3=false
      this.flage4=true
      this.flage5=false
      this.flage6=false
      this.flage7=false
      this.flage8=false
      this.index1=3
    },
    become5:function(){
this.flage1=false
this.flage2=false
this.flage3=false
      this.flage4=false
      this.flage5=true
      this.flage6=false
      this.flage7=false
      this.flage8=false
      this.index1=4
    },
    become6:function(){
this.flage1=false
this.flage2=false
this.flage3=false
      this.flage4=false
      this.flage5=false
      this.flage6=true
      this.flage7=false
      this.flage8=false
      this.index1=5
    },
    become7:function(){
this.flage1=false
this.flage2=false
this.flage3=false
      this.flage4=false
      this.flage5=false
      this.flage6=false
      this.flage7=true
      this.flage8=false
      this.index1=6
    },
    become8:function(){
this.flage1=false
this.flage2=false
this.flage3=false
      this.flage4=false
      this.flage5=false
      this.flage6=false
      this.flage7=false
      this.flage8=true
      this.index1=7
    },

  }
};
</script>
<style>
.aa {
  font-size: 20px;
  color: #333;
  font-weight: normal;
  font-family: Arial, "STHeiti", "Microsoft YaHei", "SimSun";
}
.fuceng1 {
  width: 1125px;
  height: 630px;
  z-index: 9999;
  background-color: rgba(0,0,0,0.8);
  position: absolute;
  margin: 40px 20px;
  display: flex;
}
.album-info {
  float: right;
  display: inline;
  width: 264px;
  overflow: hidden;
  padding: 0 28px 10000px 18px;
  /* margin-bottom: -10000px; */
  color: #333;
}
.album-info-tab h4,
.album-info-tab .phone {
  border-bottom: 1px dashed #e6e6e6;
  font-size: 24px;
  line-height: 24px;
  padding: 40px 0 20px;
  white-space: nowrap;
  font-weight: normal;
}
.album-info-tab .phone strong {
  font: 700 22px/22px "Arial";
  vertical-align: middle;
  font-weight: 100;
  color: #62ab00;
}
.album-info-tab .tab-con .cur {
  border: 1px solid #62ab00;
  color: #62ab00;
}
.album-info-tab .tab-con a {
  display: block;
  width: 242px;
  height: 45px;
  line-height: 45px;
  border: 1px solid #e6e6e6;
  margin: 10px 0 0;
  font-size: 16px;
  color: #999;
  padding-left: 20px;
}

.album-head {
  height: 20px;
  margin: 40px 0 20px 10px;
  color: #333;
}
.album-head .first {
  padding-left: 0;
  border-left: none;
}
.album-head .on,
.album-head a:hover {
  color: #62ab00;
}
.album-head a {
  float: left;
  font-size: 20px;
  line-height: 20px;
  padding: 0 20px;
  font-weight: 700\9;
  text-decoration: none;
  font-family: Arial, "STHeiti", "Microsoft YaHei", "SimSun";
  border-left: 1px solid #e6e6e6;
}

.album-h {
  margin: 30px 0 20px;
  height: 20px;
  line-height: 20px;
  margin-left: 27px;
}
album-h a {
  font-family: Arial, "STHeiti", "Microsoft YaHei", "SimSun";
  font-weight: normal;
  font-size: 20px;
  color: #333;
}
ul {
  list-style: none;
  color: #333;
}
.o-list {
  float: left;
  margin-left: 27px;
}
.o-list .album-des {
  width: 200px;
  display: block;
  font-size: 16px;
  color: #666;
  height: 24px;
  line-height: 24px;
  overflow: hidden;
  margin: 16px 0 11px;
  cursor: pointer;
  font-family: Arial, "STHeiti", "Microsoft YaHei", "SimSun";
}
.album-content {
  display: flex;
  flex-direction: column;
  
}
</style>

