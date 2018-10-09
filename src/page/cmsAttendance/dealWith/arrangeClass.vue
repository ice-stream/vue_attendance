<template>
  <div style="margin: 25px">
    <el-card style="height: 800px">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 40px">>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>人事管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">个人考勤</el-breadcrumb-item>
        <el-breadcrumb-item>排班管理</el-breadcrumb-item>
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

        <el-form-item>
          <el-button type="warning" @click="revise = true">新增</el-button>
        </el-form-item>

      </el-form>

      <div style="height: 30px"></div>
      <el-table  :data="tableData" border highlight-current-row style="width: 100%">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column  prop="classPeriodId" label="班次编号" width="100"></el-table-column>
        <el-table-column  prop="userName" label="用户名" width="150"></el-table-column>
        <el-table-column  prop="className" label="班次名" width="150"></el-table-column>
        <el-table-column  prop="goToWorkTime" label="上班时间" width="150"></el-table-column>
        <el-table-column  prop="timeFromWork" label="下班时间" width="150"></el-table-column>
        <el-table-column  prop="startChargeTime" label="上班打卡时间" width="150"></el-table-column>
        <el-table-column  prop="endChargeTime" label="下班打卡时间" width="150"></el-table-column>
        <el-table-column  prop="classDate" label="班次时间" ></el-table-column>

        <el-table-column
          prop=""
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="cancel(scope.row)">删除</el-button>
            <el-button size="mini" type="danger" @click="deal(scope.row)">处理</el-button>
          </template>

        </el-table-column>
      </el-table>
      <el-pagination @current-change="handleCurrentChange" background layout="prev, pager, next":total="total">
      </el-pagination>

      <el-dialog title="排班安排" :visible.sync="revise" width="65%">
        <el-form :model="form">
          <el-form-item label="用户名：" :label-width="addWidth">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-row type="flex">
            <el-col :span="10">
              <el-form-item label="上班时间："  :label-width="addWidth">
                <el-time-select
                  v-model="form.startTime" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>

            <el-col :span="10">
              <el-form-item label="下班时间："  :label-width="addWidth">
                <el-time-select
                  v-model="form.endTime" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row type="flex">
            <el-col :span="10">
              <el-form-item label="上班打卡时间："  :label-width="addWidth">
                <el-time-select
                  v-model="form.startTimeCard" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>

            <el-col :span="10">
              <el-form-item label="下班打卡时间："  :label-width="addWidth">
                <el-time-select
                  v-model="form.endTimeCard" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row type="flex">
            <el-col :span="10">
              <el-form-item label="班次名称：" :label-width="addWidth">
                <el-input v-model="form.classname"></el-input>
              </el-form-item>
            </el-col>

          </el-row>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="revise = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('form')">确 定</el-button>
        </div>
      </el-dialog>

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
        tableData: [{

        }],
        formline: {
          startDate: '',
          endDate:'',
          page:1,
          total:0,
        },

        form: {
          username: '',
          classname:'',
          startTime:'',
          endTime:'',
          startTimeCard:'',
          endTimeCard:''
        },



        value: '',
        revise:false,
        add: false,
        addWidth: '120px',

      }
    },
    methods: {
      //分页
      handleCurrentChange(val){
        this.page = val;
        this.search();
      },

      search:function () {
        var formData={
          startDate:getDateTime(this.formline.startDate),
          endDate:getDateTime(this.formline.endDate),
          pageIndex:this.page,
        }
        var qs = require('querystring')
        var _self = this;
        this.$ajax.post('/cms-attendance-web/selectClass',
          qs.stringify(formData)).then(function(result){
          var list = result.data.list;
          _self.total=result.data.page.record*10;
          for(var i=0;i<list.length;i++){
            list[i].classDate = getDateTime(list[i].classDate);
          }
          _self.tableData=result.data.list;
        })
      },


      submitForm: function (form) {

        var formData = {
          userName: this.form.username,
          className: this.form.classname,
          goToWorkTime:this.form.startTime,
          timeFromWork: this.form.endTime,
          startChargeTime:this.form.startTimeCard,
          endChargeTime:this.form.endTimeCard,

        }

        var qs = require('querystring')
        var _self = this;
        this.$ajax.post('/cms-attendance-web/addClass',
          qs.stringify(formData)).then((response) => {
           _self.revise = false
          if (response.data.num === 1) {
            this.$message.success('提交成功！')
          } else {
            this.$message.success('提交失败！')

          }
        })

      },
      //处理
      deal(row){
        var r = confirm("是否进行处理?");
        if(r==false){return}
        var formData={
          classPeriodId:row.classPeriodId,
        }
        var _self = this;
        var qs = require('querystring');
        this.$ajax.post('/cms-attendance-web/updateClass',
          qs.stringify(formData)).then((response) => {
          self.revise = false
          if (response.data.num === 1) {
            this.$message.success('提交成功！')

          } else {
            this.$message.success('提交失败！')

          }
          _self.search();
        })
      },
      //注销
      cancel(row){
        var r = confirm("是否确认注销?");
        if(r==false){return}
        var formData={
          classPeriodId:row.classPeriodId,
        }
        var _self = this;
        var qs = require('querystring');
        this.$ajax.post('/cms-attendance-web/deleteClass',
          qs.stringify(formData)).thenthen((response) => {
          _self.revise = false
          if (response.data.num === 1) {
            this.$message.success('提交成功！')
          } else {
            this.$message.success('提交失败！')
          }
          _self.search();
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
