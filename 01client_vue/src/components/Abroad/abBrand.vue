<template>
     <div class="block">
        <el-carousel trigger="click" height="380px">
          <el-carousel-item v-for="(item,index) in data" :key="index">
            <img :src="item.img" alt> 
          </el-carousel-item>
        </el-carousel>
      </div>

</template>

<script>
import net from "../../tools/net"
export default {
    name:"abBrand",
    data: function() {
    return {
      net: net,
      img: "",
      data: {}
    };
  },
  created: function() {
    let that = this;
    this.net.get("getRound2", {}, function(res) {
      console.log(res.data);
      // console.log(res.data[0].img);
      that.data = res.data;
    });
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  height: 380px;
  width: 100%;
}
</style>


