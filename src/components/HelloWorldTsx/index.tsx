import './index.global.scss'
import css from './index.module.scss'
import { defineComponent } from 'vue'
import { Link } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'HelloWorldTsx',
  props: { msg: String },
  setup (props) {
    return () => {
      return <>
        <el-icon><Link /></el-icon>
        <div class={css.HelloWorldTsxCssModule}>
          <div>{props.msg}</div>
          <div class={css.HelloWorldTsxCssModuleText}>HelloWorldTsxCssModuleText</div>
          <div class="HelloWorldTsxCssGlobal">HelloWorldTsxCssGlobal</div>
          <div class="HelloWorldTsxCssGlobalText">HelloWorldTsxCssGlobalText</div>
        </div>
      </>
    }
  }
})
