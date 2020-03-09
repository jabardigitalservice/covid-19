<template>
  <div class="my-8">
    <div class="max-w-3xl mx-auto">
      <h3 class="my-8 px-8 md font-bold text-xl">
        <a class="cursor-pointer" @click.prevent="$router.back()">
          <i class="mr-4 align-middle fa fa-chevron-left fa-lg text-brand-blue"></i>
          <span class="align-middle">
            Kembali
          </span>
        </a>
      </h3>
      <template v-if="isLoading">
        <div>
          <content-loader
            :speed="2"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb">
            <rect x="0" y="15" rx="0" ry="0" width="100%" height="600px" />
          </content-loader>
        </div>
      </template>
      <template v-else-if="infographic">
        <InfographicItemDetail :infographic="infographic"/>
      </template>
    </div>
  </div>
</template>

<script>
import { analytics } from '../lib/firebase'
import { ContentLoader } from 'vue-content-loader'

export default {
  components: {
    ContentLoader,
    InfographicItemDetail: () => import('../components/InfographicItemDetail')
  },
  data () {
    return {
      isLoading: true,
      infographic: null
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    fetch (id) {
      this.infographic = null
      this.isLoading = true
      if (id) {
        analytics.logEvent('infographic_detail_view', { id: id })
        return this.$store.dispatch(`infographics/fetchItemById`, {
          id: id
        }).then(inf => {
          this.infographic = inf
        }).finally(() => {
          this.isLoading = false
        })
      }
      return Promise.reject(new ReferenceError('id must be supplied'))
    }
  },
  watch: {
    id: {
      immediate: true,
      handler: function (v) {
        this.fetch(v)
      }
    }
  }
}
</script>

<style>

</style>
