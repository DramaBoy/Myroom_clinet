<template>
  <div>
    <div class="form">
      <!-- 位置部分 -->
      <div class="location">
        <label class="item-title">位置：</label>
        <div class="item.area">
          <div class="item-hd">
            <a class="item-tab" href="#" @mouseover="area">
              区域找房
              <i class="iconfont s-arrow"></i>
            </a>
            <a class="item-tab item-on" href="#" @mouseover="subway">
              地铁找房
              <i class="iconfont s-arrow"></i>
            </a>
          </div>
          <div class="filter1" v-if="flag1">
            <span class="curr-area" @click="all">全部</span>
            <a
              v-for="(item,index) in area1"
              :key="item.index"
              class="select-item multi-item"
              :alt="item.weizhi1"
              @click="choose(index)"
            >{{item.weizhi2}}</a>
            <!-- <a class="select-item multi-item" alt="">成华</a> -->
          </div>
          <div class="filter2" v-if="flag2">
            <a class="select-item single-item" href="#" alt="1号线楼盘">1号线</a>
            <a class="select-item single-item" href="#" alt="2号线楼盘">2号线</a>
            <a class="select-item single-item" href="#" alt="3号线楼盘">3号线</a>
            <a class="select-item single-item" href="#" alt="4号线楼盘">4号线</a>
            <a class="select-item single-item" href="#" alt="5号线楼盘">5号线</a>
            <a class="select-item single-item" href="#" alt="6号线楼盘">6号线</a>
          </div>
        </div>
      </div>
      <!-- 虚线 -->
      <div class="line"></div>
      <!-- 价钱部分 -->
      <div class="filter-item">
        <label class="item-title">单价：</label>
        <div class="item-mod">
          <span class="color-selected">全部</span>
          <a
            v-for="(item,index) in price1"
            :key="item.id"
            class="single-item"
            @click="jiage(index)"
          >{{item.c}}</a>
        </div>
      </div>
      <!-- 虚线 -->
      <div class="line"></div>
      <!-- 户型 -->
      <div class="filter-item">
        <label class="item-title">户型：</label>
        <div class="item-mod">
          <span class="color-selected">全部</span>
          <el-checkbox-group v-model="checkList" style="display: inline-block">
            <el-checkbox class="multi-item" label="一室"></el-checkbox>
            <el-checkbox class="multi-item" label="二室"></el-checkbox>
            <el-checkbox class="multi-item" label="三室"></el-checkbox>
            <el-checkbox class="multi-item" label="四室"></el-checkbox>
            <el-checkbox class="multi-item" label="五室及以上"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <!-- 虚线 -->
      <div class="line" style="margin-bottom:15px"></div>

      <div class="filter-item more-status">
        <label class="item-title">更多：</label>
        <div class="status1">
          <el-dropdown>
            <span class="el-dropdown-link">
              销售状态
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">全部</el-dropdown-item>
              <el-dropdown-item command="b">在售</el-dropdown-item>
              <el-dropdown-item command="c">待售</el-dropdown-item>
              <el-dropdown-item command="d">售罄</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="status2">
          <el-dropdown>
            <span class="el-dropdown-link">
              物业类型
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">全部</el-dropdown-item>
              <el-dropdown-item command="b">住宅</el-dropdown-item>
              <el-dropdown-item command="c">别墅</el-dropdown-item>
              <el-dropdown-item command="d">商办</el-dropdown-item>
              <el-dropdown-item command="e">商铺</el-dropdown-item>
              <el-dropdown-item command="c">写字楼</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="status3">
          <el-dropdown>
            <span class="el-dropdown-link">
              开盘时间
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="e">全部</el-dropdown-item>
              <el-dropdown-item command="a">本月开盘</el-dropdown-item>
              <el-dropdown-item command="b">未来一个月</el-dropdown-item>
              <el-dropdown-item command="c">未来三个月</el-dropdown-item>
              <el-dropdown-item command="d">未来半年</el-dropdown-item>
              <el-dropdown-item command="e">过去一个月</el-dropdown-item>
              <el-dropdown-item command="e">过去三个月</el-dropdown-item>
              <el-dropdown-item command="e">最近开盘</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="status4">
          <el-dropdown>
            <span class="el-dropdown-link">
              装修状况
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="e">全部</el-dropdown-item>
              <el-dropdown-item command="a">毛坯</el-dropdown-item>
              <el-dropdown-item command="b">简装</el-dropdown-item>
              <el-dropdown-item command="c">精装</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <el-checkbox-group v-model="checkList" style="display: inline-block">
          <el-checkbox class="multi-item" label="即将开盘"></el-checkbox>
          <el-checkbox class="multi-item" label="支持微聊"></el-checkbox>
          <el-checkbox class="multi-item" label="视频看房"></el-checkbox>
          <el-checkbox class="multi-item" label="全景看房"></el-checkbox>
        </el-checkbox-group>
      </div>
    </div>

    <br>

    <div class="sort-tab">
      <div>
        <a class="highlight nomargin" href="#">全部楼盘</a>
      </div>
      <br>
      <div v-if="flag3">
        <div class="houselist" v-for="(item,index) in data1" :key="item.id" @click="jump(data1[index].id)">
          <img class="housepic" :src="item.image1" alt>

          <div class="infos">
            <a class="lp-name" href="#">
              <h3>
                <span class="items-name">
                  <a href="#">{{item.name}}</a>
                  <i class="jian-icon">荐</i>
                </span>
              </h3>
              <!--   推荐-->
            </a>
            <div style="height:12px"></div>
            <a class="address" href="#" style="padding-left:15px">
              <span
                class="list-map"
                target="_blank"
              >[&nbsp;{{item.flocation}}&nbsp;]&nbsp;{{item.location}}</span>
            </a>
            <br>
            <div style="height:12px"></div>
            <a class="huxing" href="#">
              <span>建筑面积：{{item.price}}㎡</span>
            </a>
            <div style="height:10px"></div>
            <a class="tags-wrap" href="#">
              <div class="tag-panel">
                <i class="status-icon onsale">在售</i>

                <i class="status-icon wuyetp">{{item.type}}</i>
                <span class="tag">品牌旺铺</span>
                <span class="tag">项目在建</span>
                <span class="tag">一环内</span>
                <span class="tag">医院</span>
              </div>
            </a>
            <div style="height:12px"></div>
            <!-- 惠、抢、看 -->
            <div class="active-module">
              <div class="active-left">
                <!--榜单-->
                <!-- 广告法在售开关 -->

                <!-- 抢 -->
                <p>
                  <i class="act-icon qiang">抢</i>
                  <a href="#" class="group-mark soj" title="一环商铺1.18万起">一环商铺1.18万起</a>
                </p>

                <!-- 看房团 -->
              </div>
              <!-- @zt 活动少于 2 时，该模块隐藏 -->
              <!-- @zt 活动少于 2 时，该模块隐藏 -->
            </div>
          </div>
        </div>
      </div>

      <div v-if="flag4">
        <div class="houselist" v-for="item in data2" :key="item.id">
          <img class="housepic" :src="item.image1" alt>

          <div class="infos">
            <a class="lp-name" href="#">
              <h3>
                <span class="items-name">
                  <a href="#">{{item.name}}</a>
                  <i class="jian-icon">荐</i>
                </span>
              </h3>
              <!--   推荐-->
            </a>
            <div style="height:12px"></div>
            <a class="address" href="#" style="padding-left:15px">
              <span
                class="list-map"
                target="_blank"
              >[&nbsp;{{item.flocation}}&nbsp;]&nbsp;{{item.location}}</span>
            </a>
            <br>
            <div style="height:12px"></div>
            <a class="huxing" href="#">
              <span>建筑面积：{{item.price}}㎡</span>
            </a>
            <div style="height:10px"></div>
            <a class="tags-wrap" href="#">
              <div class="tag-panel">
                <i class="status-icon onsale">在售</i>

                <i class="status-icon wuyetp">{{item.type}}</i>
                <span class="tag">品牌旺铺</span>
                <span class="tag">项目在建</span>
                <span class="tag">一环内</span>
                <span class="tag">医院</span>
              </div>
            </a>
            <div style="height:12px"></div>
            <!-- 惠、抢、看 -->
            <div class="active-module">
              <div class="active-left">
                <!--榜单-->
                <!-- 广告法在售开关 -->

                <!-- 抢 -->
                <p>
                  <i class="act-icon qiang">抢</i>
                  <a href="#" class="group-mark soj" title="一环商铺1.18万起">一环商铺1.18万起</a>
                </p>

                <!-- 看房团 -->
              </div>
              <!-- @zt 活动少于 2 时，该模块隐藏 -->
              <!-- @zt 活动少于 2 时，该模块隐藏 -->
            </div>
          </div>
        </div>
      </div>

      <div v-if="flag5">
        <div class="houselist" v-for="item in data3" :key="item.id">
          <img class="housepic" :src="item.image1" alt>

          <div class="infos">
            <a class="lp-name" href="#">
              <h3>
                <span class="items-name">
                  <a href="#">{{item.name}}</a>
                  <i class="jian-icon">荐</i>
                </span>
              </h3>
              <!--   推荐-->
            </a>
            <div style="height:12px"></div>
            <a class="address" href="#" style="padding-left:15px">
              <span
                class="list-map"
                target="_blank"
              >[&nbsp;{{item.flocation}}&nbsp;]&nbsp;{{item.location}}</span>
            </a>
            <br>
            <div style="height:12px"></div>
            <a class="huxing" href="#">
              <span>建筑面积：{{item.price}}㎡</span>
            </a>
            <div style="height:10px"></div>
            <a class="tags-wrap" href="#">
              <div class="tag-panel">
                <i class="status-icon onsale">在售</i>

                <i class="status-icon wuyetp">{{item.type}}</i>
                <span class="tag">品牌旺铺</span>
                <span class="tag">项目在建</span>
                <span class="tag">一环内</span>
                <span class="tag">医院</span>
              </div>
            </a>
            <div style="height:12px"></div>
            <!-- 惠、抢、看 -->
            <div class="active-module">
              <div class="active-left">
                <!--榜单-->
                <!-- 广告法在售开关 -->

                <!-- 抢 -->
                <p>
                  <i class="act-icon qiang">抢</i>
                  <a href="#" class="group-mark soj" title="一环商铺1.18万起">一环商铺1.18万起</a>
                </p>

                <!-- 看房团 -->
              </div>
              <!-- @zt 活动少于 2 时，该模块隐藏 -->
              <!-- @zt 活动少于 2 时，该模块隐藏 -->
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
  name: "selectform",
  data() {
    return {
      net: net,
      flag1: true,
      flag2: false,
      flag3: true,
      flag4: false,
      flag5: false,
      checkList: ["选中且禁用", "复选框 A"],
      area1: [
        { weizhi1: "天府新区楼盘", weizhi2: "天府新区" },
        { weizhi1: "双流楼盘", weizhi2: "双流" },
        { weizhi1: "高新楼盘", weizhi2: "高新" },
        { weizhi1: "成华楼盘", weizhi2: "成华" },
        { weizhi1: "新都楼盘", weizhi2: "新都" },
        { weizhi1: "郫都楼盘", weizhi2: "郫都" },
        { weizhi1: "龙泉驿楼盘", weizhi2: "龙泉驿" },
        { weizhi1: "温江楼盘", weizhi2: "温江" },
        { weizhi1: "武侯楼盘", weizhi2: "武侯" },
        { weizhi1: "金牛楼盘", weizhi2: "金牛" },
        { weizhi1: "青白江楼盘", weizhi2: "青白江" },
        { weizhi1: "崇州楼盘", weizhi2: "崇州" },
        { weizhi1: "都江堰楼盘", weizhi2: "都江堰" },
        { weizhi1: "锦江楼盘", weizhi2: "锦江" },
        { weizhi1: "金堂楼盘", weizhi2: "金堂" },
        { weizhi1: "青羊楼盘", weizhi2: "青羊" },
        { weizhi1: "彭州楼盘", weizhi2: "彭州" },
        { weizhi1: "新津楼盘", weizhi2: "新津" },
        { weizhi1: "大邑楼盘", weizhi2: "大邑" },
        { weizhi1: "邛崃楼盘", weizhi2: "邛崃" },
        { weizhi1: "成都周边楼盘", weizhi2: "成都周边" },
        { weizhi1: "高新西区楼盘", weizhi2: "高新西区" },
        { weizhi1: "蒲江楼盘", weizhi2: "蒲江" }
      ],
      price1: [
        { a: 0, b: 7000, c: "7千以下" },
        { a: 7000, b: 10000, c: "7千-1万" },
        { a: 10000, b: 15000, c: "1-1.5万" },
        { a: 15000, b: 20000, c: "1.5-2万" },
        {
          a: 20000,
          b: 10000000000000000000000000000000000000000000000000000000000000000000000000000000000,
          c: "2万以上"
        }
      ],
      id: 0,
      name: "",
      othername: "",
      flocation: "",
      location: "",
      description: "",
      price: 0,
      kaipan: "",
      type: "",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      data1: {},
      data2: {},
      data3: {}
    };
  },

  created: function() {
    let that = this;
    this.net.get("getHouses", {}, function(res) {
      console.log(res.data);
      that.data1 = res.data;
    });
  },
  methods: {
    area: function() {
      this.flag1 = true;
      this.flag2 = false;
    },
    subway: function() {
      this.flag1 = false;
      this.flag2 = true;
    },
    choose(index) {
      this.flag3 = false;
      this.flag4 = true;
      this.flag5 = false;
      let that = this;
      //以post联网获得服务器数据   localhost:8888/login

      // console.log(this.area1[index].weizhi2);
      this.net.get(
        "selectform",
        {
          weizhi: this.area1[index].weizhi2
        },
        function(res) {
          console.log(res.data);
          that.data2 = res.data;
        }
      );
    },
    jiage(index) {
      this.flag3 = false;
      this.flag4 = false;
      this.flag5 = true;
      let that = this;
      //以post联网获得服务器数据   localhost:8888/login

      // console.log(this.area1[index].weizhi2);
      this.net.get(
        "priceform",
        {
          price2: this.price1[index].a,
          price3: this.price1[index].b
        },
        function(res) {
          console.log(res.data);
          that.data3 = res.data;
        }
      );
    },
    jump(id) {
      console.log("id="+id)
      this.$router.push({
        path:"/knowmore",
        query:{id:id}
        })
    },
    all: function() {
      this.flag3 = true;
      this.flag4 = false;
    }
  }
};
</script>

