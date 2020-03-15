<template>
  <div>
    <template v-if="!loading">
      <carousel v-bind="carouselConfig">
        <slide v-for="item in items"
              :key="item.id"
              class="banner-slide">
          <img role="bg" :src="item.url" />
          <img role="main" :src="item.url" />
        </slide>
      </carousel>
    </template>
    <template v-else>
      <div class="bg-white p-8">
        <content-loader :speed="2">
          <rect x="0" y="0" rx="0" ry="0" width="100%" height="300px" />
        </content-loader>
      </div>
    </template>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

import { ContentLoader } from 'vue-content-loader'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeBannerList',
  components: {
    Carousel,
    Slide,
    ContentLoader
  },
  data () {
    return {
      carouselConfig: {
        autoplay: true,
        autoplayTimeout: 4000,
        paginationEnabled: true,
        paginationColor: '#90a4ae',
        paginationActiveColor: '#00b0ff',
        paginationSize: 12,
        perPage: 1,
        mouseDrag: true,
        loop: true
      }
    }
  },

  computed: {
    ...mapGetters({
      loading: 'home-banners/loading',
      items: 'home-banners/items'
    })
  }
}
</script>

<style lang="scss" scoped>
.banner-slide {
  padding: 28.125%;
  @apply relative flex flex-row justify-center items-center;

  > img[role="bg"] {
    @supports (filter: blur(4px)) {
      filter: blur(4px) grayscale(33%) opacity(0.2);
    }
    @supports not(filter: blur(4px)) {
      opacity: 0.2;
    }
    @apply absolute w-full h-full
    object-contain object-cover object-top;
  }

  > img[role="main"] {
    @apply absolute w-full h-full
    object-contain object-contain;
  }
}
</style>

<style lang="scss">
@screen sm {
  .VueCarousel-wrapper {
    @apply rounded-lg overflow-hidden shadow;
  }
}
.VueCarousel-pagination {
  background-color: transparent !important;
}
.VueCarousel-dot-container {
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
}
</style>
