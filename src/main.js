import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import './styles/quasar.styl'
import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'
import Quasar from 'quasar'

Vue.use(Quasar, {
  config: {}
 })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
