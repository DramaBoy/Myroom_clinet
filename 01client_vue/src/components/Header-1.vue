<template>
<div>
  <div class="hello w">
    <el-menu class="el-menu-demo" mode="horizontal">
  <el-menu-item class="list" v-for="(list,index) in arr" :key="index"  @click='select(index)'>
    <router-link :to="list.address">{{list.title}}</router-link>
    <span>|</span>
  </el-menu-item>
</el-menu>
<!-- <div class="line"></div> -->
  </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    select(index){
      if(index==1){
        let selindex = 0;
        this.$emit('header1select',selindex);
      }  
      switch (index) {
        case 0:
          this.$router.push({path:'/'})
          break;
         case 1:
          this.$router.push({path:'/newhouse'})
          break;
           case 5:
          this.$router.push({path:'/abroad'})
          break;
           case 6:
          this.$router.push({path:'/navbarcom'})
          break;
        default:
          break;
      }    
    }
  },
  data () {
    return {
      msg: '新组件',
      arr:[
        {title:"首页",address:"#"},
        {title:"新房",address:"/newhouse"},
        {title:"二手房",address:"#"},
        {title:"租房",address:"#"},
        {title:"商铺写字楼",address:"#"},
        {title:"海外地产",address:"/abroadindex"},
        {title:"楼讯",address:"/navbarcom"},
        {title:"楼价",address:"#"},
        {title:"问答",address:"#"},
        {title:"个人中心",address:'/clientCenter'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
display: inline-block;
padding: 0px;
height: 45px;
}
.list span{
  color: #DDD;
}
.list a{
padding-left:12px;
padding-right: 12px;
text-decoration: none;
color: #666;
line-height: 45px;
}
.list a:hover{
  color: #f60;
}
.w {
  width: 1180px;
  margin: 0 auto;
}
</style>
