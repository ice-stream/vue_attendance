<template>
  <div style="margin: 25px">
    <el-card style="height: 800px">

      <el-row :gutter="20">
        <el-col :span="8">
          <el-row>
            <el-col>
              <el-card shadow="hover" class="mgb20">
                <div class="user-info">
                  <img src="static/img/img.jpg" class="user-avator" alt="">
                  <div class="user-info-cont">
                    <div class="user-info-name">{{name}}</div>
                    <div>{{role}}</div>
                  </div>
                </div>
                <div class="user-info-list">姓名：<span></span></div>
                <div class="user-info-list">密码：<span></span></div>
              </el-card>
              <el-card shadow="hover">
                <div slot="header" class="clearfix">
                  <span></span>
                </div>
                出勤时间
                <el-progress :percentage="57.2" color="#42b983"></el-progress>
                请假
                <el-progress :percentage="29.8" color="#f1e05a"></el-progress>
                加班
                <el-progress :percentage="11.9"></el-progress>
                出差
                <el-progress :percentage="1.1" color="#f56c6c"></el-progress>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="16">
          <el-row :gutter="20" class="mgb20">
            <el-col :span="8">
              <el-card shadow="hover" :body-style="{padding: '0px'}">
                <div class="grid-content grid-con-1">
                  <i class="el-icon-view grid-con-icon"></i>
                  <div class="grid-cont-right">
                    <div class="grid-num">1234</div>
                    <div>出勤时间</div>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover" :body-style="{padding: '0px'}">
                <div class="grid-content grid-con-2">
                  <i class="el-icon-message grid-con-icon"></i>
                  <div class="grid-cont-right">
                    <div class="grid-num">321</div>
                    <div>请假次数</div>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover" :body-style="{padding: '0px'}">
                <div class="grid-content grid-con-3">
                  <i class="el-icon-goods grid-con-icon"></i>
                  <div class="grid-cont-right">
                    <div class="grid-num">5000</div>
                    <div>补签数量</div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-card shadow="hover" :body-style="{ height: '250px'}">
            <div slot="header" class="clearfix">
              <span>去干吗？</span>
            </div>

            <el-row class="tac" >
              <el-col :span="12"  style="width: 1000px;"  >
                <el-menu  router :default-active="$route.path"
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#909399"
                  text-color="#E6A23C"
                  active-text-color="#ffd04b">
                  <el-submenu index="1"  >
                    <template slot="title" >
                      <i class="el-icon-location"></i>
                      <span >个人考勤</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">个人考勤</template>
                      <el-menu-item index="/attendancepage0">个人请假</el-menu-item>
                      <el-menu-item index="/attendancepage1">个人加班</el-menu-item>
                      <el-menu-item index="/attendancepage2">个人日志</el-menu-item>
                      <el-menu-item index="/attendancepage3">个人统计</el-menu-item>
                      <el-menu-item index="/attendancepage4">个人出差</el-menu-item>

                    </el-menu-item-group>
                    <el-menu-item-group title="补签">
                      <el-menu-item index="/myRetroactive">个人补签</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">打卡签到</template>
                      <el-menu-item index="/personCard">打卡签到</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-menu-item index="2" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">考勤处理</span>
                  </el-menu-item>
                  <el-submenu index="3" >
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span >巡岗系统</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">巡岗日志</template>
                      <el-menu-item index="/myPatrol">巡岗日志</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="巡岗路线">
                      <el-menu-item index="/myLine">巡岗路线</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="3-4">
                      <template slot="title">巡岗签到</template>
                      <el-menu-item index="/patLogin">打卡签到</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>













          </el-card>

        </el-col>
      </el-row>

    </el-card>
  </div>


</template>


<script>
  export default {
    data() {
      return {



      }
    },

    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },





    computed: {
      role() {
        return this.name === 'admin' ? '超级管理员' : '普通用户';
      }
    }
  }

</script>


<style scoped>
  .el-row {
    margin-bottom: 20px;
  }

  .grid-content {
    display: flex;
    align-items: center;
    height: 100px;
  }

  .grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #999;
  }

  .grid-num {
    font-size: 30px;
    font-weight: bold;
  }

  .grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
  }

  .grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
  }

  .grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
  }

  .grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
  }

  .grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
  }

  .grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
  }

  .grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
  }

  .user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
  }

  .user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
  }

  .user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
  }

  .user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
  }

  .user-info-list span {
    margin-left: 70px;
  }

  .mgb20 {
    margin-bottom: 20px;
  }


</style>
