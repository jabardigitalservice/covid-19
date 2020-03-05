import { db } from '../../lib/firebase'

export const state = () => ({
  data: null
})

export const mutations = {
  setStatsData (state, data) {
    state.data = data
  }
}

export const actions = {
  fetchData ({ commit }, { fresh = true } = {}) {
    if (!state.data || fresh) {
      return db
        .collection('statistics')
        .doc('root')
        .get()
        .then(doc => {
          if (doc.exists) {
            return doc.data()
          }
          return null
        }).then(obj => {
          commit('setStatsData', obj)
          return state.data
        })
    }
    return Promise.resolve(state.data)
  }
}
