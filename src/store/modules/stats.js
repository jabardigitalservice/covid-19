import { db } from '../../lib/firebase'

export const state = () => ({
  data: null,
  updatedAt: null
})

export const mutations = {
  setStatsData (state, data) {
    state.data = data
  },
  setLastUpdate (state, date) {
    state.updatedAt = date
  }
}

export const actions = {
  fetchData ({ commit }, { fresh = true } = {}) {
    if (!state.data || fresh) {
      return db
        .collection('statistics')
        .doc('jabar-dan-nasional')
        .get()
        .then(doc => {
          if (doc.exists) {
            return doc.data()
          }
          return null
        }).then(obj => {
          commit('setStatsData', obj)
          commit('setLastUpdate', obj.updated_at.toDate())
          return state.data
        })
    }
    return Promise.resolve(state.data)
  }
}
