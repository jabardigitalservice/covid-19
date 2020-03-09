<template>
  <div>
    <div class="container py-8 sm:px-4 md:px-8 max-w-6xl mx-auto">
      <template v-if="documentMetadata && documentPublicURL">
        <header class="p-4 py-8 flex flex-wrap justify-between items-center md:rounded-lg bg-white shadow-lg">
          <h3 class="flex-none w-full order-2 text-2xl text-gray-900 font-bold text-left leading-tight">
            {{documentMetadata.name}}
          </h3>
        </header>
        <br>
        <object :data="documentPublicURL"
                :type="documentMetadata.contentType"
                class="w-full rounded-none bg-white shadow-xl"
                style="min-height: 60vh;">
          <iframe class="block p-8"
                  style="min-height: 60vh;"
                  :src="documentPublicURL">
          </iframe>
          <!-- <embed :src="documentPublicURL"
                  :type="documentMetadata.contentType"> -->
        </object>
      </template>
    </div>
  </div>
</template>

<script>
import { storage } from '../lib/firebase'
export default {
  data () {
    return {
      documentPublicURL: null,
      documentMetadata: null
    }
  },
  computed: {
    documentSrc () {
      return this.$route.query.src
    }
  },
  watch: {
    documentSrc: {
      immediate: true,
      handler: async function (src) {
        if (src) {
          const ref = storage.refFromURL(src)
          return Promise.all([
            ref.getDownloadURL().then(url => {
              this.documentPublicURL = url
            }),
            ref.getMetadata().then(metadata => {
              this.documentMetadata = metadata
            })
          ])
        } else {
          return Promise.resolve()
        }
      }
    }
  }
}
</script>

<style>

</style>
