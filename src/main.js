import Vue from 'vue';
import App from './App';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.prototype.$httpRequest = 'https://user-list-123.herokuapp.com';

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
