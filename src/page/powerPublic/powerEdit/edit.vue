<template>
  <div class="editTo">
    <h1 style="margin-top: 20px;">用户权限编辑</h1>
    <hr style="margin-top: 15px; margin-bottom: 15px">
    <el-tabs  class="tab" @tab-click="edit">
      <el-tab-pane label="修改信息"></el-tab-pane>
      <el-tab-pane label="权限设置"></el-tab-pane>
    </el-tabs>
    <div style="height: 20px;width: 100%;"></div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
    export default {
        methods:{
          edit(tab,event){
            this.$router.push('/page'+tab.index);
          }
        }
    }
</script>

<style>
  .editTo.el-tabs__item{padding: 0 40px}
</style>
