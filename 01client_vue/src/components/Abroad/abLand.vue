<template>
  <div>
    <div class="form w">
      <!-- 位置部分 -->
      <div class="filter-item">
        <label class="item-title">国家：</label>
        <div class="item-mod">
          <span class="color-selected">全部</span>
          <a
            v-for="(item,index) in country"
            :key="item.id"
            class="single-item"
            @click="jiage(index)"
          >{{item.c}}</a>
        </div>
      </div>
     
      <!-- 价钱部分 -->
      <div class="filter-item">
        <label class="item-title">价格：</label>
        <div class="item-mod">
          <span class="color-selected">全部</span>
          <a
            v-for="(item,index) in price1"
            :key="item.id"
            class="single-item"
            @click="jiage(index)"
          >{{item.c}}</a>
        </div>
      </div>
      
      <!-- 类别部分 -->
      <div class="filter-item">
        <label class="item-title">类别：</label>
        <div class="item-mod">
          <span class="color-selected">全部</span>
          <a
            v-for="(item,index) in leibie"
            :key="item.id"
            class="single-item"
            @click="jiage(index)"
          >{{item.c}}</a>
        </div>
      </div>
      
      <!-- 特色部分 -->
      <div class="filter-item">
        <label class="item-title">特色：</label>
        <div class="item-mod">
          <span class="color-selected">全部</span>
          <a
            v-for="(item,index) in special"
            :key="item.id"
            class="single-item"
            @click="jiage(index)"
          >{{item.c}}</a>
        </div>
      </div>
      
      <!-- 物业部分 -->
      <div class="filter-item">
        <label class="item-title">物业：</label>
        <div class="item-mod">
          <span class="color-selected">全部</span>
          <a
            v-for="(item,index) in wuye"
            :key="item.id"
            class="single-item"
            @click="jiage(index)"
          >{{item.c}}</a>
        </div>
      </div>
    </div>

    <div class="sort-tab w">
      <div class="lef">
      <div class="neirong" v-for="(item,index) in data" :key="index">
        <img :src="item.image" alt="">
        <div class="mid">
          <h3>{{item.title}}</h3>
          <p>位置：{{item.address}}</p>
          <p>类型：{{item.type}}</p>
          <p>物业：{{item.wuye}}</p>
          <p>户型：{{item.huxing}}</p>
        </div>
        <div class="right">
          <p>{{item.price2}}</p>
          <p>约人民币</p>
          <p>{{item.price}}万</p>
        </div>
      </div> 
      </div>
      <ul >
        推荐房源
        <li v-for="(item,index) in data" :key="index" v-show="item.invest=='3'">
          <img :src="item.image" alt>
          <div>
            <p class="bot-name">{{item.title}}</p>
            <p class="orange">约￥{{item.price}}万元</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="w botton">
      <p>房多多全部房产网,提供全部房地产楼盘, 全部买房置业移民信息，全部房产投资等信息。后期我们将提供全部房产中介公司、精英置业顾问等信息。为您在国外购房投资移民提供便利条件。</p>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import net from "../../tools/net";
import Footer from "../Footer"
export default {
  name: "abLand",
  components:{
    Footer
  },
  data() {
    return {
      net: net,
      price1: [
        { a: 0, b: 7000, c: "50万以下" },
        { a: 7000, b: 10000, c: "50-100万" },
        { a: 10000, b: 15000, c: "100-200万" },
        { a: 15000, b: 20000, c: "200-500万" },
        {
          a: 20000,
          b: 10000000000000000000000000000000000000000000000000000000000000000000000000000000000,
          c: "500万以上"
        }
      ],
      country: [
        { a: 0, b: 7000, c: "美国" },
        { a: 7000, b: 10000, c: "泰国" },
        { a: 10000, b: 15000, c: "澳大利亚" },
        { a: 15000, b: 20000, c: "加拿大" },
        { a: 20000, b: 25000, c: "日本" },
        { a: 25000, b: 30000, c: "英国" },
        { a: 30000, b: 35000, c: "新西兰" },
        { a: 35000, b: 40000, c: "希腊" },
        {
          a: 40000,
          b: 10000000000000000000000000000000000000000000000000000000000000000000000000000000000,
          c: "法国"
        }
      ],
      leibie: [
        { a: 0, b: 7000, c: "新房" },
        { a: 7000, b: 10000, c: "二手房" },
      ],
      special: [
        { a: 0, b: 7000, c: "学区房" },
        { a: 7000, b: 10000, c: "投资房" },
        { a: 10000, b: 15000, c: "移民房" },
      ],
      wuye: [
        { a: 0, b: 7000, c: "公寓" },
        { a: 7000, b: 10000, c: "别墅" },
        { a: 10000, b: 15000, c: "酒店公寓" },
        { a: 15000, b: 20000, c: "商铺" },
        { a: 20000, b: 25000, c: "庄园" },
        { a: 25000, b: 30000, c: "土地" },
        { a: 30000, b: 35000, c: "商业地产" },
        { a: 35000, b: 40000, c: "其他" },
      ],
      id: 0,
      name: "",
      othername: "",
      flocation: "",
      location: "",
      description: "",
      price: 0,
      kaipan: "",
      type: "",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      data: {},
      
    };
  },
  created: function() {
    let that = this;
    this.net.get("getHouse2", {}, function(res) {
      console.log(res.data);
      // console.log(res.data[0].image);
      that.data = res.data;
    });
  }
 
};
</script>

