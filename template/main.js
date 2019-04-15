
import Vue from 'vue'
import App from './App'
import pageUtil from 'vue-gitpage'

Vue.use(pageUtil)

new Vue({
  el: '#app',
  render: h => h(App)
})