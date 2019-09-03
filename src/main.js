// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import './common/axiosCon/axiosCon'// axios拦截器
import routes from './router'
import store from './vuex/store'
import _ from 'lodash'
import './common/rem/rem'
import '../aliplayercomponents-1.0.3.min.js'

import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.prototype.axios = axios

const router = new VueRouter({
  routes,
  base: '/OlympicChannel',
  mode: 'history',
  saveScrollPosition: true
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
