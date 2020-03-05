<template>
  <div>
    <div class="p-8 md:p-0 flex flex-row justify-start items-start">
      <i class="hidden md:inline-block md:mr-4 fa fa-image fa-2x relative opacity-25" style="top: 3px;"></i>
      <h3 class="mb-4 font-bold text-3xl text-gray-900 leading-tight">
        {{infographic.title}}<br>
        <small class="font-normal text-gray-600">{{infographic.subtitle}}</small>
      </h3>
    </div>
    <img v-for="(image, index) in images"
          :key="index"
          :src="image"
         class="block w-full object-contain object-top">
    <br>
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
