<template>
  <div class="editTo" style="margin: 20px">
    <h2 style="margin-top: 20px; color: #475669">考勤记录</h2>
    <hr style="margin-top: 15px; margin-bottom: 15px">
    <el-tabs  class="tab" @tab-click="aPage" >
      <el-tab-pane label="我要请假"></el-tab-pane>
      <el-tab-pane label="我要加班"></el-tab-pane>
      <el-tab-pane label="我的日志"></el-tab-pane>
      <el-tab-pane label="我的统计"></el-tab-pane>
      <el-tab-pane label="我要出差"></el-tab-pane>
      <el-tab-pane label="我的排班"></el-tab-pane>
    </el-tabs>
    <div style="height: 20px;width: 100%;"></div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    data:function () {
      return{

      }
    },
    methods:{
      aPage(tab,event){
        this.$router.push('/attendancePage'+tab.index);
      }
    }
  }
</script>

<style>
</style>
