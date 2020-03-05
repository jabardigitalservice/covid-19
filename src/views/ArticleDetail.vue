<template>
  <div class="messages">
    <div class="container mx-auto max-w-4xl">
      <h3 class="my-8 px-8 md font-bold text-xl">
        <a class="cursor-pointer" @click.prevent="$router.back()">
          <i class="mr-4 align-middle fa fa-chevron-left fa-lg text-brand-blue"></i>
          <span class="align-middle">
            Kembali
          </span>
        </a>
      </h3>
      <div class="p-8 rounded-lg bg-white shadow">
        <template v-if="!loading">
          <div class="">
            <p class="text-2xl font-bold leading-normal">{{ item['title'] }}</p>
            <p class="text-base text-gray-700">{{ formatDateTimeShort(item['published_at'].toDate()) }}</p>
          </div>
          <br>
          <img v-if="item.image" :src="item.image"
              class="block mb-8 rounded-lg shadow-lg">
          <div class="text-base leading-normal mt-5 body-content"
              v-html="formatContent(item['content'])"></div>

          <template v-if="item['action_url']">
            <div class="my-2">
              <a :href="item['action_url']" @click="clickAction" class="w-full text-center shadow block bg-brand-blue text-white font-bold py-2 px-4 rounded">Baca Selengkapnya</a>
            </div>
          </template>
        </template>

        <template v-else>
          <content-loader
            :speed="2"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb">
            <rect x="0" y="15" rx="0" ry="0" width="100%" height="15" />
            <rect x="0" y="45" rx="0" ry="0" width="100%" height="75" />
          </content-loader>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ContentLoader } from 'vue-content-loader'
import { formatDateTimeShort } from '@/lib/date'
import { analytics } from '@/lib/firebase'

export default {
  components: {
    ContentLoader
  },

  metaInfo: {
    title: 'Informasi Terbaru'
  },

  computed: mapGetters({
    loading: 'articles-detail/loading',
    item: 'articles-detail/item'
  }),

  mounted () {
    this.fetchItem(this.$route.params.id)
  },

  methods: {
    formatDateTimeShort,

    async fetchItem (id) {
      await this.$store.dispatch('articles-detail/fetchItem', { id: id })

      analytics.logEvent('article_detail_view', { id: id })
    },

    formatContent (content) {
      return content
    },

    clickAction () {
      analytics.logEvent('article_detail_click_action', { id: this.$route.params.id })
    }
  }
}
</script>
