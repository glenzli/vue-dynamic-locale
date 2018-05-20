import fs from 'fs'
import { RawTree } from 'js-objectex'

const SEPERATOR = '.'

function FormatTranslations (raw) {
  let rawTranslations = JSON.parse(raw)
  return RawTree.Flat(rawTranslations)
}

function LoadTranslations (locale) {
  let languageFile = `${LOCALE_PATH}/${locale}.json`
  if (fs.existsSync(languageFile)) {
    return new Promise((resolve, reject) => {
      fs.readFile(languageFile, 'utf-8', (err, data => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      }))
    })
  }
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
      LoadTranslations(locale).then(data => {
        commit('SET', locale)
        commit('SET_TRANSLATIONS', FormatTranslations(data))
      })
    }
  }

  LoadTranslations(defaultLocale).then(data => {
    state.translations = FormatTranslations(data)
  })

  return {
    namespaced: true,
    state,
    mutations,
    actions
  }
}

export default CreateStore
