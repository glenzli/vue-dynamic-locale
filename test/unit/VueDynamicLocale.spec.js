import Vue from 'vue'
import Vuex from 'vuex'
import chai from 'chai'
import VueDynamicLocale from '../../src'

const expect = chai.expect

const store = new Vuex.Store({
  state: {}
})

Vue.use(VueDynamicLocale, {
  store,
  path: 'test/locale',
  defaultLocale: 'en'
})

describe('DynamicLocale', function () {
  describe('GetLocales', function () {
    it('Major', function () {
      let vm = new Vue({ store })
      expect(vm.$getLocales()).to.be.deep.equal(['en', 'zh'])
    })
  })
})
