import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App),
});

if (module.hot)
  // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef
