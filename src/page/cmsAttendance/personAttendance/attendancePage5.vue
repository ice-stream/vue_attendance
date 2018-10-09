<template>
  <div style="margin: 25px">
    <el-card style="height: 800px">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 30px">>
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>考勤系统</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/staff' }">个人考勤</el-breadcrumb-item>
        <el-breadcrumb-item>我的班次</el-breadcrumb-item>
      </el-breadcrumb>
      <el-form  :inline="true" size="small" :model="formline" label-width="90px">
        <el-form-item label="查询日期">
          <el-date-picker
            v-model="formline.startDate"
            type="date"
            format="yyyy-MM-dd"
            placeholder="开始日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="至" label-width="25px">
          <el-date-picker
            v-model="formline.endDate"
            type="date"
            format="yyyy-MM-dd"
            placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search()">查询</el-button>
        </el-form-item>


      </el-form>

      <div style="height: 30px"></div>
      <el-table  :data="tableData" border highlight-current-row style="width: 100%">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column  prop="classPeriodId" label="班次编号" width="100"></el-table-column>
        <el-table-column  prop="userName" label="用户名" width="200"></el-table-column>
        <el-table-column  prop="className" label="班次名" width="200"></el-table-column>
        <el-table-column  prop="goToWorkTime" label="上班时间" width="200"></el-table-column>
        <el-table-column  prop="timeFromWork" label="下班时间" width="200"></el-table-column>
        <el-table-column  prop="startChargeTime" label="上班打卡时间" width="200"></el-table-column>
        <el-table-column  prop="endChargeTime" label="下班打卡时间" width="200"></el-table-column>
        <el-table-column  prop="classDate" label="班次时间" width="200"></el-table-column>
      </el-table>
      <el-pagination @current-change="handleCurrentChange" background layout="prev, pager, next":total="total">
      </el-pagination>




    </el-card>

  </div>
</template>

<script>


  function getHoursTime(date) {
    if(date==""){return null}
    var newDate = new Date(date);
    var year = newDate.getFullYear();
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    var  hours=newDate.getHours();
    var  minute=newDate.getMinutes();
    var  seconds=newDate.getSeconds();
    return year + "-" + month + "-" + day+":"+hours+":"+minute+":"+seconds;
  }
  function getDateTime(date) {
    if(date==""){return null}
    var newDate = new Date(date);
    var year = newDate.getFullYear();
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    return year + "-" + month + "-" + day;
  }
  export default {

    data() {
      return {
        dialogName:'aa',
        checkList: ['',],
        tableData: [{

        }],

        formline: {
          startDate: '',
          endDate:'',
          page:1,
          total:0,
          uid:''
        },

        form: {
          username: '',
          classname:'',
          startTime:'',
          endTime:'',
          startTimeCard:'',
          endTimeCard:'',
          userId:''
        },

        value: '',
        revise:false,
        add: false,
        addWidth: '120px',

      }
    },
    methods:{

      //分页
      handleCurrentChange(val){
        this.page = val;
        this.search();
      },

      search:function () {


        var user = sessionStorage.getItem('user');
        if (user) {
          user= JSON.parse(user);
        }
        var formData={
          startDate:getDateTime(this.formline.startDate),
          endDate:getDateTime(this.formline.endDate),
          pageIndex:this.page,
          uid: user.uid
        }
        var qs = require('querystring')
        var _self = this;
        this.$ajax.post('/cms-attendance-web/selectMyClass',
          qs.stringify(formData)).then(function(result){
          var list = result.data.list;
          _self.total=result.data.page.record*10;
          for(var i=0;i<list.length;i++) {
            list[i].classDate = getDateTime(list[i].classDate);
          }
          _self.tableData=result.data.list;
        })
      }


    }




  }
</script>

<style>
  .el-checkbox+.el-checkbox {
    margin-right: 20px;
    margin-left: 0px;
  }
</style>
