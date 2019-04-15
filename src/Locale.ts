import Vue, { PluginObject, VueConstructor } from 'vue'
import { Store } from 'vuex'
import { CreateModule } from './LocaleStore'

export interface LocaleOptions {
  store: Store<any>
  path: string
  defaultLocale?: string
}

export const VueDynamicLocale: PluginObject<LocaleOptions> = {
  install(vue: VueConstructor<Vue>, options?: LocaleOptions) {
    if (options) {
      let { store, path, defaultLocale = 'en' } = options
      store.registerModule('locale', CreateModule(path))
      store.dispatch('locale/SET', defaultLocale)

      vue.prototype.$setLocale = function(locale: string): void {
        this.$store.dispatch('locale/SET', locale)
      }

      vue.mixin({
        computed: {
          $t() {
            return (this.$store as Store<any>).state.locale.translations
          }
        }
      })
    }
  }
}
