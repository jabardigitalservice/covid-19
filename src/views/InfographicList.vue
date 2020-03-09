<template>
  <div>
    <div class="max-w-5xl mx-auto sm:px-8">
      <h3 class="my-8 px-8 md font-bold text-xl">
        <a class="cursor-pointer"
           @click.prevent="$router.back()">
          <i class="mr-4 align-middle fa fa-chevron-left fa-lg text-brand-blue"></i>
          <span class="align-middle">
            Kembali
          </span>
        </a>
      </h3>
      <ul class="infographic-list">
        <li v-for="inf in infographics"
            :key="inf.id"
            class="cursor-pointer flex flex-col justify-start">
          <router-link tag="div"
                       :to="`/infographics/${inf.id}`"
                       class="order-2 px-8 sm:px-0 mb-4">
            <img :src="inf.images[0]"
                  class="sm:rounded-lg shadow hover:opacity-50">
          </router-link>
          <div class="order-1 flex-initial px-8 sm:px-0 mb-4">
            <h5 class="mt-3 font-bold text-lg leading-normal"
                style="">
              {{inf.title}}
            </h5>
            <h6 v-if="inf.subtitle"
                class="text-sm">
              <span class="w-full inline-block overflow-hidden whitespace-no-wrap leading-none"
                    style="height: 1em; text-overflow: ellipsis;">
                {{inf.subtitle}}
              </span>
            </h6>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { analytics } from '../lib/firebase'
export default {
  data () {
    return {
      infographics: []
    }
  },
  created () {
    this.fetchItems()
  },
  methods: {
    fetchItems () {
      analytics.logEvent('infographic_list_view')
      return this.$store
        .dispatch('infographics/fetchItems', {
          perPage: 8
        })
        .then(items => {
          this.infographics = items
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.infographic-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  align-items: stretch;
}
</style>
