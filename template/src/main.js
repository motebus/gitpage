import Vue from 'vue'
import App from './App.vue'
import pageUtil from 'vue-gitpage'

Vue.use(pageUtil)

new Vue({
  render: h => h(App),
}).$mount('#app')
