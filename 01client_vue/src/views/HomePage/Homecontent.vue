<template>
  <div class="homecontent">
    <div class="content">
      <!-- 主页左边内容-->
      <div class="content-lf">
        <!--第一个盒子-->
        <div class="box-one">
          <div class="box-onelf">
            <!--11-->
            <div class="box-lfbar box-bar1" v-for="(items,index) in boxlfbar" :key="index" @click="boxshow(index)">
              {{items}}
            </div>
            <!--右边盒子内容   -->
            <!--第1个显示的盒子开始-->
            <div class="right-con1" v-show="mylist==0">
              <div style="margin-top: 15px; margin-left: 15px;background-color: #ECECEC; width: 662px">
                <el-input placeholder="请输入小区名称、地址" v-model="input1" class="input-with-select" style="width: 450px;"
                          clearable>
                </el-input>
                <el-button slot="append" icon="el-icon-search" style="background-color: #FF911B;">二手房</el-button>
                <el-button slot="append" icon="el-icon-search " style="background-color: #FF612A;">新房</el-button>
              </div>
              <!--            搜索栏下的内容  -->
              <div class="clearfix">
                <div class="float-l">
                  <div class="float-title">
                    <p style="font-size: 16px;color: #333333">二手房</p>
                    <i style="color:#2C81CD;font-size: 16px " class="el-icon-location-outline">地图找房</i>
                  </div>
                  <div class="float-l-city">
                  <span class="fm-11" v-for="(items,index) in floatlcity" :key="index"
                       >
                    {{items}}
                  </span>
                  </div>
                  <p>
                    <span class="fm-12" v-for="(items,index) in cityprice" :key="index">
                      {{items}}
                    </span>
                  </p>
                </div>
                <div class="float-r">
                  <div class="float-title">
                    <p style="font-size: 16px;color: #333333">新房</p>
                    <i style="color:#2C81CD;font-size: 16px " class="el-icon-location-outline">地图找房</i>
                  </div>
                  <div class="float-l-city">
                  <span class="fm-13" v-for="(items,index) in floatlcity1" :key="index"
                       >
                    {{items}}
                  </span>
                  </div>
                  <p>
                    <span class="fm-14" v-for="(items,index) in cityprice1" :key="index"
                         >
                      {{items}}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <!--第1个显示的盒子结束-->
            <!--第2个显示的盒子开始-->
            <div class="right-con2" v-show="mylist==1">
              <div class="con2-left">
                <p class="saler-title">房东委托</p>
                <el-input
                  style="width: 255px"
                  placeholder="请输入并选择小区"
                  v-model="input2" clearable>
                </el-input>
                <input hidefocus="true" id="salerSubmit" type="submit" class="free-pub" value="免费发布房源">
              </div>
              <div class="con2-right">
                <ul>
                  <li>
                    <i>1</i>
                    <p>在房多多发房</p>
                    <em>简单2步即可完成发布，方便<br>快捷免费！</em>
                  </li>
                  <li>
                    <i>2</i>
                    <p>优质经纪人全程服务</p>
                    <em>我们挑选优质经纪人为您服<br>务，拒绝骚扰</em>
                  </li>
                  <li>
                    <i>3</i>
                    <p>大量买家</p>
                    <em>优质经纪人协助您完成办理手续</em>
                  </li>
                </ul>
              </div>
            </div>
            <!--第2个显示的盒子结束-->
            <!-- 第3个盒子开始-->
            <div class="right-con3" v-show="mylist==2">
              <div style="margin-top: 30px;margin-left: 25px">
                <el-input style="width: 391px" placeholder="请输入房源特征、地址、小区、楼盘名" v-model="input3"
                          class="input-with-select" clearable>
                  <el-button slot="append" icon="el-icon-search" style="background-color: #FF911B;">租房</el-button>
                </el-input>
                <i class="el-icon-location-outline">
                  地图找房
                </i>
              </div>
              <div class="con3-bottom">
                <div class="bottom-box">
                  <p style="font-size: 16px">热门区域</p>
                  <div class="hotregion">
                    <span style="font-size: 13px" v-for="(items,index) in hotregion" :key="index">
                      {{items}}
                    </span>
                  </div>
                </div>
                <div class="bottom-box">
                  <p style="font-size: 16px">
                    热门板块
                  </p>
                  <div class="hotplate">
                    <span style="font-size: 13px" v-for="(items,index) in hotplate" :key="index">
                      {{items}}
                    </span>
                  </div>
                </div>
                <div class="bottom-box">
                  <p style="font-size: 16px">租房预算</p>
                  <br>
                  <p style="font-size: 13px">500元以下 </p>

                  <p style="font-size: 13px">500-800元</p>

                  <p style="font-size: 13px">800-1000元 </p>

                  <p style="font-size: 13px">1000-1500元</p>
                </div>
              </div>
            </div>
            <!--第3个盒子结束-->
            <!--第4个盒子开始-->
            <div class="right-con4" v-show="mylist==3">
              <div style="margin-top: 30px; margin-left: 25px;background-color: #ECECEC; width: 662px">
                <el-input placeholder="请输入房源名特征、小区名称、地址" v-model="input4" class="input-with-select"
                          style="width: 450px;" clearable>
                </el-input>
                <el-button slot="append" icon="el-icon-search" style="background-color: #FF911B;">写字楼</el-button>
                <el-button slot="append" icon="el-icon-search " style="background-color: #FF612A;">商铺</el-button>
              </div>
              <div class="con4-bottom">
                <div class="bottom-left">
                  <p style="font-size: 16px">热门区域</p>
                  <div class="bottom-left1">
                    <span style="padding: 12px; font-size: 13px" v-for="(items,index) in bottomleft1" :key="index">
                        {{items}}
                    </span>
                  </div>
                </div>
                <div class="bottom-right">
                  <p style="font-size: 16px">热门板块</p>
                  <div class="bottom-rigth1">
                    <span style="padding: 5px  5px; font-size: 13px" v-for="(items,index) in  bottomright1"
                          :key="index">
                        {{items}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!--第4个盒子结束-->
          </div>
        </div>
        <!--第一个盒子结束-->
        <!--第二个盒子开始-->
        <div class="cont-wrap">
          <router-link to='/newhouse'>
          <p title="热门楼盘" target="_blank" alt="热门楼盘">热门楼盘&nbsp;&gt;</p>
          </router-link>
          <div class="cont-wrapbox">
            <!-- 轮播盒子-->
            <el-carousel loop="true" indicator-position="none"
                         autoplay="true"    interval="3000"       style="height: 414px;width: 870px;overflow: hidden">

<!--  轮播内容区域盒子1-->
              <el-carousel-item style="display: flex;flex-direction: row;justify-content: space-between;height: 414px;width: 870px;overflow: hidden"  v-for="(item,index) in arr2" :key='index' v-if="index%2==0">
<!--                11-->
                  <span class="wrapbox-content">
                    <img title="广告" style="width: 382px;height: 260px;margin-top: 20px;margin-left: 20px;"
                         :src="arr2[index].imgurl"
                         alt="">
                    <span class="sub-title">{{arr2[index].title}}</span>
                    <br>
                    <br>
                    <span class="m-b-newhouse-t">{{arr2[index].price}}</span>
                    <br>
                    <br>
                    <h3  class="buy-info">
                      {{arr2[index].site}}
                    </h3>
                  </span>
                <!--22-->
                <span class="wrapbox-content1">
                    <img title="广告" style="width: 382px;height: 260px;margin-top: 20px;margin-left: 20px"
                         :src="arr2[index+1].imgurl"
                         alt="">
                    <span class="sub-title">{{arr2[index+1].title}}</span>
                    <br>
                    <br>
                    <span class="m-b-newhouse-t">{{arr2[index+1].price}}</span>
                    <br>
                    <br>
                    <h3  class="buy-info">
                     {{arr2[index+1].site}}
                    </h3>
                  </span>
              </el-carousel-item>
              <i v-else='123==123'></i>
            </el-carousel>
          </div>
        </div>
        <!--第二个盒子结束-->
        <!--第三个盒子开始-->
        <div class="popGuide-cont">
               <router-link to='/navbarcom'>
          <p title="热门导购" alt="热门导购" target="_blank" href="#">热门导购&nbsp;&gt;</p>
          </router-link>
          <div class="popGuide-box">
            <!--轮播盒子开始-->
            <el-carousel direction="horizontal" style=" width: 868px;height: 466px;overflow: hidden;background-color:  #F7F7F7;"  indicator-position="inside" loop="true"  autoplay="true"    interval="3000" >
              <!--第1  1  1个轮播大盒子开始-->
              <el-carousel-item  style=" width: 868px;
  height: 466px;display: flex;flex-direction: row;justify-content: space-around;overflow: hidden "
  v-for='(item,index) in arr3' :key='index' v-if="index%5==0" >
                <!--第1张图  -->
               <span class="imgx-lf1">
                <img :src="arr3[index].imgurl1" alt="">
                 <p class="font-p">{{arr3[index].title}}</p>
               </span>
                <!--第2张图  -->
                <span class="imgx-rt1">
                 <!--11-->
                  <span class="imgx-rt-box"  v-if="arr3[index+1]!=null">
                    <img  :src="arr3[index+1].imgurl1" alt="">
                    <p class="font-pgo">{{arr3[index+1].title}}</p>
                  </span>
                  <!--22-->
                    <span class="imgx-rt-box" v-if="arr3[index+2]!=null">
                    <img  :src="arr3[index+2].imgurl1" alt="">
                    <p class="font-pgo">{{arr3[index+2].title}}</p>
                  </span>
                  <!--33-->
                  <span class="imgx-rt-box" v-if="arr3[index+3]!=null">
                     <img :src="arr3[index+3].imgurl1" alt=""> 
                    <p class="font-pgo">{{arr3[index+3].title}}</p>
                  </span>
                  <!--44-->
                  <span class="imgx-rt-box" v-if="arr3[index+4]!=null">
                     <img :src="arr3[index+4].imgurl1" alt=""> 
                    <p class="font-pgo">{{arr3[index+4].title}}</p>
                  </span>
                </span>
              </el-carousel-item>
              <i v-else='456==456'></i>
              <!--第1  1  1个轮播大盒子结束-->
            </el-carousel>
            <!--轮播盒子结束-->
          </div>
        </div>
        <!--第三个盒子结束-->
        <!--第四个盒子开始-->
        <div class="box4-imgad">
          <img src="https://pic1.ajkimg.com/material/get/22c8f070d041fd994df198fe7a2e7179.jpg" alt="广告">
        </div>
        <!--第四个盒子结束-->
        <!--第五个盒子开始-->
        <div class="box5-cont">
        <!-- 左边-->
          <div class="box5-left">
            <p target="_blank" href="#" title="热点追踪" alt="热点追踪" _soj="HP_NewMarket">热点追踪&nbsp;&gt;</p>
            <div class="box5-lf-cont">

              <div class="box5-lf-contcom">

                <!--111-->
                <div class="box5-message">
                  <img src="https://pic1.ajkimg.com/display/xinfang/e768a1b72024ce5985231eb4a9c7e21f/160x120m.jpg" alt="">
                  <div class="box5-lf-contcomx">
                    <h3><p class="box-p1">东中环地铁盘 成华奥园广场亮点解析</p></h3>
                    <p class="box-p2">成华奥园广场位于东中环，项目将于地铁7号线崔家店站接驳。区位优势非常明显，而项目自身的商业规划也可圈可点，那么这个楼盘有哪些亮点值...</p>
                  </div>
                </div>
                <!--222-->
                <div class="box5-message">
                  <img src="https://pic1.ajkimg.com/display/xinfang/dc5e6050e471f7fb6e879aeaf14297fe/160x120m.jpg" alt="">
                  <div class="box5-lf-contcomx">
                    <h3><p class="box-p1">
                      保利熙园园里洋房将开盘</p></h3>
                    <p class="box-p2">买房还是得买品牌，无论是品质、小区环境、物业等各个方面都更为省心，所以很多购房者在看房过程中都更为偏爱品牌房。保利熙园位于郫都区域...</p>
                  </div>
                </div>
                <!--333-->
                <div class="box5-message">
                  <img src="https://pic1.ajkimg.com/display/xinfang/206d996af23e246c911773bd788b6ed5/160x120m.jpg" alt="">
                  <div class="box5-lf-contcomx">
                    <h3><p class="box-p1">港式主题商业街区中环旺角解读</p></h3>
                    <p class="box-p2">中环旺角成华区迎晖路与建材路交汇处，紧邻地铁7号线站点，2号线和4号线站口也在2公里以内，享有较为便捷的交通。</p>
                  </div>
                </div>
                  <!--333结束-->
              </div>
            </div>
          </div>
          <!-- 右边-->
          <div class="box5-right">
            <p title="实地探盘" alt="实地探盘" target="_blank" href="#" >实地探盘&nbsp;&gt;</a>
            <div class="box5-rt-nac">
              <ul>
                <li>
                  <img src="https://pic4.ajkimg.com/display/xinfang/7c9c6b58c8fc365a19345529a0a27540/245x160m.jpg" >
                  <a target="_blank" href="#" >【成华】东中环地铁盘 成华奥园广场亮点解析</a>
                </li>
                <li>
                  <img src="https://pic4.ajkimg.com/display/xinfang/38424e60f28a322cb403e192ac7db4dc/245x160m.jpg" >
                  <a target="_blank" href="#" >【新津】城南纯居大盘新品将推 领地天府蘭台看点解</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--第五个盒子结束-->
        <!--第六个盒子开始-->
        <div class="box6-cont">
          <img src="https://pic1.ajkimg.com/material/get/4ce46305cc20c6cdd4dbdfd6870a3235.jpg" alt="">
        </div>
        <!--第六个盒子结束-->
        <!--第七个盒子开始-->
        <div class="box7-cont">
          <p target="_blank" title="二手房推荐小区" alt="二手房推荐小区" href="https://chengdu.anjuke.com/community/" _soj="proprec">二手房推荐小区&nbsp;&gt;</p>
          <div class="ershourecomm">
            <!--上部分开始-->
            <div class="com-rec">
             <!--11-->
                <div class="com-recbox">
                  <h3 class="com-rec-title">超人气小区</h3>
                  <div class="box7-img">
                    <div class="box7-tops">
                      <img src="https://pic1.ajkimg.com/display/anjuke/6b0f4a7ccc1d8dae99755030cefff7c6/180x135c.jpg" alt="">
                      <div class="title-house">
                        <dl>
                          <dt>
                            新都 - 汉嘉国际社区
                          </dt>
                          <dd>
                            13522元/m²
                          </dd>
                        </dl>
                        <dl>
                          <dt>
                            龙泉驿 - 龙城1号
                          </dt>
                          <dd>
                            19409元/m²
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              <!--22-->
              <div class="com-recbox">
                <h3 class="com-rec-title">最舒适小区</h3>
                <div class="box7-img">
                  <div class="box7-tops">
                    <img src="https://pic1.ajkimg.com/display/anjuke/c1ab6c31a6f7684b44d8060e6924044a/180x135c.jpg" alt="">
                    <div class="title-house">
                      <dl>
                        <dt>
                          都江堰 - 龙湖小院青城
                        </dt>
                        <dd>
                          19829元/m²
                        </dd>
                      </dl>
                      <dl>
                        <dt>
                          龙泉驿 - 龙城1号
                        </dt>
                        <dd>
                          12071元/m²
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--上部分结束-->
            <!--下部分开始-->

              <ul class="box7-bottom">
                <!--11-->
                <li>
                  <h3>交通便利</h3>
                  <dl>
                    <dt>
                      高新区 - 新港国际花园
                     </dt>
                    <dd>
                      17339元/m²
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      锦江 - 蜀都花园
                    </dt>
                    <dd>
                      16741元/m²
                    </dd>
                  </dl>
                </li>
                <!--22-->
                <li>
                  <h3>商业繁华</h3>
                  <dl>
                    <dt>
                      龙泉驿龙泉驿 - 龙府花园

                    </dt>
                    <dd>
                      10824元/m²
                    </dd>
                  </dl>
                  <dl>
                    <dt>锦江 - 城市理想
                    </dt>
                    <dd>
                      30922元/m²
                    </dd>
                  </dl>
                </li>
                <!--33-->
                <li>
                  <h3>高端小区</h3>
                  <dl>
                    <dt>青羊 - 金悦湾
                    </dt>
                    <dd>
                      28889元/m²
                    </dd>
                  </dl>
                  <dl>
                    <dt>新津 - 牧山丽景
                    </dt>
                    <dd>
                      16316元/m²
                    </dd>
                  </dl>
                </li>
                <!--44-->
                <li>
                  <h3>大型小区</h3>
                  <dl>
                    <dt>天府新区 - 佳兆业君...
                    </dt>
                    <dd>
                      16363元/m²
                    </dd>
                  </dl>
                  <dl>
                    <dt>新都 - 佳乐国际城二期
                    </dt>
                    <dd>
                      11927元/m²
                    </dd>
                  </dl>
                </li>
              </ul>
            <!--下部分结束-->
          </div>
        </div>
        <!--第七个盒子结束-->
      </div>
     <!--主页左边内容结束-->
      
      <!-- 主页右边盒子内容开始-->
      <div class="content-rt">
        <!-- 免费发布房源开始 -->
        <div class="entrusthouse-cont1">
          <img src="https://pages.anjukestatic.com/usersite/site/img/home/1/Entrusthouse-bg-v4.jpg" alt="">
          <span>我要卖房</span>
          <span>>>我要估价</span>
        </div>
        <!-- 免费发布房源结束 -->
        <!-- 特色楼盘开始 -->
        <div class="rt-cont-wrap">
          <a title="特色楼盘" target="_blank" alt="特色楼盘" href="#">特色楼盘&nbsp;&gt;</a>
          <div class="specialprop-cont">
            <!-- 111 -->
            <div class="m-b-s-title">
              <a title="品牌开发商" alt="品牌开发商" href="#" target="_blank" >品牌开发商</a>
              <p>
              <i class="p-one">中旅名门府</i>
              <i class="p-two">售价待定</i>
            </p>
              <br>
              <p>
                <i class="p-one">花漾锦江</i>
                <i class="p-two">30000元/m²</i>
              </p>
              <br>
              <p>
                <i class="p-one">中南海棠集</i>
                <i class="p-two">12400元/m²</i>
              </p>
            </div>
            <!--222-->
            <div class="m-b-s-title">
              <a title="品牌开发商" alt="品牌开发商" href="#" target="_blank" >品牌开发商</a>
              <p>
                <i class="p-one">中旅名门府</i>
                <i class="p-two">售价待定</i>
              </p>
              <br>
              <p>
                <i class="p-one">花漾锦江</i>
                <i class="p-two">30000元/m²</i>
              </p>
              <br>
              <p>
                <i class="p-one">中南海棠集</i>
                <i class="p-two">12400元/m²</i>
              </p>
            </div>
          <!--333-->
            <div class="m-b-s-title">
              <a title="品牌开发商" alt="品牌开发商" href="#" target="_blank" >品牌开发商</a>
              <p>
                <i class="p-one">中旅名门府</i>
                <i class="p-two">售价待定</i>
              </p>
              <br>
              <p>
                <i class="p-one">花漾锦江</i>
                <i class="p-two">30000元/m²</i>
              </p>
              <br>
              <p>
                <i class="p-one">中南海棠集</i>
                <i class="p-two">12400元/m²</i>
              </p>
            </div>
          </div>
        </div>
        <!-- 特色楼盘结束 -->
        <!-- 新房动态开始 -->
        <div class="rt-newhouse">
          <a title="新房动态" alt="新房动态" target="_blank" href="#" _soj="HP_KFS">新房动态&nbsp;&gt;</a>
          <div class="newdynamic-cont">
            <ui class="newhouse-list1">
            <li v-for="(items,index) in newhouselist1" :key="index">{{items}}</li>
          </ui>
            <ui class="newhouse-list2">
              <li v-for="(items,index) in newhouselist2" :key="index">{{items}}</li>
            </ui>
          </div>
        </div>
        <!-- 新房动态结束 -->
        <!-- 广告图片开始 -->
        <div class="ad-imgs">
          <img src="https://pic1.ajkimg.com/display/xinfang/c9e2ce1ba7a9ab57df35c38c0664396b/285x95n.jpg" alt="">
        </div>
        <!-- 广告图片结束 -->
        <!-- 房价趋势开始 -->
        <div class="prices-trend">
          <a target="_blank" title="房价趋势" alt="房价趋势" href="#" >房价趋势&nbsp;&gt;</a>
          <div class="pricetrend">
            <dl>
              <dt>6月均价：</dt>
              <dd>
                <span>13514</span>元/
                <em>m²</em>
              </dd>
            </dl>
            <dl>
              <dt>环比5月：</dt>
              <dd class="color-orange">
                上升<span >0.70</span>%
              </dd>
            </dl>
            <dl>
              <dt>同比去年同期：</dt>
              <dd class="color-orange">
                上涨<span>3.05</span>
                %</dd>
            </dl>
            <img src="https://chengdu.anjuke.com/v3/chart/pricetrend/W0QQcodeZ0900QQhZ197QQtZ1QQwZ245" alt="">
            <p class="pricetrend-p">本站”均价”数据统计自物业顾问发布的数据</p>
          </div>
        </div>
        <!-- 房价趋势结束 -->
        <!-- 房产问答开始 -->
        <div class="housing-quan">
          <a target="_blank" title="房产问答" alt="房产问答" href="#">房产问答&nbsp;&gt;</a>
          <div class="houseqa">
            <ul>
              <li v-for="(items,index) in houseqa" :key="index">
                {{items}}
              </li>
            </ul>
            <a title="我要提问" alt="我要提问" href="#" target="_blank" class="houseqa-cont-btn" >我要提问</a>
          </div>
        </div>
        <!-- 房产问答结束 -->
      </div>
      <!--主页右边盒子内容结束-->
<router-view></router-view>
    </div>
  </div>
</template>

<script>
  import net from "@/tools/net.js"
  export default {
    name: "Homecontent",
    data() {
      return {
        net:net,
        arr2:[],
        arr3:[],
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        mylist: '',
        boxlfbar: ['买房', '卖房', '租房', '商铺写字楼'],
        //第1个盒子
        floatlcity: ['龙泉驿', '郫都', ' 温江 ', '成华 ', ' 双流 ', '高新区', '新都', '锦江 ', '青羊', ' 天府新区', '武侯 ', ' 金牛 ', '都江堰', '金堂', '青白江', '彭州'],
        cityprice: ['40-50万', ' 50-60万', '60-80万', '80-100万'],
        floatlcity1: [' 金牛', '青羊', '成华', ' 锦江 ', '武侯', '高新', '龙泉驿', '青白江', '新都', '温江', '都江堰', '双流', '郫都', '新津', ' 大邑', '金堂', ' 彭州', '崇州', '天府新区'],
        cityprice1: ['7千以下', ' 7千-1万 ', '1-1.5万', '1.5-2万'],
        //第3个盒子
        hotregion: ['高新区', '武侯', '成华', '青羊', '金牛', '郫都', '龙泉驿', '双流 ', '天府新区', ' 温江', '新都 ', '都江堰', '金堂 '],
        hotplate: ['大源 ', '南延线 ', '红牌楼 ', '华阳 ', '航空港', '犀浦 ', '龙泉驿', ' 红光', '外双楠 ', '中和', '高新西区', '东升'],
        //第四个盒子
        bottomleft1: ['高新', '锦江', '金牛', '武侯', '青羊', '成华', '双流', '郫县', '龙泉驿', '温江', '周边市区'],
        bottomright1: ['中和镇', '南延线', '世纪城', '孵化园', '金融城', '春熙路', '新会展', '东大街', '外双楠', '高新西区', '桐梓林', '大源', '红牌楼', '盐市口', '顺城街'],
        //主页右边新房动态数据
        newhouselist1:[' 光明蓉府价格待定',' 龙湖上城均价约19000-220','保利熙园346套房源已取证','嘉裕第六洲观澜云邸清水交付，房源','恒大西辰绿洲装修房在售户型98'],
        newhouselist2:['领地天府蘭台在售房源价格9699',' 中旅名门府将推建面约100-13','恒大御景半岛在售户型建筑面积','乐视界广场124-132㎡户型在','炎华置信花千集中心临街商铺118'],
        //主页右边盒子房产问答
        houseqa:['2019二手房交易需缴纳哪些税费','2000年的房子，贷款最多能贷...','商住两用商贷，能提取住房公积金...','外地人在合肥市买房条件一次付款...','绿化率是什么意思','绿化率是什么意思','怎么挑选房子地段']
      }
    },
    methods: {
      boxshow(index) {
        // console.log(index);
        this.mylist = index
      }
    },
    created() {
      let that = this;
      // 主页左边第二个盒子的数据请求
      this.net.get('Homelftwo',{},
        function (hometwo){
          // console.log(hometwo.data)
           that.arr2=hometwo.data
           let length =that.arr2.lengthl;
          // for (let i = 0; i< arr2.length; i++) {
          //   that.arr2[i] = ;
          // }
        })
      // 主页左边第三个盒子的数据请求
      this.net.get('Homelfthree',{},
        function (homethree){
          // console.log(homethree.data)
           that.arr3=homethree.data
        })  
    }
  }
</script>

<style scoped>
  @import 'homecontent.css';
</style>
