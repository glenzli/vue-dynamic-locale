import fs from 'fs'
import { DirectMap, DirectTree, DirectMapObject } from 'direct-object'
import { Module, ActionTree, MutationTree } from 'vuex'

function FormatTranslations(raw: string) {
  let rawTranslations = JSON.parse(raw)
  let flat = <DirectMapObject<string>>DirectTree.Flat(rawTranslations, '', '.')
  return DirectMap.DoubleMap(flat, (value, key) => ({
    key: key.endsWith('..') ? key.substr(0, key.length - 2) : key,
    value
  }))
}

function LoadTranslations(locale: string, localePath: string): Promise<string> {
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

export interface LocaleState {
  locale: string
  translations: DirectMapObject<string>
}

export function CreateModule(path: string) {
  const LOCALE_PATH = path

  const state = <LocaleState>{
    locale: '',
    translations: {}
  }

  const mutations: MutationTree<LocaleState> = {
    SET(state: LocaleState, locale: string) {
      state.locale = locale
    },

    SET_TRANSLATIONS(state: LocaleState, translations: DirectMapObject<string>) {
      state.translations = translations
    }
  }

  const actions: ActionTree<LocaleState, any> = {
    SET({ commit }, locale: string) {
      LoadTranslations(locale, LOCALE_PATH).then(data => {
        commit('SET', locale)
        commit('SET_TRANSLATIONS', FormatTranslations(data))
      })
    }
  }

  return <Module<LocaleState, any>>{
    namespaced: true,
    state,
    mutations,
    actions
  }
}
