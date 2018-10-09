<template>
  <div>
    <div class="left">
        <el-menu default-active="1" class="el-menu-vertical-demo"  v-bind:router="true">
          <el-menu-item index="/post" >岗位管理</el-menu-item>
          <el-menu-item index="/">职位管理</el-menu-item>
          <el-menu-item index="/">部门管理</el-menu-item>
          <el-menu-item index="/power" >用户权限管理</el-menu-item>
        </el-menu>
    </div>

    <div class="right">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>


  </div>
</template>

<style>
  .el-menu{border-right: 0px;}
  .left{float: left;width:10%;text-align: center;}
  .right{float: right;width: 90% }
</style>
