import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Antd from 'ant-design-vue';

import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';

import zh_CN from './lang/cn.js'
import en_US from './lang/en.js'


Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(VueI18n);

const DEFAULT_LANG = 'CN'
const locales = { 
    'CN': zh_CN,
    'EN': en_US
}

export const i18n = new VueI18n({
    locale: DEFAULT_LANG,
    messages: locales,
})


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
