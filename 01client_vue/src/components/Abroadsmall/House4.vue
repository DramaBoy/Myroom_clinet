<template>
  <!-- 内容 -->
  <div>
    <div class="fy">
      
      <ul v-for="(item,index) in data" :key="index" v-show="item.invest=='3'">
        <li>
          <img :src="item.image" alt>
          <div>
            <p class="bot-name">{{item.title}}</p>
            <p class="orange">约￥{{item.price}}万元</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import net from "../../tools/net";
export default {
  name: "House4",
  data: function() {
    return {
      net: net,
      data: {}
    };
  },
  created: function() {
    let that = this;
    this.net.get("getHouse2", {}, function(res) {
      // console.log(res.data);
      // console.log(res.data[0].image);
      that.data = res.data;
    });
  }
};
</script>

<style scoped>
.ab-title {
  margin-top: 30px;
}
.fy {
  width: 100%;
  height: auto;
  background-color: #fff;
}
.ab-title,
ul {
  padding: 15px 0 14px 30px;
  border-bottom: 1px solid #f2f2f2;
  box-sizing: border-box;
  background-color: #fff;
  display: inline-block;
  width: 290px;
  height: 307px;
}
li {
  list-style: none;
  display: inline-block;
  width: 260px;
  height: 277px;
}

li img {
  width: 100%;
  height: 199px;
}
.orange {
  color: #ed542a;
  font-size: 16px;
  padding-left: 10px;
}
.bot-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 6px 0 14px 10px;
  width: 180px;
}
</style>
