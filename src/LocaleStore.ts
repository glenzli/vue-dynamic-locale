import { DirectMap, DirectTree, DirectMapObject } from 'direct-object'
import { Module, ActionTree, MutationTree } from 'vuex'

function GetJson(url: string) {
  return new Promise<DirectMapObject<any>>((resolve, reject) => {
    let http = new XMLHttpRequest()
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        resolve(JSON.parse(http.responseText))
      } else {
        reject()
      }
    }
    http.open('get', url)
    http.send()
  })
}

function FormatTranslations(rawTranslations: DirectMapObject<any>) {
  let flat = DirectTree.Flat(rawTranslations, '', '.') as DirectMapObject<string>
  return DirectMap.DoubleMap(flat, (value, key) => ({
    key: key.endsWith('..') ? key.substr(0, key.length - 2) : key,
    value
  }))
}

function LoadTranslations(locale: string, localePath: string): Promise<DirectMapObject<any>> {
  let languageFile = `${localePath}/${locale}.json`
  return new Promise((resolve, reject) => {
    GetJson(languageFile).then(resolve, reject)
  })
}

export interface LocaleState {
  locale: string
  translations: DirectMapObject<string>
}

export function CreateModule(path: string) {
  const LOCALE_PATH = path

  const state = {
    locale: '',
    translations: {}
  } as LocaleState

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

  return {
    namespaced: true,
    state,
    mutations,
    actions
  } as Module<LocaleState, any>
}
