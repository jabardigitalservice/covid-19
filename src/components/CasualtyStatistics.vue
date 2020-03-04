<template>
  <div>
    <ul class="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-start">
      <li v-for="(stat, index) in stats" :key="index"
         :class="['w-full rounded-lg mb-4 flex flex-row justify-between items-center md:p-5 md:block md:flex-1 md:text-center', `border border-solid border-${stat.color} md:border-none`]">
        <h6 class="px-6 py-4 mb-2 text-base uppercase tracking-widest text-gray-900 font-bold">
          {{stat.title}}<br>
          <small v-if="stat.subtitle">
            {{stat.subtitle}}
          </small>
        </h6>
        <span role="count"
              :class="['px-6 py-4 text-5xl font-bold', `text-${stat.color}`, `border-l border-solid border-${stat.color} md:border-none`]">
          {{stat.value}}
        </span>
        <p v-if="stat.description">
          {{stat.description}}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    stats: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>
