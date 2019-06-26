<template>
  <div class="hello">
    <Header1/>
    <img
      src="https://pic4.ajkimg.com/display/xinfang/f6d1e20b05abfc86756e6d47f0e81545/1180x160n.jpg"
    >
    <div class="nav1">
      <ul>
        <li v-for="(item,index) in arr1" :key="index" @click="ju(index)">{{item.title}}</li>
      </ul>
    </div>

<Newphotoalbum v-if="xiangce" :id="id"/>

<div v-if="shouye">
    <div class="father">
      <div class="xiangqing">
        <img class="big" v-if="flag1" :src="data1.image1" alt>
        <img class="big" v-if="flag2" :src="data1.image2" alt>
        <img class="big" v-if="flag3" :src="data1.image3" alt>
        <img class="big" v-if="flag4" :src="data1.image4" alt>
        <img class="big" v-if="flag5" :src="data1.image5" alt>
        <img class="big" v-if="flag6" :src="data1.image6" alt>
      </div>

      <div class="basic-parms-wrap">
        <div class="clearfix">
          <div class="basic-info">
            <h1>{{data1.name}}</h1>
            <p class="lp-alias g-overflow">别名：{{data1.othername}}</p>
            <div class="tags">
              <a class="lp-type">{{data1.type}}</a>
              <!-- 售卖状态：待售/在售/售罄分别判断对应相应class -->
              <a class="on-sale">{{data1.description}}</a>
              <a>品牌旺铺</a>
              <a>项目在建</a>
              <a>一环内</a>
              <a>医院</a>
              <a>学校</a>
            </div>
          </div>
          <br>
          <div class="wchar-qr"></div>
        </div>
        <dl class="basic-parms clearfix">
          <div class="pailie">
            <dt>价格</dt>
            <dd class="price">
              <p>
                <em class="sp-price other-price">{{data1.price}}</em>
                <span>元/㎡起</span>
                <a class="subscribe-link showlink notice-link toright">
                  <i class="iconfont lp-icons-notice"></i>变价通知我
                </a>
              </p>
            </dd>
          </div>
          <div class="pailie">
            <dt>开盘</dt>
            <dd>
              <span>{{data1.kaipai}}</span>
              <a class="showlink subscribe-link toright">
                <i class="iconfont lp-icons-open"></i>开盘通知我
              </a>
            </dd>
          </div>
          <div class="pailie">
            <dt>交房</dt>
            <dd>
              <span style="color:#333">7#商铺2020年12月交付</span>
            </dd>
          </div>
          <div class="pailie">
            <dt class="last-line">地址</dt>
            <dd class="last-line g-overflow">
              <a
                class="lpAddr-text g-overflow"
                target="_blank"
                style="color: #1f64b2"
              >[ {{data1.flocation}} ] {{data1.location}}</a>
              <a class="showlink toright addr-map" target="_blank">
                <i class="iconfont lp-icons-map"></i>查看地图
              </a>
            </dd>
          </div>
        </dl>

        <div
          class="basic-tel"
          data-phone="{&quot;hasPhone&quot;:&quot;0&quot;,&quot;soj&quot;:&quot;click_ld_lpsy_callbottom&quot;,&quot;isShow&quot;:&quot;1&quot;,&quot;params&quot;:{&quot;loupanId&quot;:&quot;435586&quot;}}"
        >
          <i class="iconfont lp-icons-tel icon-ea65"></i>
          <div class="tel-box glance-mod" id="phone_show_soj">
            <p class="tel clearfix">
              <strong class="last-strong">400 000 8343</strong>
              <a href="javascript:" class="btn btn-a make-freecall2" id="j-btn-mfth" style>致电售楼处</a>
              <a href="javascript:" class="btn btn-a" id="j-btn-ljth" style="display: none;">立即通话</a>
              <a href="javascript:" class="btn btn-a" id="j-btn-yyhd" style="display: none;">预约回电</a>
            </p>
          </div>
          <br>
          <br>
          <div class="tel-tip" style="display:block">安全通话隐藏真实号码，致电售楼处了解更多信息</div>
        </div>
      </div>
    </div>

    <div class="small">
      <div class="smallpic">
        <img @mouseover="img1" :src="data1.image1" alt>
      </div>
      <div class="smallpic">
        <img @mouseover="img2" :src="data1.image2" alt>
      </div>
      <div class="smallpic">
        <img @mouseover="img3" :src="data1.image3" alt>
      </div>
      <div class="smallpic">
        <img @mouseover="img4" :src="data1.image4" alt>
      </div>
      <div class="smallpic">
        <img @mouseover="img5" :src="data1.image5" alt>
      </div>
      <div class="smallpic">
        <img @mouseover="img6" :src="data1.image6" alt>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import net from "../tools/net";
