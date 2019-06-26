<template>
  <div class="daogou">
    <!-- 内容展示区域 -->
    <div class="layout">
      <!-- 左边内容开始 -->
      <div class="l-col-left clearfix">
   <!-- 盒子内容开始 -->
        <div class="main-box" v-for="(daogous,index) in this.arr1" :key='index'>
          <img
            :src="daogous.imgurl"
            alt
          >
          <div class="item-title-wrap">
            <h3>
              <a href="#" target="_blank" class="item-title-good">{{daogous.headline}}</a>
            </h3>
            <a
              href="#"
              target="_blank"
              class="item-des"
              soj="leading_toutiao_view"
            >{{daogous.content}}</a>
            <div class="info clearfix">
              <em>类型：楼评</em>
              <em class="v-line">作者：{{daogous.author}}</em>
              <em class="info__time">{{daogous.data}}</em>
            </div>
          </div>
        </div>
        <!-- 盒子内容结束 -->
      </div>
      <!--  左边内容结束 -->
      <!-- 右边内容开始 -->
      <div class="l-col-right clearfix">
        <div class="pro-test-wrap">
          <h3>专业评测</h3>
        </div>
        <div class="lp-common-wrap">
          <h3>楼盘点评</h3>
          <!-- 11 -->
          <div class="common-item">
            <img
              src="https://pic4.ajkimg.com/display/xinfang/58f9cd50efab7282151542f7d33ceb20/180x135m.jpg"
              alt
            >
            <div class="comment-mydescribe">
              <div class="item-title">[龙泉驿]-寰宇君汇城</div>
              <div class="comment-price-jun">均价7500元/㎡</div>
              <div class="comment-num-shu">
                <i class="el-icon-position"></i> 163人点评
              </div>
            </div>
          </div>
          <!-- 22 -->
          <div class="common-item">
            <img
              src="https://pic4.ajkimg.com/display/xinfang/2a3b7433abb048099ab16644fb864fa2/180x135m.jpg"
              alt
            >
            <div class="comment-mydescribe">
              <div class="item-title">[龙泉驿]-林溪康城</div>
              <div class="comment-price-jun">均价7300元/㎡</div>
              <div class="comment-num-shu">
                <i class="el-icon-position"></i> 338人点评
              </div>
            </div>
          </div>
          <!-- 33 -->
          <div class="common-item">
            <img
              src="https://pic4.ajkimg.com/display/xinfang/ed091ee53e329dad3bac1b525ca73a8f/180x135m.jpg"
              alt
            >
            <div class="comment-mydescribe">
              <div class="item-title">[龙泉驿]-禹鑫天赋龙庭</div>
              <div class="comment-price-jun">均价7300元/㎡</div>
              <div class="comment-num-shu">
                <i class="el-icon-position"></i> 15人点评
              </div>
            </div>
          </div>
          <!-- 44 -->
          <div class="common-item">
            <img
              src="https://pic4.ajkimg.com/display/xinfang/24ae27bec6b9ce133a98a266bd699992/180x135m.jpg"
              alt
            >
            <div class="comment-mydescribe">
              <div class="item-title">[温江]- 中铁城温江阅湖和庭</div>
              <div class="comment-price-jun">均价6643元/㎡</div>
              <div class="comment-num-shu">
                <i class="el-icon-position"></i> 183人点评
              </div>
            </div>
          </div>
          <!-- 55 -->
          <div class="common-item">
            <img
              src="https://pic4.ajkimg.com/display/xinfang/a81e0417ebd30618f09eafad6fd0b523/180x135m.jpg"
              alt
            >
            <div class="comment-mydescribe">
              <div class="item-title">[新都]-俊发滨河俊园</div>
              <div class="comment-price-jun">均价6288元/㎡</div>
              <div class="comment-num-shu">
                <i class="el-icon-position"></i> 100人点评
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右边内容结束 -->
    </div>
    <!-- 内容展示区域 结束-->
    <div class="btn-more">
      <!-- <a href="#" class="loading-more">
        <span class="loading-tip">加载更多</span>
      </a> -->
    </div>
    <!-- 页脚底部开始-->
    <Lounewsfoot></Lounewsfoot>
    <!-- 页脚底部结束 -->
  </div>
</template>
<script>
import Lounewsfoot from "@/components/lounews/Lounewsfoot.vue";
import net from "@/tools/net.js"
export default {
  name: "Daogou",
  data () {
    return {
      net:net,
      arr1:[],  
    }
  },
 created () {
     let that = this;
    this.net.get('Daogou',{},
    function (Daogoudata){
      that.arr1=Daogoudata.data
      //  console.log(Daogoudata,that.arr1);
    });
  },
  components: {
    Lounewsfoot
  }
};
</script>
<style scoped>
a {
  outline: 0;
  text-decoration: none;
}
i {
  font-style: normal;
}
em {
  font-style: normal;
}
/* 内容展示区域开始 */
.layout {
  width: 1180px;
  height: 100%;
  margin: 160px auto;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}
