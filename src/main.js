import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'
import fullCalendar from 'vue-fullcalendar'

Vue.component('full-calendar', fullCalendar)


import $ from 'jquery'

Vue.use(vueEventCalendar, {locale: 'en'})

Vue.config.productionTip = false;
Vue.prototype.rootUrl = '/cms'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
