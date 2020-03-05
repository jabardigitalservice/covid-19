<template>
  <div class="rounded-lg bg-white shadow-lg overflow-hidden">
    <div class="p-8">
      <header class="flex items-center text-brand-blue-darkest">
        <i class="mr-4 fa fa-image fa-2x relative opacity-25"></i>
        <span class="font-bold uppercase text-base tracking-widest leading-none">Infografik</span>
      </header>
      <h3 class="mt-4 font-bold text-3xl text-gray-900 leading-tight">
        {{infographic.title}}<br>
        <small class="font-normal text-gray-600">{{infographic.subtitle}}</small>
      </h3>
    </div>
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
