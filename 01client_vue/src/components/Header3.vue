<template>
  <div class="nav1">     
    <ul class="list">
      <li
        v-for="(item,index) in titles"
        :key="index"
        v-bind:class="index==activityIndex?selecting:unselect"
        @click="changeBgc(index)"
      >
        <router-link :to="item.src">{{item.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Header3",
  data: function() {
    return {
      activityIndex: '',
      titles: [
        {
          title: "新盘",
          src: "/newhouse"
        },
        {
          title: "楼讯",
          src: "/navbarcom"
        },
        {
          title: "热门活动",
          src: "/hotactive"
        },
        {
          title: "看房团",
          src: "#"
        },
        {
          title: "房源",
          src: "#"
        },
        {
          title: "商业地产",
          src: "#"
        },
        {
          title: "海外地产",
          src: "/abroadindex"
        },
        {
          title: "商业专区",
          src: "#"
        }
      ],
      selecting: "selecting",
      unselect: "unselect"
    };
  },
   components: {
  },
  methods: {
    changeBgc(index) {
      this.activityIndex = index;
      console.log(this.activityIndex);
    }
  }
};
</script>
<style scoped>
.nav1 {
  width: 1180px;
  height: 40px;
  background-color: #62ab00;
}

.nav1 .list {
  list-style: none;
  display: flex;
  line-height: 40px;
}

.nav1 .list a {
  text-decoration: none;
  color: #fff;
  padding: 0 22px 0 25px;
}

.selecting {
  background-color: rgb(89, 151, 0);
}
.unselect {
  background-color: rgb(98, 171, 0);
}
.nav1 .list li:hover {
  background-color: rgb(79, 126, 1);
}
</style>


