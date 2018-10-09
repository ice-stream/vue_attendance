<template>
  <div class="powerList">
    <el-table
      :data="tableData"
      border
      highlight-current-row
      style="width: 100%">
      <el-table-column type="selection" width="55">
      </el-table-column>

      <el-table-column
        prop="name"
        label="姓名"
        width="200">
      </el-table-column>

      <el-table-column
        prop=""
        label="职位"
        width="200">
      </el-table-column>

      <el-table-column
        prop=""
        label="部门"
        width="200">
      </el-table-column>

      <el-table-column
        prop=""
        label="岗位"
        width="180">
      </el-table-column>

      <el-table-column
        prop=""
        label="兼职职位"
        width="300">
      </el-table-column>

      <el-table-column
        prop="address"
        label="状态"
        width="120">
      </el-table-column>

      <el-table-column
        prop="sex"
        label="性别"
        width="100">
      </el-table-column>

      <el-table-column
        prop=""
        label="操作">
        <template slot-scope="scope ">
          <el-button   size="medium"  @click="edit" >编辑</el-button>
          <el-button size="mini" type="danger" @click="">禁用</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div  style="position: absolute;left:50%;top:92%;margin-left:-100px;float: none; ">
      <el-pagination background layout="prev, pager, next" :total="200">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          editShow:true,


          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '正常'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '正常'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '正常'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '正常'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '正常'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '正常'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '正常'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '正常'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '正常'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '正常'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '正常'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '正常'
          }]
        }
      },

      methods:{
        edit:function () {
          this.$router.push({path: '/powerEdit'});
        }

      }
    }
</script>

<style scoped>

</style>
