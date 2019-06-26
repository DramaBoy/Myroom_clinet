<template>
  <!-- 内容 -->
  <div>
    <div class="fy">
      
      <ul v-for="(item,index) in data" :key="index" v-show="item.invest=='1'">
        <li @click="todetail(index)">
          <img :src="item.image" alt>
          <div>
            <p class="bot-name">{{item.title}}</p>
            <p class="orange">约￥{{item.price}}万元</p>
          </div>
        </li>
         <router-view></router-view>
      </ul>
    </div>
   
  </div>
</template>
<script>
import net from "../../tools/net";
export default {
  name: "House2",
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
      that.data = res.data;
    });
  },
  methods:{
    todetail(index){
      console.log(this.data[index].id);
      this.$router.push({
        path: '/detail',
        query: { id: this.data[index].id }
      });
    }
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
