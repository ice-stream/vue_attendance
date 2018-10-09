<template>
  <div class="statisticsList">
    <el-card   style="height: 800px;margin: 25px">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 30px">>
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>考勤系统</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/staff' }">个人考勤</el-breadcrumb-item>
        <el-breadcrumb-item>我的考勤统计</el-breadcrumb-item>
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
      <div style="height: 25px"></div>
      <el-table :data="tableData"  border highlight-current-row style="width: 100%">
        <el-table-column  prop="attendanceCountId" label="编号" width="100"></el-table-column>
        <el-table-column  prop="userName" label="用户名" width="100"></el-table-column>
        <el-table-column  prop="askforLeaveCount" label="请假（时）" width="100"></el-table-column>
        <el-table-column  prop="overTimeCount" label="加班（时）" width="100"></el-table-column>
        <el-table-column  prop="travelCount" label="出差（时）" width="100"></el-table-column>
        <el-table-column  prop="attendanceCount" label="出勤（时）" width="100"></el-table-column>
        <el-table-column  prop="lateCount" label="迟到（次数）" width="100"></el-table-column>
        <el-table-column  prop="leaveEarlyCount" label="早退（次数）" width="100"></el-table-column>
        <el-table-column  prop="vacationCount" label="假期（次数）" width="100"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
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
          uid:''

        },
      }


    },
    methods:{

      search:function () {
        var user = sessionStorage.getItem('user');
        if (user) {
          user= JSON.parse(user);
        }

        var formData={
          startDate:getDateTime(this.formline.startDate),
          endDate:getDateTime(this.formline.endDate),
          uid: user.uid

        }
        var qs = require('querystring')
        var _self = this;
        this.$ajax.post('/cms-attendance-web/selectCountAskforleave',
          qs.stringify(formData)).then(function(result){
          var list = result.data.list;
          for(var i=0;i<list.length;i++){
            list[i].askforLeaveCount = parseInt((list[i].askforLeaveCount)/(24*60*60));
            list[i].overTimeCount= parseInt((list[i].overTimeCount)/(24*60*60));
            list[i].travelCount= parseInt((list[i].travelCount)/(24*60*60));
            list[i].attendanceCount = parseInt((list[i].attendanceCount )/(24*60*60));
            list[i].lateCount = parseInt((list[i].lateCount))
            list[i].leaveEarlyCount= parseInt((list[i].leaveEarlyCount));
            list[i].vacationCount= parseInt((list[i].vacationCount));

          }
          _self.tableData=result.data.list;

        })


      },

    }




  }
</script>

<style>
</style>
