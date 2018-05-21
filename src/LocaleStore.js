import fs from 'fs'
import { RawTree } from 'js-objectex'

function FormatTranslations (raw) {
  let rawTranslations = JSON.parse(raw)
  return RawTree.Flat(rawTranslations, '', '.')
}

function LoadTranslations (locale, localePath) {
  let languageFile = `${localePath}/${locale}.json`
  return new Promise((resolve, reject) => {
    if (fs.existsSync(languageFile)) {
      fs.readFile(languageFile, 'utf-8', (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    } else {
      reject(new Error('404'))
    }
  })
}

function CreateStore (path) {
  const LOCALE_PATH = path

  const state = {
    locale: '',
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
      LoadTranslations(locale, LOCALE_PATH).then(data => {
        commit('SET', locale)
        commit('SET_TRANSLATIONS', FormatTranslations(data))
      })
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
