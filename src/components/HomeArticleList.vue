<template>
  <div class="home-banner-list">
    <template v-if="!loading">
      <div v-for="item in items" :key="item.id" class="w-full p-4">
          <div class="pb-8 border-b border-solid border-gray-300">
            <a :href="getArticlePath(item)"
                @click.prevent="onClick($event, item)"
                class="cursor-pointer mb-1 text-2xl text-brand-green-darkest font-bold leading-normal hover:underline">
              {{ item['title'] }}
            </a>
            <p class="mb-5 text-base text-gray-700">{{ formatDateTimeShort(item['published_at'].toDate()) }}</p>
            <div class="article-content" v-html="trimContent(item.content)"></div>
          </div>
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
import { formatDateTimeShort } from '@/lib/date'

import _truncate from 'lodash/truncate'

export default {
  components: {
    ContentLoader
  },

  computed: mapGetters({
    loading: 'home-articles/loading',
    items: 'home-articles/items'
  }),

  methods: {
    formatDateTimeShort,
    trimContent (content) {
      if (typeof content === 'string') {
        return _truncate(content, {
          length: 300,
          omission: '...'
        })
      }
      return content
    },
    getArticlePath (article) {
      if (!article) return ''
      return `/articles/${article.id}`
    },
    onClick (e, article) {
      this.$router.push({
        path: this.getArticlePath(article)
      })
    }
  }
}
</script>

<style lang="scss">
.article-content {
  & p {
    display: inline;
  }
}
</style>
