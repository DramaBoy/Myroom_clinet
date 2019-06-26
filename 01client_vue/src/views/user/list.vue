<template>
  <div class="mar">
    <div class="title">{{msg}}</div>
    <template>
      <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="标题" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column prop="html" label="操作"> 
        <button class="delete">删除</button>
      </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import net from "../../tools/net";
export default {
  data() {
    return {
      msg: "我的收藏记录",
      nameInput: "",
      passInput: "",
      net: net,
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
  },
  methods: {
    login: function() {}
  }
};
</script>

<style scoped>
.mar {
  margin-left: 30px;
}
.title {
  font-size: 20px;
  color: #666;
  font-weight: 600;
  margin-bottom: 50px;
}
.delete {
  color: #666;
  background-color: Transparent; 
  border-style :none;
  font-size: 14px;
  outline: none;
  cursor: pointer;
}
</style>