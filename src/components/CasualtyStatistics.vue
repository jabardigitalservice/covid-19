<template>
  <div>
    <ul class="casualty-statistics">
      <li v-for="(stat, index) in stats" :key="index"
         :class="['casualty-statistics__item', `border border-solid border-${stat.color}`]">
        <h6 class="p-4 sm:mb-2 md:p-0 lg:p-4 lg:mb-0 text-base uppercase tracking-widest text-gray-900 font-bold">
          {{stat.title}}<br>
          <small v-if="stat.subtitle">
            {{stat.subtitle}}
          </small>
        </h6>
        <span role="count"
              :class="['px-6 py-0 text-5xl font-bold', `text-${stat.color}`, `border-l border-solid border-${stat.color} sm:border-none`]">
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

<style lang="scss" scoped>
.casualty-statistics {
  & {
    @apply p-4 flex flex-col justify-start items-start;
  }

  @screen sm {
    @apply flex-row justify-center items-start;
  }

  @screen lg {
    @apply flex flex-col justify-start items-start;
  }
}

.casualty-statistics__item {
  @apply w-full rounded-lg mb-4
  flex flex-row justify-between items-center;

  @screen sm {
    @apply p-5 block flex-1 text-center
    border-0;
  }

  @screen lg {
    @apply w-full rounded-lg mb-4 py-1
    flex flex-row justify-between items-center
    border
    text-left;
  }
}
</style>
