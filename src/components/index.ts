import SvgIcon from './SvgIcon/index.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const allGloablComponent:any = { SvgIcon }
export default {
  install(app:any) {
    Object.keys(allGloablComponent).forEach(key =>{
      app.component(key,allGloablComponent[key])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}