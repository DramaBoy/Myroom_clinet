<template>
  <div>
    <br>
    <div v-for="(item,index) in arr" :key="index">
      <div class="list-mod" @click="toInfo(index)">
        <p class="bigtitle">{{item.bigtitle}}</p>
        <div class="content">
          <div class="content-item01"><img :src="item.images" alt=""></div>
          <div class="content-item02">
            <p class="right-title">{{item.title}}</p>
            <ul class="content-ul">
              <li><em>价格</em>{{item.price}}</li>
              <li><em>特色</em>{{item.tese}}</li>
              <li><em>地段</em>{{item.diduan}}</li>
            </ul>
            <div class="orangebg">
                <span class='orangetitle'>{{item.title}}</span>
                <span class="orangebox">立即报名</span>
            </div>
          </div>
        </div>
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
      arr:[]
    };
  },
  components: {
  },
  created() {
    let that = this;
      //以post联网获得服务器数据   localhost:8888/login
      this.net.post(
        "hotactivity",{
        },
        function(res) {
          console.log(res.data); 
          that.arr=res.data     
        }
      );
    },
  methods: {
    toInfo(index){
      console.log(this.arr[index].hotid);
      this.$router.push({
        path: '/hotinfo',
        query: { hotid: this.arr[index].hotid }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-mod {
    width: 1080px;
    height: 333px;
    border: 1px solid #DDD;
    margin-top: 20px;
    border-radius: 5px;
}
.list-mod:hover {
    border: 1px solid #F60;
}
.bigtitle {
  font-size: 18px;
  line-height: 24px;
  margin: 16px 0 9px 20px;
}
.content {
  margin: 16px 0 9px 20px;
  display: flex;
  width: 1000px;
  height:250px;
  justify-content: space-between;
}
.content-item01 img{
  width:375px;
  height:250px;
}
.content-item02{
  width:600px;
  height:250px;
}
.right-title {
  font-size: 20px;
  height: 60px;
  line-height: 30px;
}
.content-ul li{
  list-style: none;
  display: inline-block;
  width: 200px;
  height: 34px;
  line-height: 34px;
  color: #666;
  overflow: hidden;
}
.content-ul li em {
  color: #62ab00;
  margin-right: 6px;
  font-style: normal;
}
.orangebg {
  width: 100%;
  height: 114px;
  background: #fff9ea;
}
.orangebg .orangetitle{
  display: inline-block;
  margin-left: 20px;
  font-size: 36px;
  color: #F60;
  line-height: 112px;
}
.orangebg .orangebox{
  margin-left: 20px;
  border-radius: 3px;
  padding: 0 29px 0 30px;
  font-size: 26px;
  height: 114px;
  line-height: 114px;
  color: #FFF;
  background: #F60;
}
</style>