import fs from 'fs'
import CreateStore from './LocaleStore'

const VueDynamicLocale = {
  install (Vue, { store, path, defaultLocale }) {
    path = path || 'static/locale'
    defaultLocale = defaultLocale || 'en'

    store.registerModule('locale', CreateStore(path, defaultLocale))

    Vue.prototype.$setLocale = function (locale) {
      this.$store.dispatch('locale/SET', locale)
    }

    Vue.prototype.$getLocales = function () {
      let candidates = fs.readdirSync(path)
      return candidates.filter(c => c.substr(c.length - 5).toLowerCase() === '.json').map(c => c.substr(0, c.length - 5))
    }

    Vue.mixin({
      computed: {
        $t () {
          return this.$store.state.locale.translations
        }
      }
    })
  }
}

export default VueDynamicLocale