/* 左边区域 */
.layout .l-col-left {
  width: 838px;
  height: 100%;
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* 第一种样式 */
.layout .l-col-left .main-box {
  width: 838px;
  height: 181px;
  /* background-color: royalblue; */
  display: flex;
  justify-content: space-between;
}
.layout .l-col-left .main-box:hover{
  background-color: #F8F8F8;
  cursor: pointer;
}
.layout .l-col-left .main-box  .v-line{
  margin-left: 10px;
}
.layout .l-col-left .main-box .info__time{
  margin-left: 18px;
}
.layout .l-col-left .main-box .item-title-wrap {
  width: 600px;
  height: 140px;
  /* background-color: aqua; */
  margin-top: 20px;
  line-height: 30px;
}
.layout .l-col-left .main-box .item-title-wrap .info {
  color: #666;
  font-size: 14px;
  margin: 12px 0 23px 0;
  max-height: 50px;
  overflow: hidden;
}
.layout .l-col-left .main-box .item-title-wrap .info i {
  float: right;
}
.layout .l-col-left .main-box .item-title-wrap h3 a {
  color: #333;
  line-height: 30px;
  font-size: 20px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.layout .l-col-left .main-box .item-title-wrap a {
  margin-top: 10px;
  color: #666;
  font-size: 14px;
  margin: 12px 0 23px 0;
  max-height: 50px;
  overflow: hidden;
}
.layout .l-col-left .main-box .item-title-wrap a:hover {
  color: #f60;
}
.layout .l-col-left .main-box img {
  width: 200px;
  height: 140px;
  float: left;
  margin-top: 20px;
}
.layout .l-col-left .img1 {
  width: 838px;
  height: 181px;
  background-color: red;
}
/* 右边区域 */
.layout .l-col-right {
  width: 322px;
  height: 520px;
  margin-top: 0px;
}
.layout .l-col-right .pro-test-wrap {
  padding-top: 20px;
  border: 1px solid #ededed;
}
.layout .l-col-right .pro-test-wrap h3 {
  font-size: 20px;
  color: #333;
  padding: 0 20px;
  margin-bottom: -5px;
  background: #fff;
  position: relative;
  z-index: 33;
}
/* 内容展示大盒子 */
.layout .l-col-right .lp-common-wrap {
  width: 322px;
  height: 521px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: #ededed 1px solid;
  margin-top: 20px;
}
.layout .l-col-right .lp-common-wrap h3 {
  font-size: 20px;
  color: #333;
  padding: 0 20px;
  margin-bottom: -5px;
  background: #fff;
  position: relative;
  z-index: 33;
  margin-top: 20px;
}
.layout .l-col-right .lp-common-wrap .common-item {
  width: 322px;
  height: 91px;
  display: flex;
  justify-content: space-around;
}
.layout .l-col-right .lp-common-wrap .common-item:hover {
    background-color: #F8F8F8;
  cursor: pointer;
}
.layout .l-col-right .lp-common-wrap .common-item img {
  width: 100px;
  height: 76px;
  margin-top: 10px;
}
.layout .l-col-right .lp-common-wrap .common-item .comment-mydescribe {
  width: 170px;
  height: 50px;
  margin-top: 10px;
}
.layout
  .l-col-right
  .lp-common-wrap
  .common-item
  .comment-mydescribe
  .item-title:hover {
  color: #f60;
}
.layout
  .l-col-right
  .lp-common-wrap
  .common-item
  .comment-mydescribe
  .item-title {
  color: #333;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.layout
  .l-col-right
  .lp-common-wrap
  .common-item
  .comment-mydescribe
  .comment-price-jun {
  color: #333;
  font-size: 14px;
}
.layout
  .l-col-right
  .lp-common-wrap
  .common-item
  .comment-mydescribe
  .el-icon-position {
  color: #333;
  font-size: 14px;
}
/* 内容展示区域结束 */
/* 加载更多按钮 */
.btn-more {
  width: 838px;
  height: 45px;
  /* background-color: pink; */
  margin: 130px auto;
  margin-left: 170px;
}

.btn-more .loading-more {
  display: block;
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: #f6f6f6;
  font-size: 16px;
  color: #666;
  margin: 40px 0 25px 0;
  text-align: center;
  position: relative;
  transition: transform 2s;
}
</style>


