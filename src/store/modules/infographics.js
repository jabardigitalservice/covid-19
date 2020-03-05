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
  fetchItemById (_, { id }) {
    return db
      .collection('infographics')
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          return {
            ...doc.data(),
            id: doc.id
          }
        }
        return null
      })
  },
  fetchItems (_, { perPage = 8 }) {
    return getRef()
      .limit(perPage)
      .get()
      .then(handleQuerySnapshotArray)
      .then(arr => {
        return arr
      })
  },
  fetchPreviousItems (_, { last, perPage = 8 }) {
    return getRef()
      .endBefore(last)
      .limit(perPage)
      .get()
      .then(handleQuerySnapshotArray)
      .then(arr => {
        return arr
      })
  },
  fetchNextItems (_, { last, perPage = 8 }) {
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
