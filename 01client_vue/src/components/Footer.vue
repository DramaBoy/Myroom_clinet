<template>
  <div>
    <div class="footer-bottom">
    <ul class="w">
      <li v-for="(item,index) in data1" :key='index'>
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
</template>

<script>
export default {
  name: "Footer",
  data: function() {
    return {
      data1: [
        "关于安居客","|","联系我们","|","用户协议","|", "房贷计算器","|","最新问答","|","网站地图","|","最新房源","|","其他城市","|","友情链接","|","放心搜","|", "推广服务","|","渠道招商","|", "58车"
      ],
      data2:["客户服务中心","违法信息举报： 4006209008 ","service@58.com","Copyright © 2007-2019 www.anjuke.com All Rights Reserved","ICP号：沪 B2-20090008"]
    };
  }
};
</script>

<style scoped>
div {
  width: 980px;
  height: 60px;
  margin: 0 auto;
  /* background-color: green ; */
}
li:first-of-type {
    padding-left: 12px;
}
li {
  list-style: none;
  display: inline-block;
  padding: 0px 4px;
}

a {
  color: #333;
  font-size: 12px;
  text-decoration: none;
}
</style>

