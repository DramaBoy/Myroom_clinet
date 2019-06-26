<template>
    <div>
   <Header></Header>
    <div class="nav">
      <div class="w">
        <ul class="name">
            <li>房多多</li>
            <li>|</li>
            <li>海外地产</li>
        </ul>
        <ul class="fenlei" v-for="(item,index) in arr" :key="index" @click="handleClick(index)">
            <li v-bind:class="{Colors:current==index}">{{item.name}}</li>
        </ul>
      </div>
      
    <!-- <input type="text"> -->
    </div>
    <router-view></router-view>
    </div>
</template>

<script>
import Header from "../components/Header-1"
export default {
    name:"Abroadnav",
    components:{
        Header
    },
    data:function(){
        return {
            Colors:"Colors",
            current:0,
            arr:[{name:"首页",path:"abroadindex"},
                 {name:"海外地产",path:"abLand"},
                 {name:"海外资讯",path:"abNews"},
                 {name:"品牌专区",path:"abBrand"},
                 {name:"定制找房",path:"abHouse"}]
           
        }
    },
    methods:{
        handleClick(i){
            // console.log(this.arr[i].path)
            this.$router.push("/"+this.arr[i].path)
            // console.log(i);
            this.current = i;
        }
    }
}
</script>

<style scoped>
    .Colors {
        color: #666;
    }
    .nav {
        height: 48px;
        width: 100%;
        background-color: #303030;
    }
    .w {
        width: 1180px;
        margin: 0 auto;
    }
    .name li:first-of-type{
        font-family: YouYuan;
        font-weight: bolder;
    }
    .name li {
        font-size: 26px;
    }
    ul {
        display: inline-block;
    }
    li {
        list-style: none;
        display: inline-block;
        text-align: center;
        color: #fff;
        line-height: 48px;
    }
    li:hover {
        cursor: pointer;
        color: #666;
    }
    .fenlei {
        margin-left:26px;
        font-size: 16px;
        
    }
    .fenlei li {
        margin-left: 46px;
    }
    input {
        display: inline-block;
    }
</style>


