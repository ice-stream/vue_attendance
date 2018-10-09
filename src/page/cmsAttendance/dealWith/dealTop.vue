<template>
  <div class="editTo" style="margin: 20px">
    <h2 style="margin-top: 20px; color: #475669">考勤处理</h2>
    <hr style="margin-top: 15px; margin-bottom: 15px">
    <el-tabs  class="tab" @tab-click="aPage" >
      <el-tab-pane label="请假处理"></el-tab-pane>
      <el-tab-pane label="加班处理"></el-tab-pane>
      <el-tab-pane label="出差处理"></el-tab-pane>
      <el-tab-pane label="日志处理"></el-tab-pane>
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
        this.$router.push('/dealPage'+tab.index);
      }
    }
  }
</script>

<style>
</style>
