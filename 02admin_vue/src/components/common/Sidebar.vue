<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
                 text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
        <!-- 主页侧边栏start-->
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
                 text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items0">
                <template >
                    <el-submenu :index="item.index" :key="item.index" v-if="item.subs">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-menu-item :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
            </template>
        </el-menu>
            <!--主页侧边栏end-->
            <!-- 新房侧边栏start-->
        <!-- <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
                 text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items1">

                <template >
                    <el-submenu :index="item.index" :key="item.index" v-if="item.subs">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-menu-item :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
            </template>
        </el-menu> -->
            <!--新房侧边栏end-->
            <!-- 楼讯侧边栏start-->
            <!-- <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
                     text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
                <template v-for="item2 in items2">
              
                    <template >
                        <el-submenu :index="item2.index" :key="item2.index" v-if="item2.subs">
                            <template slot="title">
                                <i :class="item2.icon"></i><span slot="title">{{ item2.title }}</span>
                            </template>
                            <template v-for="subItem in item2.subs">
                                <el-menu-item :index="subItem.index" :key="subItem.index">
                                    {{ subItem.title }}
                                </el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                </template>
            </el-menu> -->
            <!--楼讯侧边栏end-->
            <!-- 热门活动侧边栏start-->
            <!-- <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
                     text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
                <template v-for="item3 in items3">
                    <template >
                        <el-submenu :index="item3.index" :key="item3.index" v-if="item3.subs">
                            <template slot="title">
                                <i :class="item3.icon"></i><span slot="title">{{ item3.title }}</span>
                            </template>
                            <template v-for="subItem in item3.subs">
                                <el-menu-item :index="subItem.index" :key="subItem.index">
                                    {{ subItem.title }}
                                </el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                </template>
            </el-menu> -->
            <!--热门活动侧边栏end-->
            <!-- 海外地产侧边栏start-->
            <!-- <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
                     text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
                <template v-for="item4 in items4">
                    <template >
                        <el-submenu :index="item4.index" :key="item4.index" v-if="item4.subs">
                            <template slot="title">
                                <i :class="item4.icon"></i><span slot="title">{{ item4.title }}</span>
                            </template>
                            <template v-for="subItem in item4.subs">
                                <el-menu-item :index="subItem.index" :key="subItem.index">
                                    {{ subItem.title }}
                                </el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                </template>
            </el-menu> -->
            <!-- 海外地产侧边栏end -->
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                // 主页页面
                  items0: [
                    {
                        icon: 'el-icon-lx-calendar',
                        index: '3',
                        title: '主页',
                        subs: [
                            {
                                index: 'form',
                                title: '热门楼盘添加'
                            },
                            //  {
                            //     index: 'form',
                            //     title: '热门导购添加'
                            // },
                              {
                                icon: 'el-icon-lx-cascades',
                                index: 'table',
                                title: '热门楼盘表格'
                            },
                            // {
                            //     icon: 'el-icon-lx-cascades',
                            //     index: 'table',
                            //     title: '热门导购表格'
                            // },
                        ]
                    },
                ],
                //新房侧边栏数据
                items1: [
                    {
                        icon: 'el-icon-lx-calendar',
                        index: '3',
                        title: '新房',
                        subs: [
                            {
                                index: 'form',
                                title: '新房添加表单'
                            },
                            {
                                icon: 'el-icon-lx-cascades',
                                index: 'table',
                                title: '新房基础表格'
                            },
                        ]
                    },
                ],
                //楼讯侧边栏数据
                items2: [
                    {
                        icon: 'el-icon-lx-calendar',
                        index: '3',
                        title: '楼讯',
                        subs: [
                            {
                                index: 'form',
                                title: '楼讯添加表单'
                            },
                            {
                                icon: 'el-icon-lx-cascades',
                                index: 'table',
                                title: '楼讯基础表格'
                            },
                        ]
                    },
                ],
                // 热门活动侧边栏数据
                items3: [
                    {
                        icon: 'el-icon-lx-calendar',
                        index: '3',
                        title: '热门活动',
                        subs: [
                            {
                                index: 'form',
                                title: '热门活动添加表单'
                            },
                            {
                                icon: 'el-icon-lx-cascades',
                                index: 'table',
                                title: '热门活动基础表格'
                            },
                        ]
                    },
                ],
                //
                // 海外地产侧边栏数据
                items4: [
                    {
                        icon: 'el-icon-lx-calendar',
                        index: '3',
                        title: '海外地产活动',
                        subs: [
                            {
                                index: 'form',
                                title: '海外地产添加表单'
                            },
                            {
                                icon: 'el-icon-lx-cascades',
                                index: 'table',
                                title: '海外地产基础表格'
                            },
                        ]
                    },
                ],
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
