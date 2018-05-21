import fs from 'fs'
import Vue from 'vue'
import Vuex from 'vuex'
import chai from 'chai'
import VueDynamicLocale from '../../src'

fs.writeFile('locale/en.json', '{"A": "Alphabet", "B": { "C": "Command" } }')
fs.writeFile('locale/zh.json', '{"A": "字母表", "B": { "C": "命令" } }')

const expect = chai.expect

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {}
})

Vue.use(VueDynamicLocale, {
  store,
  path: 'locale',
  defaultLocale: 'en'
})

describe('DynamicLocale', function () {
  describe('Mixin', function () {
    it('$getLocales', function () {
      let vm = new Vue({ store })
      expect(vm.$getLocales()).to.be.deep.equal(['en', 'zh'])
    })

    it('$t', function () {
      let vm = new Vue({ store })
      expect(vm.$t['A']).to.be.equal('Alphabet')
      expect(vm.$t['B.C']).to.be.equal('Command')
    })

    it('$setLocale', function () {
      let vm = new Vue({ store })
      vm.$setLocale('zh')
      setTimeout(function () {
        expect(vm.$t['A']).to.be.equal('字母表')
        expect(vm.$t['B.C']).to.be.equal('命令')
      }, 0)
    })
  })
})
