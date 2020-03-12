<template>
  <main>
    <div class="container py-8 sm:px-4 md:px-8 max-w-6xl mx-auto">
      <h3 class="text-2xl text-gray-900 px-4 font-bold text-center leading-loose">
        Pertanyaan yang Sering Ditanyakan
      </h3>
      <br>
      <br>
      <div>
        <template v-if="items === null">
          <div  v-for="i in 6"
                :key="i"
                class="mb-4 rounded-lg p-4 bg-white">
            <ContentLoader  :width="320"
                            :height="32"
                            :speed="3"
                            primary-color="#eee"
                            secondary-color="#fafafa">
              <rect x="0" y="0" width="100%" height="100%" rx="4" ry="4"></rect>
            </ContentLoader>
          </div>
        </template>
        <template v-else-if="items && items.length">
          <ul class="faq-list p-4">
            <li v-for="(faq, index) in items" :key="index"
                class="faq-list__item mb-4 rounded-lg overflow-hidden">
              <header class="cursor-pointer relative flex justify-start items-center p-4 pr-16 text-white text-lg font-bold bg-brand-blue shadow-lg clearfix"
                      @click.capture="toggleItem(index)">
                <span>
                  {{faq.title}}
                </span>
                <button :key="`icon:${index}:${isItemOpen(index)}`" class="appearance-none text-white absolute"
                        style="right: 2rem;">
                  <i :class="[`fa-chevron-${isItemOpen(index) ? 'up' : 'down'}`, 'fas fa-lg']">
                  </i>
                </button>
              </header>
              <main v-html="faq.content"
                    v-show="isItemOpen(index)"
                    class="body-content p-4 md:p-8 text-base bg-white">
              </main>
            </li>
          </ul>
        </template>
        <template v-else-if="items && !items.length">

        </template>
      </div>
    </div>
  </main>
</template>

<script>
import { analytics } from '../lib/firebase'
import { mapState, mapActions } from 'vuex'

import { ContentLoader } from 'vue-content-loader'

export default {
  components: {
    ContentLoader
  },
  data () {
    return {
      openedItems: []
    }
  },
  created () {
    analytics.logEvent('faqs_view')
    this.fetchItems()
  },
  computed: {
    ...mapState('faqs', {
      items: 'items'
    })
  },
  methods: {
    ...mapActions('faqs', {
      fetchItems: 'fetchItems'
    }),
    isItemOpen (index) {
      return this.openedItems.indexOf(index) >= 0
    },
    openItem (index) {
      this.openedItems.push(index)
    },
    closeItem (index) {
      this.openedItems = this.openedItems.filter((x) => x !== index)
    },
    toggleItem (index) {
      if (this.isItemOpen(index)) {
        this.closeItem(index)
      } else {
        this.openItem(index)
      }
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
