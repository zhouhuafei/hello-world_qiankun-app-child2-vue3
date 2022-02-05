/* eslint-disable */

// vue
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// scss
declare module '*.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
