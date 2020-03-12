<template>
  <main>
    <div class="container py-8 sm:px-4 md:px-8 max-w-3xl mx-auto">
      <h3 class="text-3xl text-gray-900 px-4 font-bold text-left leading-loose">
        Rilis Pers
      </h3>
      <br>
      <div>
        <template v-if="items === null">
          <div  v-for="i in 6"
                :key="i"
                class="mb-8 rounded-lg p-6 bg-white">
            <ContentLoader  :width="320"
                            :height="60"
                            :speed="3"
                            primary-color="#eee"
                            secondary-color="#fafafa">
              <rect x="0" y="0" width="33%" height="10" rx="5" ry="5"></rect>
              <rect x="0" y="16" width="100%" height="10" rx="5" ry="5"></rect>
              <rect x="0" y="32" width="100%" height="10" rx="5" ry="5"></rect>
              <rect x="0" y="48" width="100%" height="10" rx="5" ry="5"></rect>
            </ContentLoader>
          </div>
        </template>
        <template v-if="items && items.length">
          <ArticleListItem v-for="item in items"
                          :key="item.id"
                          :item="item"
                          class="bg-white rounded-lg mb-8 p-6 shadow-lg"/>
        </template>
        <template v-if="isLoadingMore">
          <div class="mb-8 rounded-lg p-6 bg-white">
            <ContentLoader  :width="320"
                            :height="60"
                            :speed="3"
                            primary-color="#eee"
                            secondary-color="#fafafa">
              <rect x="0" y="0" width="33%" height="10" rx="5" ry="5"></rect>
              <rect x="0" y="16" width="100%" height="10" rx="5" ry="5"></rect>
              <rect x="0" y="32" width="100%" height="10" rx="5" ry="5"></rect>
              <rect x="0" y="48" width="100%" height="10" rx="5" ry="5"></rect>
            </ContentLoader>
          </div>
        </template>
        <template v-if="!isLoadingMore && !hasReachedEnd">
          <button class="w-full px-6 py-2 rounded-lg bg-brand-blue hover:bg-blue-400 text-white font-bold uppercase tracking-wider"
                  @click="onLoadMore">
            Load More
          </button>
        </template>
        <template v-if="!isLoadingMore && hasReachedEnd">
          <button class="cursor-not-allowed w-full px-6 py-2 rounded-lg bg-gray-400 text-white font-bold uppercase tracking-wider"
                  disabled
                  @click="onLoadMore">
            Tidak ada berita lainnya
          </button>
        </template>
      </div>
    </div>
  </main>
</template>

<script>
import { db, analytics } from '../lib/firebase'
// import { mapState, mapGetters, mapActions } from 'vuex'

import { ContentLoader } from 'vue-content-loader'
import ArticleListItem from '../components/HomeArticleListItem'

export default {
  components: {
    ContentLoader,
    ArticleListItem
  },
  data () {
    return {
      isLoadingMore: false,
      hasReachedEnd: false,
      items: null,
      lastDocumentSnapshot: null,
      currentPage: 0,
      perPage: 5
    }
  },
  created () {
    analytics.logEvent('article_list_view')
    this.fetchItems(false)
  },
  methods: {
    onLoadMore () {
      this.isLoadingMore = true
      this.fetchItems(true)
        .then(() => {
          this.isLoadingMore = false
        })
    },
    fetchItems (append = true) {
      if (!append) {
        this.items = null
      }
      let querySnapshot = db
        .collection('articles')
        .orderBy('published_at', 'desc')
        .limit(this.perPage)
      if (this.lastDocumentSnapshot) {
        querySnapshot = querySnapshot.startAfter(this.lastDocumentSnapshot)
      }
      return querySnapshot
        .get()
        .then(snapshot => {
          const docs = []
          if (!snapshot.empty) {
            this.lastDocumentSnapshot = snapshot.docs[snapshot.docs.length - 1]
            snapshot.docs.forEach(doc => {
              docs.push({
                id: doc.id,
                ...doc.data()
              })
            })
          }
          return docs
        }).then(docs => {
          if (append) {
            this.items = this.items ? [...this.items, ...docs] : [...docs]
          } else {
            this.items = docs
          }
          if (!docs.length) {
            this.hasReachedEnd = true
          }
        }).catch(e => {
          return null
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.faq-list {
  &__item {
    > header::before {
      align-self: flex-start;
      content: '-';
      @apply mr-4;
    }
  }
}
</style>
