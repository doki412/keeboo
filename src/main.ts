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
import recordListModel from './models/recordListModel'

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)
Vue.component('Button', Button)

//recordList store
window.recordList = recordListModel.fetch();
window.createRecord = (record: RecordItem) => recordListModel.create(record);


//tagList store
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
window.findTag = (id: string) => {
  return window.tagList.filter( t => t.id === id)[0];
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
