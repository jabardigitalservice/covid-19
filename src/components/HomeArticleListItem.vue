<template>
   <div class="w-full p-4">
      <div>
        <a :href="getArticlePath(item)"
            @click.prevent="onClick($event, item)"
            class="cursor-pointer mb-1 text-2xl text-brand-green-darkest font-bold leading-normal hover:underline">
          {{ item['title'] }}
        </a>
        <p class="mb-5 text-base text-gray-700">{{ formatDateTimeShort(item['published_at'].toDate()) }}</p>
        <div class="article-content" v-html="trimContent(item.content)"></div>
        <!-- <br> -->
        <!-- <div class="clearfix">
          <a :href="getArticlePath(item)"
              @click.prevent="onClick($event, item)"
              class="float-right font-bold uppercase text-sm text-right tracking-widest text-blue-400 hover:text-brand-blue-darkest">
            Selengkapnya
          </a>
        </div> -->
      </div>
  </div>
</template>

<script>
import _truncate from 'lodash/truncate'
import { formatDateTimeShort } from '@/lib/date'
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
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

<style>

</style>
