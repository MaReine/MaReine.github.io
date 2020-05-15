import Layout from './layout'
import Sideslip from './sideslip'
import Loading from './loading'
import Scroll from './scroll'
import AvatarUpload from './avatarUpload'

const components = [Layout, Loading, Scroll, Sideslip, AvatarUpload]

const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

// <script></script> 引入
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

// 按需引入
export { Layout, Loading, Scroll, Sideslip, AvatarUpload }

// 全部引入
export default install