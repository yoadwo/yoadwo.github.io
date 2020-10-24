import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import JParticles from 'jparticles'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  JParticles,
  render: h => h(App)
}).$mount('#app')