<style scoped>
.botton {
  font-size: 14px;
  color: #666;
}
.botton p {
  margin-top: 100px;
}
.lef{
  display: inline-block;
  width: 870px;
  height: auto;
}
.sort-tab{
  position: relative;
}
ul {
  width: 270px;
  height: auto;
  
  position: absolute;
  right: 0px;
  top: 0px;
}
.orange {
  font-size: 20px;
  color: red;
}
li{
  background-color: #f2f2f2;
  list-style: none;
  width: 270px;
  height: 260px;
  /* border-bottom: 1px solid #666; */
  margin-bottom: 10px;
}
li img {
  width: 100%;
  height: 190px;
}
html {
  background-color:#F2F2F2;
}
.w{
  width: 1180px;
  margin: 0 auto;
}
.neirong {
  width: 870px;
  height: 200px;
  background-color: #F2F2F2;
  display: flex;
  color: #333;
  margin-bottom: 20px;
  /* display: inline-block; */
}
.neirong img {
  height: 100%;
  width: 260px;
}
.neirong .mid {
   width: 400px;
  margin: 30px;
  box-sizing: border-box;
}
.mid p {
  margin-top: 10px;
}
.right {
  color: #666;
  margin: 30px;
  box-sizing: border-box;
  margin: auto 0;
} 
.right p:first-of-type{
  font-size: 20px;
}
.right p:last-of-type{
  color: red;
  font-size: 26px;
}
.form {
  width: 1180px;
  height: 200px;
  border: 1px solid #ddd;
  background-color: #fff;
}
.houselist:hover {
  background-color: rgb(249, 249, 249);
}
.filter1 {
  width: 1000px;
}
.form .location,
.filter-item {
  display: flex;
  width: 1137px;
}
.item-title {
  margin-top: 15px;
  margin-left: 15px;
  width: 52px;
}
.item-tab {
  display: inline-block;
  width: 80px;
  margin-left: 10px;
  margin-top: 15px;
  font-size: 14px;
  text-decoration: none;
  color: #333;
}

.item-tab:hover {
  color: #f60;
}
.line {
  border: 1px dashed #ddd;
  margin-top: 10px;
}
.curr-area,
.color-selected {
  width: 20px;
  font: 14px Arial, "Microsoft YaHei", "Hiragino Sans GB", "STHeiti", SimSun;
  color: #f60;
  margin-top: 15px;
  margin-left: 10px;
  cursor: pointer;
}
.select-item,
.single-item,
.multi-item {
  display: inline-block;
  font: 14px Arial, "Microsoft YaHei", "Hiragino Sans GB", "STHeiti", SimSun;
  color: #333;
  margin-top: 15px;
  margin-left: 10px;
  text-decoration: none;
}

.select-item:hover,
.single-item:hover,
.multi-item:hover {
  color: #f60;
  cursor: pointer;
}
.status1,
.status2,
.status3,
.status4 {
  width: 110px;
  height: 32px;
  border: 1px solid #ddd;
  margin-left: 15px;
  text-align: center;
  margin-bottom: 15px;
}
.el-dropdown-link {
  line-height: 32px;
}

a {
  text-decoration: none;
}
a:hover {
  color: #f60;
}
.blank {
  height: 20px;
  width: 1180px;
  border-top: 1px solid #ddd;
}
.sort-tab {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}
.highlight {
  background-color: #62ab00;
  float: left;
  line-height: 38px;
  padding: 0 20px;
  border-top: 1px solid #e6e6e6;
  text-decoration: none;
  color: #fff;
}

.houselist {
  display: flex;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  padding-bottom: 20px;
}

.housepic {
  width: 180px;
  height: 135px;
  top: 10px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
.items-name a {
  padding-left: 15px;
  color: #333;
  font-size: 20px;
  cursor: pointer;
}
.jian-icon {
  display: inline-block;
  width: 14px;
  height: 14px;
  line-height: 14px;
  padding: 1px 0 0 1px;
  font-size: 14px;
  text-align: center;
  vertical-align: middle;
  color: #f46520;
  border: solid 1px #f46520;
  font-style: normal;
}
.list-map {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666;
  line-height: 22px;
}
.huxing {
  color: #666;
  line-height: 22px;
  cursor: pointer;
  font-size: 14px;
  padding-left: 15px;
}
.tag-panel {
  padding-left: 15px;
}
.status-icon {
  cursor: pointer;
  color: #799374;
  background: #f2f6ed;
  padding: 1px 4px;
  font-size: 14px;
  margin-right: 5px;
  vertical-align: middle;
  font-style: normal;
}
.tag {
  display: inline-block;
  color: #999;
  background: #f8f8f8;
  padding: 1px 4px;
  text-align: center;
  margin-right: 6px;
  vertical-align: top;
  font-size: 14px;
}
.active-left {
  padding-left: 15px;
}
.qiang {
  background-color: #f46520;
  float: left;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  font-family: "SimHei";
  color: #fff;
  border-radius: 3px;
  margin-right: 5px;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  font-style: normal;
}
.soj {
  color: #666;
  cursor: pointer;
  line-height: 22px;
  font-size: 14px;
}
</style>


