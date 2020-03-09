import Vue from 'vue'
import { db } from '../../lib/firebase'
export const state = () => ({
  main: null,
  items: null
})

export const mutations = {
  set (state, { key, value }) {
    Vue.set(state, key, value)
  }
}

export const actions = {
  fetchMainClarification ({ state, commit }, { fresh = false } = {}) {
    if (!state.items || fresh) {
      return db
        .collection('clarifications')
        .doc('main')
        .get()
        .then(doc => {
          if (doc.exists) {
            commit('set', {
              key: 'main',
              value: doc.data()
            })
          }
          return Promise.resolve(state.main)
        })
    } else {
      return Promise.resolve(state.main)
    }
  }
}
