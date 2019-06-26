<template>
<div>
  <!-- <Header></Header> -->
  
  </div>
</template>

<script>
import net from "../tools/net";
import Header from "../components/Header-1";
export default {
  name: "Detail",
  data() {
    return {
      
      data: {}
    };
  },
  components: {
    Header
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
    this.net.get("image", { id: that.id }, function(res) {
      console.log("images=" + res.data);
      // console.log(res.data[0].image1);
      // that.data1 = res.data[0];
    });
  },
  methods: {
    img1: function() {
      this.flag1 = tru,
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
    }
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
  margin-left: 628px;
}
.basic-tel .lp-icons-tel {
  width: 25px;
  height: 29px;
  float: left;
  font-size: 25px;
  margin-right: 10px;
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
