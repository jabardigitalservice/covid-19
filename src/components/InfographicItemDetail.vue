<template>
  <div class="rounded-lg bg-white shadow-lg overflow-hidden">
    <img v-for="(image, index) in images"
          :key="index"
          :src="image"
         class="block w-full object-contain object-top">
  </div>
</template>

<script>
export default {
  props: {
    infographic: {
      type: Object,
      default: () => ({})
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
