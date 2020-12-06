import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import Button from '@/components/Button.vue'
import tagListModel from './models/tagListModel'

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)
Vue.component('Button', Button)

window.tagList = tagListModel.fetch();
window.createTag = (tagName: string) => {
  const createStatus = tagListModel.create(tagName);
  if (createStatus === "success") {
    window.alert("添加成功！");
  } else if (createStatus === "duplicated") {
    window.alert("标签名重复！");
  }
}
window.removeTag = (id: string) => {
  return tagListModel.remove(id)
}
window.updateTag = (id: string, name: string) => {
  return tagListModel.update(id, name);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
