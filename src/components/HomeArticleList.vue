<template>
  <div class="home-banner-list">
    <template v-if="!loading">
      <div v-for="item in items"
                      :key="item.id">
          <ArticleListItem :item="item"
                            class="w-full p-4"/>
          <hr class="my-4">
      </div>
    </template>
    <template v-else>
      <div v-for="n in 5" :key="n" class="bg-white shadow p-4">
        <content-loader
          :speed="2"
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb">
          <rect x="0" y="15" rx="0" ry="0" width="100%" height="15" />
          <rect x="0" y="45" rx="0" ry="0" width="100%" height="75" />
        </content-loader>
      </div>
    </template>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'
import { mapGetters } from 'vuex'

import ArticleListItem from './HomeArticleListItem'

export default {
  components: {
    ContentLoader,
    ArticleListItem
  },

  computed: mapGetters({
    loading: 'home-articles/loading',
    items: 'home-articles/items'
  })
}
</script>

<style lang="scss">
.article-content {
  & p {
    display: inline;
  }
}
</style>
