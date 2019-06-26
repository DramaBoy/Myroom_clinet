<template>
  <div>
    <div class="row1">
      <img class="logo" src="https://pages.anjukestatic.com/xinfang/img/house/comm/logo.svg" alt>
      <span>|</span>
      <a href="#" class="xinfang">新房</a>

      <div class="selects">
        <el-dropdown>
          <span class="el-dropdown-link">
            成都
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">北京</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">上海</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">广州</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">深圳</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check-outline">成都</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header2"
};
</script>
<style>
.row1 {
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
}

.logo {
  width: 85px;
  height: 25px;
}

.row1 span {
  font-weight: lighter;
  color: #ddd;
  margin: 0 15px;
  font-size: 20px;
  top: 20px;
}

.xinfang {
  line-height: 25px;
  font-size: 24px;
  color: #62ab00;
  font-family: "Microsoft YaHei", "微软雅黑", "Hiragino Sans GB", tahoma, arial,
    simhei;
  left: 120px;
  top: 20px;
  text-decoration: none;
}

.selects span {
  color: #666;
  font-size: 14px;
}
</style>


