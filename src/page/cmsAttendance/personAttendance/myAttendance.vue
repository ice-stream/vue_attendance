<template>
  <div style="margin: 25px">
    <el-card style="height: 800px">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 40px">>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>人事管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">个人考勤</el-breadcrumb-item>
        <el-breadcrumb-item>签到页面</el-breadcrumb-item>
      </el-breadcrumb>

      <div>
        <el-form  :inline="true" size="small" :model="formline" label-width="90px">
          <el-form-item>
            <el-button type="primary" @click="search()"size="medium" >查询</el-button>
          </el-form-item>

        </el-form>
        <full-calendar class="test-fc" :events="fcEvents"
                       first-day='1' locale="fr"
                       @changeMonth="changeMonth"
                       @eventClick="eventClick"
                       @dayClick="dayClick"
                       @moreClick="moreClick">
        </full-calendar>
      </div>




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







  export default {
    data () {

      return {

        name:'admin',
        fcEvents : [{
          title    : '',
          start    : '',
          end      : '',
          cssClass : ''
        },],


        uid:'',
      }

    },
    methods : {

      search:function () {

        /*         this.fcEvents[0].title="assss";
         this.fcEvents[0].start="2018-06-04"*/




        var user = sessionStorage.getItem('user');
        if (user) {
          user= JSON.parse(user);
        }

        var formData={
          uid: user.uid

        }
        var qs = require('querystring')
        var _self = this;
        this.$ajax.post('/cms-attendance-web/selectAskforleaveById',
          qs.stringify(formData)).then(function(result){
          var list = result.data.list;
          for(var i=0;i<list.length;i++){
            _self.fcEvents [i].start = getHoursTime(list[i].startDate);
            _self.fcEvents [i].end = getHoursTime(list[i].endDate);
            _self.fcEvents [i].title= list[i].remark;

          }
          console.log(list);
          console.log(_self.fcEvents [0].start)

          /* _self.demoEvents[0].start ="2018-08-25";
           _self.demoEvents[0].end  ="2018-09-25";
           _self.demoEvents[0].title  ="youbing";
           */
        })
      },

      /*'changeMonth' (start, end, current) {
       console.log('changeMonth', start.format(), end.format(), current.format())
       },*/
      /*
       'eventClick' (event, jsEvent, pos) {
       console.log('eventClick', event, jsEvent, pos)
       },
       'dayClick' (day, jsEvent) {
       console.log('dayClick', day, jsEvent)
       },
       'moreClick' (day, events, jsEvent) {
       console.log('moreCLick', day, events, jsEvent)
       }*/
    },
    components : {
      'full-calendar': require('vue-fullcalendar')
    }

  }
</script>
<style >
  .app{
    color:green;
  }
</style>
