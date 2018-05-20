import fs from 'fs'
import path from 'path'
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
      return candidates.filter(c => path.extname(c) === '.json').map(c => c.substr(0, c.length - 5))
    }

    Vue.mixin({
      computed: {
        $t () {
          return this.$store.locale.translations
        }
      }
    })
  }
}

export default VueDynamicLocale
