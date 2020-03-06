<template>
  <div class="relative bg-white shadow-lg overflow-hidden mb-8">
    <div class="relative z-0" :style="{padding: strip ? '15%' : '50%'}">
      <img v-for="(image, index) in images"
          :key="index"
          :src="image"
          class="absolute inset-0 block w-full object-contain object-top">
      <i class="block absolute inset-0"
          style="background-color: transparent; background-image: linear-gradient(to bottom, rgba(0,0,0,0) 66%, rgba(0,0,0,0.333))">
      </i>
    </div>
    <router-link class="inline-flex justify-center items-center px-6 py-4 rounded-full absolute border-white bg-white hover:bg-gray-300"
                style="box-shadow: 0 12px 64px 0 rgba(0,0,0,0.25); right: 2rem; bottom: 2rem;"
                :to="`/infographics`">
      <template v-if="strip">
        <span class="inline-block w-6 h-6 flex flex-row justify-center items-center">
          <i class="fa fa-chevron-right"></i>
        </span>
      </template>
      <template v-else-if="!strip">
        <span class="mr-4 font-bold text-sm text-gray-700 tracking-widest uppercase">
            Selengkapnya
        </span>
        <i class="fa fa-chevron-right"></i>
      </template>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    infographic: {
      type: Object,
      default: () => ({})
    },
    strip: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    images () {
      try {
        return this.infographic.images
      } catch (e) {
        return []
      }
    }
  }
}
</script>

<style>
</style>
