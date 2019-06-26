
<template>
  <!-- 表单添加信息组件 -->
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 表单
        </el-breadcrumb-item>
        <el-breadcrumb-item>添加表单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="楼盘标题">
            <el-input v-model="title" placeholder="请输入楼盘标题"></el-input>
          </el-form-item>
          <el-form-item label="楼盘价格">
            <el-input v-model="price" placeholder="请输入楼盘价格"></el-input>
          </el-form-item>
          <el-form-item label="楼盘描述">
            <el-input v-model="site" placeholder="请输入楼盘描述"></el-input>
          </el-form-item>
          <el-form-item label="图片地址">
            <!-- <el-input v-model="imgurl" placeholder="请输入楼盘图片地址，只能输入服务器图片地址"></el-input> -->

            <el-upload
              ref="upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-change="fileChange"
              :file-list="fileList"
              list-type="picture"
              :auto-upload="false"
            >
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import net from "@/tools/net.js";
export default {
  name: "baseform",
  data: function() {
    return {
      net: net,
      fileList: [],
      upload_file: null,
      files: [],
      title: "",
      site: "",
      price: "",
      imgurl: "",
      options: [
        {
          value: "guangdong",
          label: "广东省",
          children: [
            {
              value: "guangzhou",
              label: "广州市",
              children: [
                {
                  value: "tianhe",
                  label: "天河区"
                },
                {
                  value: "haizhu",
                  label: "海珠区"
                }
              ]
            },
            {
              value: "dongguan",
              label: "东莞市",
              children: [
                {
                  value: "changan",
                  label: "长安镇"
                },
                {
                  value: "humen",
                  label: "虎门镇"
                }
              ]
            }
          ]
        },
        {
          value: "hunan",
          label: "湖南省",
          children: [
            {
              value: "changsha",
              label: "长沙市",
              children: [
                {
                  value: "yuelu",
                  label: "岳麓区"
                }
              ]
            }
          ]
        }
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: true,
        type: ["步步高"],
        resource: "小天才",
        desc: "",
        options: []
      }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log("删除");
      console.log(file, fileList);
    },
    fileChange(file, fileList) {
      console.log("change");

      this.files = [];
      //获得文件数量
      let length = fileList.length;
      for (let i = 0; i < length; i++) {
        this.files.push(fileList[i].raw);
      }
    },
    handlePreview(file) {
      console.log("添加图片", file);
    },

    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    //主页信息提交方法
    onSubmit() {
      let that = this;

      that.net.uploadFile(
        "homeAdd",
        {
          title: this.title,
          image: this.files,
          site: this.site,
          price: this.price
        },
        function(res) {
          console.log(res);
          that.upload_file = res.upload_file;
        }
      );
    }
  }
};
</script>