import Header1 from "../components/Header-1";
import Newphotoalbum from "../components/Newphotoalbum";
export default {
  name: "Kownmore",
  data() {
    return {
      net: net,
      id: 0,
      flag1: true,
      flag2: false,
      flag3: false,
      flag4: false,
      flag5: false,
      flag6: false,
      arr1: [
        { title: "楼盘首页" },
        { title: "楼盘相册" },
        { title: "楼盘动态" },
        { title: "楼盘户型" },
        { title: "楼盘房源" }
      ],
      data1: {},
      shouye:true,
      xiangce:false
    };
  },
  components: {
    Header1,
    Newphotoalbum
  },
  created: function() {
    this.id = this.$route.query.id;
    console.log("more~id=" + this.$route.query.id);
    let that = this;
    this.net.get("more", { id: that.id }, function(res) {
      console.log(res.data);
      console.log(res.data[0].image1);
      that.data1 = res.data[0];
    });
    
  },
  methods: {
    ju:function(index){
      if(index==0){
this.shouye=true
this.xiangce=false
      }
      if(index==1){
this.shouye=false
this.xiangce=true
      }
    },
    img1: function() {
      this.flag1 = true,
        this.flag2 = false,
        this.flag3 = false,
        this.flag4 = false,
        this.flag5 = false,
        this.flag6 = false;
    },
    img2: function() {
      this.flag1 = false,
        this.flag2 = true,
        this.flag3 = false
        this.flag4 = false,
        this.flag5 = false,
        this.flag6 = false;
    },
    img3: function() {
      this.flag1 = false,
        this.flag2 = false,
        this.flag3 = true,
        this.flag4 = false,
        this.flag5 = false,
        this.flag6 = false;
    },
    img4: function() {
      this.flag1 = false,
        this.flag2 = false,
        this.flag3 = false,
        this.flag4 = true,
        this.flag5 = false,
        this.flag6 = false;
    },
    img5: function() {
      this.flag1 = false,
        this.flag2 = false,
        this.flag3 = false,
        this.flag4 = false,
        this.flag5 = true,
        this.flag6 = false;
    },
    img6: function() {
      this.flag1 = false,
        this.flag2 = false,
        this.flag3 = false,
        this.flag4 = false,
        this.flag5 = false,
        this.flag6 = true;
    },
     jump(id) {
      console.log("id="+id)
      this.$router.push({
        path:"/knowmore",
        query:{id:id}
        })
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 1180px;
  height: auto;
  margin: 0 auto;
}

.nav1 {
  list-style: none;
  line-height: 40px;
  font-family: Arial, "Microsoft YaHei", "Hiragino Sans GB", "STHeiti", SimSun;
  font-size: 16px;
  background: #62ab00;
  height: 40px;
  margin-top: 10px;
}

.nav1 ul {
  display: flex;
}
.nav1 li {
  list-style: none;
  color: #fff;
  padding: 0 19px 0 20px;
  font-size: 16px;
}
.nav1 li:hover {
  background-color: rgb(89, 151, 0);
}
.father {
  display: flex;
  height: 480px;
}

.xiangqing {
  margin-top: 20px;
}

.xiangqing .big {
  width: 600px;
  height: 450px;
}
.basic-parms-wrap {
  margin-left: 30px;
  margin-top: 10px;
}

.basic-parms-wrap h1 {
  font-size: 30px;
  line-height: 30px;
  margin-bottom: 15px;
  margin-top: 10px;
  color: #333;
  font-weight: bold;
}
.basic-parms-wrap .lp-alias {
  font-size: 14px;
  color: #999;
  line-height: 14px;
  margin-bottom: 15px;
}
.tags {
  height: 20px;
  overflow: hidden;
  zoom: 1;
  margin-bottom: 15px;
  word-break: break-word;
  font-size: 16px;
}
.tags .lp-type {
  background-color: #f0f4f8;
  color: #6783ae;
}
.tags a {
  display: inline;
  float: left;
  padding: 0 5px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #999;
  background-color: #f8f8f8;
  margin-right: 5px;
  white-space: nowrap;
  cursor: default;
}
.basic-parms dt {
  width: 52px;
  color: #666;
  clear: left;
}
.basic-parms .price {
  margin-top: -1px;
}
.basic-parms dd {
  width: 490px;
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
  float: left;
  font-size: 16px;
  line-height: 20px;
  display: block;
  margin-inline-start: 40px;
}

.pailie {
  display: flex;
  margin-bottom: 20px;
}
.basic-parms .price .sp-price {
  font-size: 20px;
  vertical-align: -2px;
  color: #f60;
  margin: 0 5px;
  font-style: normal;
  line-height: 20px;
}
.basic-parms .price span {
  font-size: 16px;
  color: #666;
  line-height: 20px;
}
a {
  outline: 0;
  text-decoration: none;
  cursor: pointer;
}
.showlink {
  display: inline-block;
  color: #999;
  font-size: 14px;
}
.small {
  width: 600px;
  height: 80px;
  display: flex;
  justify-content: space-between;
}

.smallpic img {
  width: 90px;
  height: 65px;
}
.basic-tel {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 520px;
  overflow: hidden;
  background-color: #f7fded;
  color: #62ab00;
  clear: both;
  zoom: 1;
  padding: 20px 15px;
  display: block;
  font-size: 16px;
  clear: both;
  margin-left: 750px;
  margin-bottom: -180px;
}
.basic-tel .lp-icons-tel {
  width: 25px;
  height: 29px;
  float: left;
  font-size: 25px;
}
.basic-tel .glance-mod {
  height: 35px;
  line-height: 35px;
}
.tel-box {
  float: left;
}
.basic-tel .tel {
  font-size: 16px;
  height: 54px;
  color: #62ab00;
}
.basic-tel .tel .last-strong {
  margin-right: 20px;
}
.basic-tel .glance-mod strong,
.basic-tel .glance-mod .btn,
.basic-tel .glance-mod .turn {
  float: left;
  display: inline;
}
.basic-tel .tel strong {
  height: 35px;
  line-height: 35px;
  color: #62ab00;
  font-size: 35px;
  font-weight: bold;
}
.basic-tel .tel a {
  border-radius: 0;
  font-size: 15px;
}
.btn-a {
  padding: 0 9px 0 10px;
  height: 30px;
  line-height: 30px;
}
.btn {
  display: inline-block;
  border: 0 none;
  cursor: pointer;
  vertical-align: middle;
  color: #fff;
  overflow: hidden;
  background: #62ab00;
}
.btn-a {
  padding: 0 9px 0 10px;
  height: 30px;
  line-height: 30px;
}
.btn {
  border: 0 none;
  cursor: pointer;
  vertical-align: middle;
  color: #fff;
  overflow: hidden;
  background: #62ab00;
}
.tel-tip {
  display: block;
}
</style>
