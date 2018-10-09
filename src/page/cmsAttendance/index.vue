<template>
  <div>
    <div class="left">
        <el-menu default-active="1" class="el-menu-vertical-demo"  v-bind:router="true"  >
          <el-menu-item index="/staff" >员工信息</el-menu-item>
          <el-menu-item index="/">合同管理</el-menu-item>

          <el-submenu index="3" v-show="true" >
            <template slot="title">
              <span class="templateTest" >个人考勤</span>
            </template>
            <el-menu-item index="/staff">考勤首页</el-menu-item>
            <el-menu-item index="/attendancepage0">个人考勤</el-menu-item>
            <el-menu-item index="/myRetroactive">个人补签</el-menu-item>
            <el-menu-item index="/personCard">个人打卡</el-menu-item>
            <el-menu-item index="/sigin">签到查询</el-menu-item>
            <el-menu-item index="/myAttendance">个人查询</el-menu-item>

          </el-submenu>

          <el-submenu index="4" v-show="flag" >
            <template slot="title">
              <span  class="templateTest">考勤处理</span>
            </template>

            <el-menu-item index="/manageInfo">管理首页</el-menu-item>
            <el-menu-item index="/dealPage0">出勤处理</el-menu-item>
            <el-menu-item index="/DealRetroactive">补签处理</el-menu-item>
            <el-menu-item index="/arrangeClass">排班处理</el-menu-item>

          </el-submenu>

          <el-submenu index="5"v-show="true" >
            <template slot="title">
              <span class="templateTest" >巡岗系统</span>
            </template>
            <el-menu-item index="/myPatrol" v-show="flag">巡岗日志</el-menu-item>
            <el-menu-item index="/myLine" v-show="flag">巡岗路线</el-menu-item>
            <el-menu-item index="/patLogin">巡岗签到</el-menu-item>
            <el-menu-item index="/patrolSearch">路线查询</el-menu-item>
          </el-submenu>

        </el-menu>
    </div>

    <div class="right">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {

          uid:'',
          flag:false,
      }
    },


    created() {
      var user = sessionStorage.getItem('user');
      if (user) {
        user = JSON.parse(user);
      }

      var formData = {
        uid: user.uid
      }
      var qs = require('querystring')
      var _self = this;
      this.$ajax.post('/cms-attendance-web/getPermission',
        qs.stringify(formData)).then(function (result) {
        var list = result.data.list;
        for(var i = 0;i<list.length;i++){
          if (list[i].percode=="attendance") {
            _self.flag = true;
            return;
          }
        }
      })
    },














      }








</script>



<style>
  .el-menu{border-right: 0px;}
  .left{float: left;width:15%;text-align: center;}
  .right{float: right;width: 85% }
</style>
