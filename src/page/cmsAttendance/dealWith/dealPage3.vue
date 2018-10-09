<template>
  <div style="margin: 25px">
    <el-card style="height: 800px">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 30px">>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>人事管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">个人考勤</el-breadcrumb-item>
        <el-breadcrumb-item>日志处理</el-breadcrumb-item>
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
        <el-table-column  prop="attendanceId" label="编号" width="100" ></el-table-column>
        <el-table-column  prop="userName" label="用户名" width="100" ></el-table-column>
        <el-table-column  prop="attendancedate" label="考勤日志" width="200" ></el-table-column>
        <el-table-column  prop="siginTime" label="签到时间" width="200" ></el-table-column>
        <el-table-column  prop="siginBackTime" label="签退时间" width="200"sortable></el-table-column>
        <el-table-column  prop="isLate" label="是否迟到" width="200" ></el-table-column>
        <el-table-column  prop="isLeaveEarly" label="是否早退" width="200"></el-table-column>
        <el-table-column  prop="isVacation" label="是否假期" ></el-table-column>

        <el-table-column
          prop=""
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="cancel(scope.row)">删除</el-button>
          </template>

        </el-table-column>
      </el-table>

      <el-pagination @current-change="handleCurrentChange" background layout="prev, pager, next":total="total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  import ElForm from "../../../../node_modules/element-ui/packages/form/src/form";


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

    components: {ElForm},
    data() {
      return {
        dialogName:'aa',
        checkList: ['',],
        tableData:[],
        page:1,
        total:0,

        formline: {
          startDate: '',
          endDate:'',
          page:1,
          total:0,



        },
        value: '',
        revise:false,
        add: false,
        addWidth: '120px',
        value1: '',
        value2: ''
      }
    },

    methods: {

      //分页
      handleCurrentChange(val){
        this.page = val;
        this.search();
      },

      search: function () {

        var formData = {
          startDate: getDateTime(this.formline.startDate),
          endDate: getDateTime(this.formline.endDate),
          pageIndex: this.page,
        }
        var qs = require('querystring')
        var _self = this;
        this.$ajax.post('/cms-attendance-web/selectAllAttendance',
          qs.stringify(formData)).then(function (result) {
          var list = result.data.list;
          _self.total = result.data.page.record * 10;
          for (var i = 0; i < list.length; i++) {
            list[i].attendancedate = getDateTime(list[i].attendancedate);
            list[i].siginTime = getHoursTime(list[i].siginTime);
            list[i].siginBackTime = getHoursTime(list[i].siginBackTime);
            if (list[i].isLate == 1) {
              list[i].isLate = "迟到";
            } else {
              list[i].isLate = "没有迟到";
            }

            if (list[i].isLeaveEarly == 1) {
              list[i].isLeaveEarly = "早退";
            } else {
              list[i].isLeaveEarly = "没有早退";
            }

            if (list[i].isVacation == 1) {
              list[i].isVacation = "休假";
            } else {
              list[i].isVacation = "没有休假";
            }

          }
          _self.tableData = result.data.list;
        })
      },

      //注销
      cancel(row){
        var r = confirm("是否确认注销?");
        if (r == false) {
          return
        }
        var formData = {
          attendanceId: row.attendanceId,
        }
        var _self = this;
        var qs = require('querystring');
        this.$ajax.post('/cms-attendance-web/deleteAttendance',
          qs.stringify(formData)).then((response) => {
          _self.revise = false;
          if (response.data.num === 1) {;
            this.$message.success('提交成功！')
          } else {
            this.$message.success('提交失败！')

          }

          _self.search();
        })
      },


    }






  }
</script>

<style>
  .el-checkbox+.el-checkbox {
    margin-right: 20px;
    margin-left: 0px;
  }
</style>
