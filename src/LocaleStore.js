import fs from 'fs'

function FormatTranslations (raw) {
  let rawTranslations = JSON.parse(raw)
}

function CreateStore (path, defaultLocale) {
  const LOCALE_PATH = path

  const state = {
    locale: defaultLocale,
    translations: {}
  }

  const mutations = {
    SET (state, locale) {
      state.locale = locale
    },

    SET_TRANSLATIONS (state, translations) {
      state.translations = translations
    }
  }

  const actions = {
    SET ({ state, commit }, locale) {
      let languageFile = `${LOCALE_PATH}/${locale}.json`
      if (fs.existsSync(languageFile)) {
        commit('SET', locale)
        fs.readFile(languageFile, 'utf-8', (err, data => {
          commit('SET_TRANSLATIONS', FormatTranslations(data))
        }))
      }
    }
  }

  return {
    namespaced: true,
    state,
    mutations,
    actions
  }
}

export default CreateStore
