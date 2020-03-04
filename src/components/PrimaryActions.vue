<template>
  <div class="">
    <ul class="flex flex-col justify-start items-start md:flex-row md:justify-start md:items-stretch">
      <li v-for="(action, index) in actions"
          :key="index"
          class="w-full">
        <a class="block md:flex-1 cursor-pointer p-5 flex flex-row justify-start items-center hover:bg-gray-200"
          :href="action.to"
          @click.prevent="onClick($event, action)">
          <i :class="[action.icon, 'mr-6']"></i>
          <div :title="action.tooltip">
            <h6 class="block text-lg text-gray-900 font-bold">{{action.title}}</h6>
            <p class="block text-base text-gray-700 font-medium">{{action.subtitle}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    actions: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onClick (e, action) {
      if (action.to) {
        window.open(action.to, '_blank')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
