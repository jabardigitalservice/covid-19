import Vue from 'vue'

import { db } from '../../lib/firebase'
export const state = () => ({
  items: null
})

export const mutations = {
  set (state, { key, value }) {
    Vue.set(state, key, value)
  }
}

export const actions = {
  fetchItems ({ state, commit }, { fresh = true } = {}) {
    if (!state.items || fresh) {
      return db
        .collection('faqs')
        .get()
        .then(doc => {
          if (!doc.empty) {
            commit('set', {
              key: 'items',
              value: doc.docs.map(x => x.data())
            })
          }
          return Promise.resolve(state.items)
        })
    } else {
      return Promise.resolve(state.items)
    }
  }
}
