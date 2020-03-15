<template>
  <div class="">
    <ul class="flex flex-col justify-start items-start sm:flex-row md:justify-start md:items-stretch">
      <li v-for="(action, index) in actions"
          :key="index"
          class="w-full">
        <a class="block md:flex-1 cursor-pointer p-4 flex flex-row justify-start sm:justify-center items-center hover:bg-gray-200"
          :href="action.to"
          @click.prevent="onClick($event, action)">
          <i :class="[action.icon, 'mr-6']"></i>
          <div :title="action.tooltip">
            <h6 class="block text-lg text-gray-900 font-bold"
                v-html="action.title">
            </h6>
            <p class="block text-2xl text-gray-700 font-bold">{{action.subtitle}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { analytics } from '../lib/firebase'
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
        analytics.logEvent('click_call_action', {
          to: action.to
        })
        window.open(action.to, '_blank')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
