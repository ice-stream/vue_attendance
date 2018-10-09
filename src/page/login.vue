<template>
  <div id="login">
    <el-row class="tac">
      <el-col :span="8">
        <h1>登陆页面</h1>
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="username" >
            <el-input type="text"   v-model="ruleForm.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <router-link :to="{ path: 'registration'}">
              <el-button type="text">注册</el-button>
            </router-link>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ruleForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      //  提交按钮事件

      submitForm (formName) {
        this.$router.push({path: '/home'});
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let _this = this;
            var data = {
              username:_this.ruleForm.username,
              password:_this.ruleForm.password
            }
            var qs = require('querystring')

            this.$ajax.post('/cms-attendance-web/login',qs.stringify(data),{emulateJSON:true})
              .then((response) => {

                if (response.data.status == 200) {
                  this.$router.push({path: '/home'});

                  sessionStorage.setItem('user', JSON.stringify(response.data.user));
                  sessionStorage.setItem('userName', response.data.username);

                  this.$message.success('登陆成功！')

                  //  跳转到登录成功页

                } else if (response.data.status == 500) {
                  this.$message.success('密码错误，请重新输入！')
                } else if (response.data.status == 400) {
                  this.$message.success('用户名错误，用户不存在！')
                }else {
                  this.$message.success('系统错误！')
                }
              })
          } else {
            console.log('error submit!!')
            return false
          }
        })

      },

      // 重置按钮事件
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style>
  #login{
    width:100%;
    height:200px;
    position:absolute;
    left:40%;
    top:50%;
    margin:-100px 0 0 -150px
  }
</style>
