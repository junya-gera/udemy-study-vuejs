import Vue from 'vue'
import App from './App.vue'
import store from './store'
import home from './components/home'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App), // App.vueがオブジェクトになってrender関数
  // render: function(h){   // 7行目と一緒
    // return h(App)
//   }
}).$mount('#app')
