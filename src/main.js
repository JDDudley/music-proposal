import Vue from 'vue'
import App from './App.vue'

import './styles/quasar.styl'
import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'
import Quasar from 'quasar'
import router from './router'

Vue.use(Quasar, {
  config: {}
 })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