<style>
.form {
  width: 1180px;
  height: auto;
  border: 1px solid #ddd;
}
.houselist:hover {
  background-color: rgb(249, 249, 249);
}
.filter1 {
  width: 1000px;
}
.form .location,
.filter-item {
  display: flex;
  width: 1137px;
}
.item-title {
  margin-top: 15px;
  margin-left: 15px;
  width: 52px;
}
.item-tab {
  display: inline-block;
  width: 80px;
  margin-left: 10px;
  margin-top: 15px;
  font-size: 14px;
  text-decoration: none;
  color: #333;
}

.item-tab:hover {
  color: #f60;
}
.line {
  border: 1px dashed #ddd;
  margin-top: 10px;
}
.curr-area,
.color-selected {
  width: 20px;
  font: 14px Arial, "Microsoft YaHei", "Hiragino Sans GB", "STHeiti", SimSun;
  color: #f60;
  margin-top: 15px;
  margin-left: 10px;
  cursor: pointer;
}
.select-item,
.single-item,
.multi-item {
  display: inline-block;
  font: 14px Arial, "Microsoft YaHei", "Hiragino Sans GB", "STHeiti", SimSun;
  color: #333;
  margin-top: 15px;
  margin-left: 10px;
  text-decoration: none;
}

.select-item:hover,
.single-item:hover,
.multi-item:hover {
  color: #f60;
  cursor: pointer;
}
.status1,
.status2,
.status3,
.status4 {
  width: 110px;
  height: 32px;
  border: 1px solid #ddd;
  margin-left: 15px;
  text-align: center;
  margin-bottom: 15px;
}
.el-dropdown-link {
  line-height: 32px;
}

