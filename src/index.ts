import { VueDynamicLocale } from './Locale'
export default VueDynamicLocale

declare module 'vue/types/vue' {
  interface Vue {
    $setLocale: (locale: string) => void
    $t: { [index: string]: string }
  }
}
