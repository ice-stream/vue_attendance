<template>
  <div class="page1">
    <el-card style="height: 600px">
      <el-form  :inline="true" size="mini" label-width="120px">
        <p class="text">业主管理权限</p>
        <el-form-item  label="业主信息查看：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>
        <el-form-item  label="业主信息编辑：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>
        <el-form-item  label="装修信息查看：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>
        <el-form-item  label="装修信息编辑：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>

        <p class="text">人事管理权限</p>
        <el-form-item  label="员工信息查看：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>
        <el-form-item  label="员工信息编辑：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>
        <el-form-item  label="考勤记录编辑：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>
        <el-form-item  label="考勤设置编辑：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>

        <p class="text">财务管理权限</p>
        <el-form-item  label="资金管理：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>
        <el-form-item  label="资金调动：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>
        <el-form-item  label="历史记录：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>
        <p class="text">办公权限</p>
        <el-form-item  label="工作流程发布：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>
        <el-form-item  label="工作流程管理：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>
        <p class="text">用户管理权限</p>
        <el-form-item  label="用户信息查看：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>
        <el-form-item  label="用户信息编辑：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>
        <p class="text">系统管理权限</p>
        <el-form-item  label="权限信息查看：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>
        <el-form-item  label="权限编辑：">
          <el-switch v-model="power.one"></el-switch>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
    export default {
      data:function () {
        return {
          power: {
            one: false,
          }
        }
      }
    }
</script>

<style>
  .page1{
    max-width: 95%;
    margin: 25px;
    height: 500px;
  }

  .page1 .text{
    margin-bottom: 15px;
    color: #5e6d82
  }
</style>