a {
  text-decoration: none;
}
a:hover {
  color: #f60;
}
.blank {
  height: 20px;
  width: 1180px;
  border-top: 1px solid #ddd;
}
.sort-tab {
  width: 1180px;
  height: 38px;
  border-bottom: 2px solid #62ab00;
  display: flex;
  flex-direction: column;
}
.highlight {
  background-color: #62ab00;
  float: left;
  line-height: 38px;
  padding: 0 20px;
  border-top: 1px solid #e6e6e6;
  text-decoration: none;
  color: #fff;
}

.houselist {
  display: flex;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  padding-bottom: 20px;
}

.housepic {
  width: 180px;
  height: 135px;
  top: 10px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
.items-name a {
  padding-left: 15px;
  color: #333;
  font-size: 20px;
  cursor: pointer;
}
.jian-icon {
  display: inline-block;
  width: 14px;
  height: 14px;
  line-height: 14px;
  padding: 1px 0 0 1px;
  font-size: 14px;
  text-align: center;
  vertical-align: middle;
  color: #f46520;
  border: solid 1px #f46520;
  font-style: normal;
}
.list-map {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666;
  line-height: 22px;
}
.huxing {
  color: #666;
  line-height: 22px;
  cursor: pointer;
  font-size: 14px;
  padding-left: 15px;
}
.tag-panel {
  padding-left: 15px;
}
.status-icon {
  cursor: pointer;
  color: #799374;
  background: #f2f6ed;
  padding: 1px 4px;
  font-size: 14px;
  margin-right: 5px;
  vertical-align: middle;
  font-style: normal;
}
.tag {
  display: inline-block;
  color: #999;
  background: #f8f8f8;
  padding: 1px 4px;
  text-align: center;
  margin-right: 6px;
  vertical-align: top;
  font-size: 14px;
}
.active-left {
  padding-left: 15px;
}
.qiang {
  background-color: #f46520;
  float: left;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  font-family: "SimHei";
  color: #fff;
  border-radius: 3px;
  margin-right: 5px;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  font-style: normal;
}
.soj {
  color: #666;
  cursor: pointer;
  line-height: 22px;
  font-size: 14px;
}
</style>

