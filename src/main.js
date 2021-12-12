import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import "semantic-ui-css/semantic.css"
import router from './Router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')
