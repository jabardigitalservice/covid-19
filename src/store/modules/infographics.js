import { db } from '../../lib/firebase'

const getRef = () => db
  .collection('infographics')
  .orderBy('published_date', 'desc')

const handleQuerySnapshotArray = async (docs) => {
  const arr = []
  if (docs && !docs.empty) {
    docs.forEach(doc => {
      const data = doc.data()
      arr.push({
        ...data,
        id: doc.id
      })
    })
  }
  return arr
}

export const state = () => ({
  items: []
})

export const mutations = {
  set (state, items) {
    state.items = items
  },
  append (state, items) {
    state.items = [...state.items, ...items]
  }
}

export const actions = {
  fetchItems ({ commit }, { perPage = 8 }) {
    return getRef()
      .limit(perPage)
      .get()
      .then(handleQuerySnapshotArray)
      .then(arr => {
        return arr
      })
  },
  fetchPreviousItems ({ commit }, { last, perPage = 8 }) {
    return getRef()
      .endBefore(last)
      .limit(perPage)
      .get()
      .then(handleQuerySnapshotArray)
      .then(arr => {
        return arr
      })
  },
  fetchNextItems ({ commit }, { last, perPage = 8 }) {
    return getRef()
      .startAfter(last)
      .limit(perPage)
      .get()
      .then(handleQuerySnapshotArray)
      .then(arr => {
        return arr
      })
  }
}
