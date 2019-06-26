<template>
    <div class="Homefooter">
    <div class="lounewsfoot-content">
    <!-- 楼讯底部公共样式 -->
    <div class="lounewsfoot">
      <!-- 推荐城市开始 -->
      <div class="city-content">
        <label for>推荐城市咨询</label>
        <div class="city-list">
          <span v-for="(citys,index) in citylist" :key="index">{{citys}}</span>
        </div>
      </div>
      <!-- 推荐城市结束 -->
      <!-- 推荐城市结束! -->
      <!-- 更多内容推荐开始 -->
      <div class="info-item-more">
        <label>更多内容推荐</label>
        <div class="info-item-mod">
          <span v-for="(citymores,index) in citymore" :key="index">{{citymores}}</span>
        </div>
      </div>
      <!-- 更多内容推荐结束 -->
      <div
        class="avoid-blame"
      >免责声明：本站旨在为广大用户提供更多信息服务，不声明或保证所提供信息的准确性和完整性。页面所载内容及数据仅供用户参考和借鉴，最终以开发商实际公示为准，用户因参照本站信息进行相关交易所造成的任何后果与本站无关。如楼盘信息有误，您可以投诉或拨打举报电话：400-620-6688</div>
    </div>
    <div class="footer-bottom">
      <ul class="w">
        <li v-for="(item,index) in data1" :key="index">
          <a href>{{item}}</a>
        </li>
      </ul>
      <ul>
        <li v-for="item in data2" :key="item">
          <a href>{{item}}</a>
        </li>
      </ul>
  </div>
    </div>
           <!-- 页脚警示图标 -->
        <div class="footer-a">
  <a  target="_blank" rel="nofollow" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502002124">
            <img width="20" height="20" src="https://pages.anjukestatic.com/usersite/site/img/icon/beianbgs.png">
            沪公网安备 31011502002124号
</a>
  </div>
  <div class="footer-bottomx">
            <img src="https://pages.anjukestatic.com/usersite/site/img/home/1/jubao_logo.png" alt="">
            <img src="https://pages.anjukestatic.com/usersite/site/img/icon/gongshang_125x60.png" alt="">
            <img src="https://pages.anjukestatic.com/usersite/site/img/icon/police_110x60.png" alt="">
            <img src="https://pages.anjukestatic.com/usersite/site/img/home/1/cnnic.png" alt="">
  </div>
</div>
</template>
<script>
export default {
    name:"Homefooter",
    data () {
        return {
             citylist: [
        "青岛楼市资讯",
        "包头楼市资讯",
        "北海楼市资讯 ",
        "北京楼市资讯",
        "成都楼市资讯",
        "大连楼市资讯",
        "东莞楼市资讯",
        "佛山楼市资讯",
        "福州楼市资讯",
        "广州楼市资讯",
        "贵阳楼市资讯",
        "桂林楼市资讯",
        "哈尔滨楼市资讯",
        "海口楼市资讯",
        "杭州楼市资讯",
        "合肥楼市资讯",
        "惠州楼市资讯",
        "济南楼市资讯",
        "江门楼市资讯",
        "昆明楼市资讯",
        "昆山楼市资讯",
        "兰州楼市资讯",
        "廊坊楼市资讯",
        "洛阳楼市资讯",
        "南昌楼市资讯",
        "南京楼市资讯",
        "南宁楼市资讯",
        "南通楼市资讯",
        "三亚楼市资讯",
        "厦门楼市资讯",
        "上海楼市资讯",
        "深圳楼市资讯",
        "沈阳楼市资讯",
        "苏州楼市资讯",
        "太仓楼市资讯",
        "太原楼市资讯",
        "泰州楼市资讯",
        "天津楼市资讯",
        "潍坊楼市资讯",
        "武汉楼市资讯",
        "西安楼市资讯",
        "烟台楼市资讯",
        "扬州楼市资讯",
        "长春楼市资讯",
        "长沙楼市资讯",
        "郑州楼市资讯",
        "珠海楼市资讯",
        "无锡楼市资讯",
        "石家庄楼市资讯"
      ],
      citymore: [
        "成都公积金",
        "成都新房装修",
        "成都房产法律",
        "成都购房知识",
        "成都房屋贷款",
        "成都家居家饰"
      ],
      data1: [
        "关于安居客",
        "|",
        "联系我们",
        "|",
        "用户协议",
        "|",
        "房贷计算器",
        "|",
        "最新问答",
        "|",
        "网站地图",
        "|",
        "最新房源",
        "|",
        "其他城市",
        "|",
        "友情链接",
        "|",
        "放心搜",
        "|",
        "推广服务",
        "|",
        "渠道招商",
        "|",
        "58车"
      ],
      data2: [
        "客户服务中心",
        "违法信息举报： 4006209008 ",
        "service@58.com",
        "Copyright © 2007-2019 www.anjuke.com All Rights Reserved",
        "ICP号：沪 B2-20090008"
      ]
        }
    }
}
</script>
<style scoped>
.lounewsfoot {
  width: 1180px;
  height: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #e0e0e0;
}
.lounewsfoot .city-content {
  width: 1180px;
  height: 164px;
  display: flex;
  justify-content: space-around;
}
.lounewsfoot .city-content label {
  width: 96px;
  height: 20px;
}

.lounewsfoot .city-list {
  width: 1070px;
  height: 154px;
  display: flex;
  flex-wrap: wrap;
  justify-content: safe;
}
.lounewsfoot .city-list span {
  width: 98px;
  height: 20px;
  color: #999;
  padding-left: 8px;
  font-size: 14px;
  cursor: pointer;
}
.lounewsfoot .info-item-more {
  width: 1180px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.lounewsfoot .info-item-more label {
  width: 96px;
  height: 20px;
}
.lounewsfoot .info-item-more .info-item-mod {
  width: 1072px;
  height: 30px;
}
.lounewsfoot .info-item-more span {
  width: 98px;
  height: 20px;
  color: #999;
  padding-left: 8px;
  font-size: 14px;
  cursor: pointer;
}
.lounewsfoot .avoid-blame {
  background-color: #f7f7f7;
  color: #999;
  margin: 30px auto 20px;
  width: auto;
  padding: 12px 35px 12px 35px;
  text-align: left;
  font-size: 12px;
}
/* 页脚最底部信息 */
.footer-bottom {
  width: 980px;
  height: 100px;
  margin: 10px auto;
  /* background-color: green; */
}
.footer-bottom .w li:first-of-type {
  padding-left: 12px;
}
.footer-bottom li {
  list-style: none;
  display: inline-block;
  padding: 0px 4px;
}
.footer-bottom a {
  color: #333;
  font-size: 12px;
  text-decoration: none;
}
 /*页脚警示图标  */
.footer-a{
   width: 200px;
   height: 20px;     
   margin: -58px auto;
   cursor: pointer; 
} 
.footer-a a{
  color: #666;
   text-decoration: none;
   display: inline-block;
   font-size: 12px;
}
.footer-bottomx{
width: 600px;
height: 62px;
/* background-color: pink; */
margin: 70px auto;
display: flex;
justify-content: space-between;
cursor: pointer;
}
.footer-bottomx img{
    width: 125px;
    height: 60px;
    border: solid 1px #ccc;
}
</style>


