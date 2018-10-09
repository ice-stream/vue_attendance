<template>
  <div class="page0" >
    <el-card style="height: 600px">
      <el-form  :inline="true" size="small" label-width="90px">
        <p class="text">基本信息</p>
        <el-form-item  label="姓名：">
          <el-input  class="input1"  placeholder="姓名"  clearable></el-input>
        </el-form-item>
        <el-form-item  label="职位：">
          <el-input  class="input1"  placeholder="职位"  clearable></el-input>
        </el-form-item>
        <el-form-item  label="部门：">
          <el-input  class="input1"  placeholder="部门"  clearable></el-input>
        </el-form-item>
        <el-form-item  label="兼职职位：">
          <el-input  class="input1"  placeholder="兼职职位"  clearable></el-input>
        </el-form-item>
        <el-form-item  label="状态：">
          <el-input  class="input1"  placeholder="状态"  clearable></el-input>
        </el-form-item>
        <el-form-item  label="性别：">
          <el-radio v-model="radio" label="1">男</el-radio>
          <el-radio v-model="radio" label="2">  女</el-radio>
        </el-form-item>
        <div style="height: 20px"></div>
        <p class="text">登陆信息</p>
        <el-form-item  label="登陆账户：">
          <el-input  class="input1"  placeholder="登陆账户"  clearable></el-input>
        </el-form-item>
        <el-form-item  label="密码：">
          <el-input  class="input1"  placeholder="密码"  clearable></el-input>
        </el-form-item>
        <div style="height: 20px"></div>
        <p class="text" style="">其他信息</p>
        <el-form-item  label="手机：">
          <el-input  class="input1"  placeholder="手机"  clearable></el-input>
        </el-form-item>
        <el-form-item  label="办公电话：">
          <el-input  class="input1"  placeholder="办公电话"  clearable></el-input>
        </el-form-item>
        <el-form-item  label="邮箱：">
          <el-input  class="input1"  placeholder="邮箱"  clearable></el-input>
        </el-form-item>
        <div style="height: 30px"></div>
        <el-form-item>
          <el-button type="primary">保存</el-button>
          <el-button type="primary">返回</el-button>
          <el-button type="danger">关闭</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
    export default {
      data:function () {
        return {
          radio: '1',
          form: {
            name: '',
            region: '',
          }
        }
      }
    }
</script>

<style>
  .page0 .text{
    margin-bottom: 15px;
    color: #5e6d82
  }
  .page0 .input1{
    width: 200px
  }
</style>
