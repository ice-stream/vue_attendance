<template>
  <div style="margin: 25px">
    <el-card style="height: 800px">
      <el-row  type="flex" justify="end">
        <el-col :span="3">
          <el-button type="primary" @click="add = add">新增排班</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="warning" @click="revise = true">修改排班</el-button>
        </el-col>
        <el-col >
          <el-button type="danger">删除排班</el-button>
        </el-col>
      </el-row>
      <div style="height: 30px"></div>
      <el-table  :data="tableData" border highlight-current-row style="width: 100%">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column  prop="name" label="编号" width="100"></el-table-column>
        <el-table-column  prop="" label="用户名" width="200"></el-table-column>
        <el-table-column  prop="" label="普通班次" width="200"></el-table-column>
        <el-table-column  prop="" label="上班时间" width="200"></el-table-column>
        <el-table-column  prop="" label="下班时间" width="200"></el-table-column>
        <el-table-column  prop="" label="上班打卡时间" width="200"></el-table-column>
        <el-table-column  prop="" label="下班打卡时间" width="200"></el-table-column>
        <el-table-column  prop="" label="备注" ></el-table-column>
      </el-table>

      <el-dialog title="新增排班" :visible.sync="add" width="35%">
        <el-form :model="form">
          <el-form-item label="排班类型说明：" :label-width="addWidth">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-row type="flex">
            <el-col :span="20">
              <el-form-item label="第1次登记："  :label-width="addWidth">
                <el-time-select
                  v-model="value1" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="20">
              <el-form-item label="第2次登记："  :label-width="addWidth">
                <el-time-select
                  v-model="value1" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="20">
              <el-form-item label="第3次登记："  :label-width="addWidth">
                <el-time-select
                  v-model="value1" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="20">
              <el-form-item label="第4次登记："  :label-width="addWidth">
                <el-time-select
                  v-model="value1" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="20">
              <el-form-item label="第5次登记："  :label-width="addWidth">
                <el-time-select
                  v-model="value1" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="20">
              <el-form-item label="第6次登记："  :label-width="addWidth">
                <el-time-select
                  v-model="value1" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        <div style="height: 15px"></div>
        <h4>公休日</h4>
          <div style="margin-top: 10px;margin-left: 15px">
          <el-checkbox-group v-model="checkList">
            <el-checkbox style="margin-right: 20px" label="星期一"></el-checkbox>
            <el-checkbox label="星期二"></el-checkbox>
            <el-checkbox label="星期三"></el-checkbox>
            <el-checkbox label="星期四"></el-checkbox>
            <el-checkbox label="星期五"></el-checkbox>
            <el-checkbox label="星期六"></el-checkbox>
            <el-checkbox label="星期天"></el-checkbox>
          </el-checkbox-group>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="add = false">取 消</el-button>
          <el-button type="primary" @click="add = false">确 定</el-button>
        </div>
      </el-dialog>


      <el-dialog title="修改排班" :visible.sync="revise" width="35%">
        <el-form :model="form">
          <el-form-item label="排班类型说明：" :label-width="addWidth">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-row type="flex">
            <el-col :span="20">
              <el-form-item label="第1次登记："  :label-width="addWidth">
                <el-time-select
                  v-model="value1" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="20">
              <el-form-item label="第2次登记："  :label-width="addWidth">
                <el-time-select
                  v-model="value1" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="20">
              <el-form-item label="第3次登记："  :label-width="addWidth">
                <el-time-select
                  v-model="value1" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="20">
              <el-form-item label="第4次登记："  :label-width="addWidth">
                <el-time-select
                  v-model="value1" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="20">
              <el-form-item label="第5次登记："  :label-width="addWidth">
                <el-time-select
                  v-model="value1" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="20">
              <el-form-item label="第6次登记："  :label-width="addWidth">
                <el-time-select
                  v-model="value1" :picker-options="{ start: '07:00', step: '00:15', end: '24:00' }" placeholder="选择时间">
                </el-time-select>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <div style="height: 15px"></div>
          <h4>公休日</h4>
          <div style="margin-top: 10px;margin-left: 15px">
            <el-checkbox-group v-model="checkList">
              <el-checkbox style="margin-right: 20px" label="星期一"></el-checkbox>
              <el-checkbox label="星期二"></el-checkbox>
              <el-checkbox label="星期三"></el-checkbox>
              <el-checkbox label="星期四"></el-checkbox>
              <el-checkbox label="星期五"></el-checkbox>
              <el-checkbox label="星期六"></el-checkbox>
              <el-checkbox label="星期天"></el-checkbox>
            </el-checkbox-group>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="add = false">取 消</el-button>
          <el-button type="primary" @click="add = false">确 定</el-button>
        </div>
      </el-dialog>

    </el-card>
  </div>
</template>

<script>



    export default {

      data() {
        return {
          dialogName:'aa',
          checkList: ['',],
          tableData: [{
            name: '早班',
          }],
          options:[{
            value: '1',
            label: '上班'
          },{
            value: '2',
            label: '下班'
          }],
          form: {
            name: '',
          },
          value: '',
          revise:false,
          add: false,
          addWidth: '120px',
          value1: ''
        }
      },

    }
</script>

<style>
  .el-checkbox+.el-checkbox {
    margin-right: 20px;
    margin-left: 0px;
  }
</style>
