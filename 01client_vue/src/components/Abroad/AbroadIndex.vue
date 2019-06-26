<template>
  <div>
    <div class="bg">
      <Round></Round>
      <div class="w one">
        <!-- 标题 -->
        <div class="ab-title"><h3>房源推荐</h3></div>
        <House1 />
        <div class="ab-title"><h3>投资</h3></div>
        <House2 />
        <div class="ab-title"><h3>学区</h3></div>
        <House3 />
        <div class="ab-title"><h3>移民</h3></div>
        <House4 />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import net from "../../tools/net";
import Round from "../Abroadsmall/Round";
import House1 from "../Abroadsmall/House1"
import House2 from "../Abroadsmall/House2"
import House3 from "../Abroadsmall/House3"
import House4 from "../Abroadsmall/House4"
import Footer from "../Footer"
export default {
  name: "AbroadIndex",
  components:{
      Round,
      House1,
      House2,
      House3,
      House4,
      Footer
  },
 
};
</script>

<style scoped>
.bg {
  width: 100%;
  height: auto;
  background-color: #f2f2f2;
}
.w {
  width: 1180px;
  margin: 0 auto;
}
h3 {
  border-left: 4px solid #ee552a;
  font-size: 20px;
  line-height: 20px;
  font-weight: normal;
}
.ab-title {
  margin-top: 30px;
  height: 50px;
}
.ab-title,
ul {
  padding: 15px 0 14px 30px;
  border-bottom: 1px solid #f2f2f2;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
}
li {
  list-style: none;
  display: inline-block;
}
ul {
  display: inline-block;
}
.one li {
  width: 260px;
  height: 277px;
}
.one li img {
  width: 100%;
  height: 199px;
}
.one .orange {
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


