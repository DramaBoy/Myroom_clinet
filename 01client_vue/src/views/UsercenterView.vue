<template>
  <div>
    <div class="nav">
      <div class="center">
        <div class="nav-left">
          <span>
            <a href="#">房多多</a>
          </span>
          <span>|</span>
          <span>用户中心</span>
        </div>
        <span class="nav-right">
          <a href="http://localhost:8080/#/login">
            <i class="el-icon-switch-button"></i>
            <i>退出</i>
          </a>
        </span>
      </div>
    </div>
    <div class="user-info">
      <div class="center">
        <img src="../assets/photo.png" alt="">
        <span>你好！</span>
        <span>{{username}}</span>
      </div>
    </div>
    <div class="bg">
      <div class="content">
        <el-container>
            <el-aside width="250px">
              <el-menu :default-active="$route.path" @open="handleOpen" @close="handleClose" router unique-opened>
                <template v-for="(item,boxindex) in routes" >     
                    <el-submenu v-if="item.path == '/clientCenter'" v-bind:key="boxindex" :index="''+boxindex" >
                        <template slot="title">
                            <i v-bind:class="item.isActive?item.icon2:item.icon1"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item @select="handleselect" v-for="(child,childIndex) in item.children" :index="child.path" v-bind:key="childIndex">
                            {{child.name}}
                            </el-menu-item>
                        </el-menu-item-group>
                  </el-submenu>
               
                </template>
              </el-menu>
            </el-aside>

            <el-main>
              <transition name="fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </el-main>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: false,
      routes: [],
      username:localStorage.getItem('username')
    };
  },
  created: function() {
    console.log(this.$router);
    this.routes = this.$router.options.routes;
  },
  methods: {
    handleOpen(key, keyPath) {
      this.routes[key].isActive = true;
    },
    handleClose(key, keyPath) {
      this.routes[key].isActive = false;
    },
    handleselect: function(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<style scoped>
.center {
  width: 1180px;
  margin: 0 auto;
}
.nav {
  width: 100%;
  height: 55px;
  background-color: #62ab00;
  color: #fff;
  line-height: 55px;
}
.nav-left {
  float: left;
}
.nav-left span:first-child a {
  display: inline-block;
  font-family: YouYuan;
  font-size: 28px;
  font-weight: 900;
  margin-right: 6px;
  text-decoration: none;
  color: white;
}
.nav-left span:nth-child(2) {
  font-size: 24px;
  margin-right: 6px;
}
.nav-left span:nth-child(3) {
  font-size: 24px;
  font-weight: 600;
}
.nav-right a {
  float: right;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
}
.nav-right a i:nth-child(2) {
  margin-left: 8px;
  font-size: 16px;
  font-style: normal;
}
.user-info {
  width: 100%;
  height: 100px;
  background: url(../assets/banner100_100.png);
}
.user-info .center {
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.user-info .center span {
  font-size: 20px;
  font-weight: 500;
}
.user-info .center img{
  width: 70px;
  height:70px;
  border-radius: 50%;
  margin-right: 20px;
}
.bg {
  background-color: #f1f1f1;
  width: 100%;
  padding: 24px;
}
.content {
  width: 1180px;
  margin: 0px auto;
  height: 900px;
}

.el-menu {
  height: 800px;
  margin-right: 12px;
}
.el-main {
  height: 800px;
  background-color: #fff;
}
.el-menu-item.is-active {
    color: #62ab00;
}
</style>