<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header">
      <el-row>
        <el-col :span="24">
          <el-menu default-active="0" class="el-menu-demo" mode="horizontal"  v-bind:router="true" >
            <el-menu-item index="/home">首页</el-menu-item>

            <el-submenu index="2">
              <template slot="title">业主管理</template>
              <el-menu-item index="2-1">业主信息</el-menu-item>
              <el-menu-item index="2-2">装修管理</el-menu-item>
            </el-submenu>

            <el-submenu index="3" >
              <template slot="title">
                人事管理
              </template>
              <el-menu-item index="/staff">员工信息</el-menu-item>
              <el-menu-item index="3-2">合同管理</el-menu-item>

              <el-submenu index="3-3">
                <template slot="title">
                  <span class="templateTest">个人考勤</span>
                </template>
                <el-menu-item index="/staff">考勤首页</el-menu-item>
                <el-menu-item index="/attendancePage0">个人考勤</el-menu-item>
                <el-menu-item index="/myRetroactive">个人补签</el-menu-item>
                <el-menu-item index="/personCard">个人打卡</el-menu-item>

              </el-submenu>

              <el-submenu index="3-4" >
                <template slot="title">
                  <span  class="templateTest">考勤处理</span>
                </template>
                <el-menu-item index="/manageInfo">考勤处理</el-menu-item>
                <el-menu-item index="/dealPage0">考勤处理</el-menu-item>
                <el-menu-item index="/DealRetroactive">补签处理</el-menu-item>
                <el-menu-item index="/arrangeClass">排班</el-menu-item>

              </el-submenu>

              <el-submenu index="3-5">
                <template slot="title">
                  <span class="templateTest">巡岗系统</span>
                </template>
                <el-menu-item index="/myPatrol">巡岗日志</el-menu-item>
                <el-menu-item index="/myLine">巡岗路线</el-menu-item>
                <el-menu-item index="/patLogin">巡岗路线</el-menu-item>
              </el-submenu>


            </el-submenu>

            <el-submenu index="4">
              <template slot="title">财务管理</template>
              <el-menu-item index="4-1">物业费管理</el-menu-item>
              <el-menu-item index="4-2">水费管理</el-menu-item>
              <el-menu-item index="4-3">电费管理</el-menu-item>
              <el-menu-item index="4-4">车位费管理</el-menu-item>
              <el-menu-item index="4-5">票据管理</el-menu-item>
              <el-menu-item index="4-6">收费项设置</el-menu-item>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">工作流程</template>
              <el-submenu index="5-1">
                <template slot="title">
                  <span class="templateTest">流程管理</span>
                </template>
                <el-menu-item index="5-1-2">待办流程</el-menu-item>
                <el-menu-item index="5-1-3">已办流程</el-menu-item>
                <el-menu-item index="5-1-4">流程记录</el-menu-item>
              </el-submenu>

              <el-menu-item index="3-1">发起流程</el-menu-item>
            </el-submenu>

            <el-submenu index="6">
              <template slot="title">用户管理</template>

            </el-submenu>

            <el-submenu index="7">
              <template slot="title">行政办公</template>
            </el-submenu>

            <el-submenu index="8">
              <template  slot="title">系统管理</template>
              <el-menu-item index="/post">岗位管理</el-menu-item>
              <el-menu-item index="8-2">职位管理</el-menu-item>
              <el-menu-item index="8-3">部门管理</el-menu-item>
              <el-menu-item index="/power" >用户权限管理</el-menu-item>
            </el-submenu>

          </el-menu>
        </el-col>
      </el-row>
    </header>
    <div style="position: relative;height: 0px;width: 100%;"></div>
    <!-- 下方展示区 -->
    <main>
      <div style="width: 100%; height:875px;">
        <router-view class="view"></router-view>

      </div>
    </main>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  import ElSubmenu from "element-ui/packages/menu/src/submenu";

  Vue.use(Element)
  export default {
    components: {ElSubmenu},
    name: 'app',
    data: function (){
      return {
        active:true
      }
    }
  }
</script>

<style>

  *{margin: 0px;padding: 0px;}
  body{
    margin: 0;
    overflow:scroll;overflow-y:hidden;
  }
  #app {
    min-width: 1200px;
    margin: 0 auto;
    font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;

  }
  /* 头部导航 */
  header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  border-top: solid 0px #3091F2;  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
  header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
  header .el-menu-demo{padding-left: 300px!important;}

  /* 主内容区 */
  main{    display: -webkit-box;  display: -ms-flexbox;  display: flex; border: solid 12px #E9ECF1;  background-color: #FCFCFC;  }
  main .el-menu{background-color: transparent!important;}
  .templateTest{font-weight: bold;font-size: 15px}
</style>
