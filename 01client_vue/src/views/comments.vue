<template>
  <div>
    <Header/>
    <div class="center">
      <br>
      <h2>我要点评-{{this.name}}</h2>
      <br>
      <div class="dp-box">
        <span class="dianping">点评：</span>
       <el-input
    type="textarea"
    :rows="12"
    placeholder="嗨！朋友，说点什么吧，分享您看房中的点点滴滴，您可从楼盘价格，周边配套，小区环境，交通地段等角度进行点评哦！（15-500字）"
    v-model="textarea">
    </el-input>
      </div>

      <el-upload
        class="upload-demo"
        action=""
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-change="fileChange"
        :file-list="fileList"
        list-type="picture"
        :auto-upload="false"
        multiple
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>

        <span class="submit" @click="subForm">提交评论</span>
    </div>
  </div>
</template>

<script>
import net from "../tools/net";
import Header from "../components/Header-1";
export default {
  name: "comments",
  data: function() {
    return {
      hotid: "",
      name: "",
      textarea: '',
      net: net,
      fileList: [],
      upload_file: null,
      files: [],
      imgurl:''
    }
  },
  components: {
    Header
  },
  methods: {
     fileChange(file, fileList) {
      console.log("change");
      this.files = [];
      //获得文件数量
      let length = fileList.length;
      for (let i = 0; i < length; i++) {
        this.files.push(fileList[i].raw);
      }
    },
      subForm(){
      let that = this;
      that.net.uploadFiles(
        "commentsAdd",
        {
          hotid:that.hotid,
          username:localStorage.getItem('username'),
          textarea: that.textarea,
          image:that.files,
        },
        function(res) {
          console.log(res);
          that.upload_file = res.upload_file;
        }
      );
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
  },
  mounted: function() {
    this.hotid = this.$route.query.hotid;
    let that = this;
    this.net.post(
      "hotinfo",
      {
        hotid: that.hotid
      },
      function(res) {
        console.log(res.data.data);
        that.name = res.data.data[0].firsttitle;
      }
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  width: 1080px;
  margin: 0 auto;
}
.dp-box{
    margin-bottom:20px;
}
.submit{
    margin-top: 30px;
    color: #FFF;
    background: #599700;
    padding: 8px 29px 8px 30px;
    font-size: 18px;
    height: 40px;
    line-height: 40px;
}
</style>