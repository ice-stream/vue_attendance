import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
//路由配置


import login from '@/page/login.vue'
import home from '@/page/Home.vue'

import attendance from '@/page/cmsAttendance/index.vue'
import top from '@/page/cmsAttendance/personAttendance/top.vue'
import attendancepage0 from '@/page/cmsAttendance/personAttendance/attendancepage0.vue'
import attendancepage1 from '@/page/cmsAttendance/personAttendance/attendancepage1.vue'
import attendancepage2 from '@/page/cmsAttendance/personAttendance/attendancepage2.vue'
import attendancepage3 from '@/page/cmsAttendance/personAttendance/attendancepage3.vue'
import attendancepage4 from '@/page/cmsAttendance/personAttendance/attendancepage4.vue'
import attendancepage5 from '@/page/cmsAttendance/personAttendance/attendancepage5.vue'
import personCard from '@/page/cmsAttendance/personAttendance/personCard.vue'


import myAttendance from '@/page/cmsAttendance/personAttendance/myAttendance.vue'
import myRetroactive from '@/page/cmsAttendance/personAttendance/myRetroactive.vue'
import manageInfo from '@/page/cmsAttendance/dealWith/manageInfo.vue'

import arrangeClass from '@/page/cmsAttendance/dealWith/arrangeClass.vue'
import DealRetroactive from '@/page/cmsAttendance/dealWith/DealRetroactive.vue'
import scheduling from '@/page/cmsAttendance/attendanceSetting/scheduling.vue'
import staff from '@/page/cmsAttendance/staff/staff.vue'
import  myLine from '@/page/cmsAttendance/patrol/myLine.vue'
import  myPatrol from '@/page/cmsAttendance/patrol/myPatrol.vue'
import  dealPage0 from '@/page/cmsAttendance/dealWith/dealPage0.vue'
import  dealPage1 from '@/page/cmsAttendance/dealWith/dealPage1.vue'
import  dealPage2 from '@/page/cmsAttendance/dealWith/dealPage2.vue'
import  dealPage3 from '@/page/cmsAttendance/dealWith/dealPage3.vue'

import  dealtop from '@/page/cmsAttendance/dealWith/dealtop.vue'

import  patLogin from '@/page/cmsAttendance/patrol/patLogin.vue'
import  sigin from  '@/page/cmsAttendance/personAttendance/sigin.vue'
import  patrolSearch from  '@/page/cmsAttendance/patrol/patrolSearch.vue'



import power from '@/page/powerPublic/index.vue'
import powerIndex from '@/page/powerPublic/power.vue'
import post from '@/page/powerPublic/post.vue'
import  powerEdit from  '@/page/powerPublic/powerEdit/edit.vue'
import  page0 from '@/page/powerPublic/powerEdit/page0.vue'
import  page1 from '@/page/powerPublic/powerEdit/page1.vue'

Vue.use(Router)
Vue.prototype.$ajax = Axios

export default new Router({
  routes: [
    { path: '', component: login,},
    { path: '/home', component: home,
      children:[
        {
          path: '/power', component: power,
          children:[
            {path:'',component:powerIndex},
            {path: '/powerEdit', component: powerEdit,
              children:[
                {path:'',component :page0},
                {path:'/page0',component :page0},
                {path:'/page1',component :page1},
              ]},
            {path: '/post', component: post,},
          ]
        },{
          path: '/staff', component: attendance,
          children:[
            {path: '', component: staff,},
          ]
        },
        {
          path: '/personAttendance', component: attendance,
          children:[
            {path: '/deal', component: dealtop,
              children:[
                {path: '', component: dealPage0,},
                {path: '/dealPage0', component: dealPage0},
                {path: '/dealPage1', component: dealPage1},
                {path: '/dealPage2', component: dealPage2},
                {path: '/dealPage3', component: dealPage3},
              ]},
          ]
        },
        {
          path: '/personAttendance', component: attendance,
          children:[
            {path: '', component: top,
              children:[
                {path: '', component: attendancepage0,},
                {path: '/attendancepage0', component: attendancepage0},
                {path: '/attendancepage1', component: attendancepage1},
                {path: '/attendancepage2', component: attendancepage2},
                {path: '/attendancepage3', component: attendancepage3},
                {path: '/attendancepage4', component: attendancepage4},
                {path: '/attendancepage5', component: attendancepage5},

              ]},
          ]
        },

        {
          path: '/personAttendance', component: attendance,
          children:[

            {path: '/myAttendance', component: myAttendance},
            {path: '/myRetroactive', component: myRetroactive},
            {path: '/manageInfo', component: manageInfo,},
            {path: '/arrangeClass', component: arrangeClass,},
            {path: '/DealRetroactive', component: DealRetroactive,},
            {path: '/myLine', component: myLine,},
            {path: '/myPatrol', component: myPatrol,},
            {path: '/personCard', component:personCard},
            {path: '/patLogin', component:patLogin},
            {path: '/sigin', component:sigin},
            {path: '/patrolSearch', component:patrolSearch},
          ]
        },

      ]
    },


  ]


})
