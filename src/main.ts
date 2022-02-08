import './public-path'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'

let router = null
let instance: any = null
let history: any = null

function render (props: any = {}) {
  const { container, mainStore } = props
  console.log('child2 mainStore：', mainStore)
  // history = createWebHistory(process.env.BASE_URL)
  history = createWebHistory((window as any).__POWERED_BY_QIANKUN__ ? '/child2' : '/')
  router = createRouter({
    history,
    routes
  })

  instance = createApp(App)
  instance.use(router)
  instance.use(store)
  instance.mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render()
}

// 微前端 - 主子应用通信
function storeTest (props: any) {
  if (props.onGlobalStateChange) {
    props.onGlobalStateChange((value: any, prev: any) => {
      console.log(`在子应用${props.name}中打印变更前的状态：`, prev)
      console.log(`在子应用${props.name}中打印变更后的状态：`, value)
    }, true) // true表示会立即执行一次回调
  }
  if (props.setGlobalState) {
    props.setGlobalState({ a: 1111, b: 2222 })
  }
}

export async function bootstrap () {
  console.log('%c%s', 'color: green;', 'vue3.0 app bootstraped')
}

export async function mount (props: any) {
  storeTest(props)
  render(props)
  instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange
  instance.config.globalProperties.$setGlobalState = props.setGlobalState
}

export async function unmount () {
  instance.unmount()
  instance._container.innerHTML = ''
  instance = null
  router = null
  history.destroy()
}
