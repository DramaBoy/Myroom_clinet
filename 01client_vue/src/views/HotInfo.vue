<template>
  <div>
    <br>
    <div>
      <div class="block">
        <el-carousel trigger="click" height="450px" ref="carousel" interval='10000'>
            <el-carousel-item v-for="(item,index) in imgs" :key="index">
                <img :src="item.url" alt="" @click="setActiveItem(index)">
            </el-carousel-item>
        </el-carousel>
      </div>
      <div class="info" v-for="(item,index) in arr" :key="index">
        <p class="info-title">{{item.firsttitle}}</p>
        <p class="bieming">{{item.bieming}}</p>
        <p class="info-com"><em>价格</em>{{item.price}}</p>
        <p class="info-com"><em>开盘</em>{{item.kaipan_time}}</p>
        <p class="info-com"><em>交房</em>{{item.jiaofang_time}}</p>
        <p class="info-com"><em>户型</em>{{item.huxing}}</p>
        <p class="address"><em>地址</em>{{item.address}}</p>
        <div class="telephone">
          <div class="teleinfo">
            <i class="el-icon-phone telicon"></i>
            <span class="telenum">{{item.telephone}}</span>
            <span class="calling">致电售楼处</span>
          </div>
          <p>安全通话隐藏真实号码，致电售楼处了解更多信息</p>
        </div>
      </div>
    </div>
    <div class="imgs">
      <div v-for="(item,index) in imgs" :key="index" class="small-img" @click="setActiveItem(index)">
        <span>{{item.des}}</span>
        <img :src="item.url" alt="">
      </div>
    </div>
    <div>
      <p class="com-title">楼盘动态</p>
      <div class="dongtai-info">
        {{arr[0].info}}
      </div>
    </div>
    <div>
      <p class="com-title">用户点评</p>
      <div class="dongtai-info">
        <p class="comments" @click="dianping">我要点评</p>
      </div>
    </div>
  </div>
</template>

<script>
import net from "../tools/net";
export default {
  name:"Hotactive",
    data: function() {
    return {
      net:net,
      hotid:'',
      arr:[],
      imgs:[]
    };
  },
  components: {
  },
  mounted: function() {
    this.hotid = this.$route.query.hotid;
    let that =this;
    this.net.post(
        "hotinfo",{
            hotid:that.hotid
        },
        function(res) {
          console.log(res.data.data); 
          that.arr=res.data.data;
          that.imgs=res.data.data[0].imgs    
        }
      );
    },     
  methods: {
    setActiveItem(index){
      this.$refs.carousel.setActiveItem(index)
    },
    dianping(){
      this.$router.push({path:'/comments',
      query: { hotid: this.hotid}})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block{
    width: 600px;
    display:inline-block;
}
.block img{
    width: 600px;
    height:450px;
}
.info {
  display: inline-block;
  height:450px;
  width:250px;
  margin-left:30px;
}
.info-title {
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 15px;
    margin-top: 10px;
    color: #333;
    font-weight: bold;
}
.bieming{
    font-size: 14px;
    color: #999;
    line-height: 14px;
    margin-bottom: 15px;
}
.info-com {
    display: inline-block;
    font-size: 18px;
    color:#333;
    line-height: 18px;
    margin-bottom: 23px;
    width: 520px;
}
.info-com em{
  font-style:normal;
  color: #666;
  margin-right: 20px;
}
.address {
    display: inline-block;
    font-size: 18px;
    color:#1f64b2;
    line-height: 18px;
    margin-bottom: 23px;
    width: 520px;
}
.address em{
  font-style:normal;
  color: #666;
  margin-right: 20px;
}
.telephone{
    position: relative;
    bottom: 0;
    left: 0;
    width: 520px;
    overflow: hidden;
    background-color: #f7fded;
    color: #62ab00;
    clear: both;
    zoom: 1;
    margin-top: 20px;
    padding: 20px 15px;
}
.teleinfo .telenum{
    height: 35px;
    line-height: 35px;
    color: #62ab00;
    font-size: 35px;
    font-weight: bold;
}
.telicon{
    height: 35px;
    line-height: 35px;
    color: #62ab00;
    font-size: 35px;
    font-weight: bold;
}
.calling {
    position: relative;
    left:30px;
    top:-8px;
    display: inline-block;
    height:35px;
    line-height: 35px;
    font-size: 15px;
    cursor: pointer;
    color: #FFF;
    background: #62ab00;
    margin-left:30px;
    padding:0 10px;
}
.small-img{
  height:63px;
  width:88px;
  position: relative;
  display: inline-block;
  margin-right: 10px;
}
.small-img img{
  height:63px;
  width:88px;
  position:absolute;
}
.small-img span{
  position:absolute;
  top:39px;
  height:24px;
  width:88px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
  text-align: center;
}
.com-title{
    margin-top: 30px;
    font-size: 20px;
    line-height: 20px;
    font-weight: 800;
}
.dongtai-info{
    padding: 10px 20px;;
    border: 1px solid #e6e6e6;
    border-radius: 0;
    margin-top: 10px;
    font-size: 16px;
    text-indent: 32px;
    line-height: 26px;
}
.comments{
    margin:0 auto;
    display: block;
    text-decoration: none;
    width: 130px;
    height: 40px;
    line-height: 40px;
    background-color: #62ab00;
    color: #fff;
}
</style>