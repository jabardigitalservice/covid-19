<template>
  <div>
    <ul class="casualty-statistics">
      <li v-for="(stat, index) in stats" :key="index"
         class="casualty-statistics__item">
        <h6 :class="['flex-none w-full sm:mb-2 md:p-0 lg:mb-0 text-base uppercase tracking-widest font-bold', `text-${stat.color}`]">
          {{stat.title}}<br>
          <small v-if="stat.subtitle">
            {{stat.subtitle}}
          </small>
        </h6>
        <div class="flex-none w-full flex justify-between items-center text-xl text-gray-900 font-bold border-b border-solid border-gray-300 leading-loose">
          <label>
            Jawa Barat
          </label>
          <span>
            {{stat.jabar}}
          </span>
        </div>
        <div class="flex-none w-full flex justify-between items-center text-gray-700 text-lg border-b border-solid border-gray-300 leading-loose">
          <label>
            Nasional
          </label>
          <span>
            {{stat.nasional}}
          </span>
        </div>
        <!-- <span role="count"
              :class="['px-6 py-0 text-5xl font-bold', `text-${stat.color}`]">
          {{stat.value}}
        </span> -->
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
  @apply w-full rounded-lg mb-8
  flex flex-row flex-wrap justify-between items-center;

  @screen sm {
    @apply p-5 block flex-1 text-center
    border-0;
  }

  @screen lg {
    @apply w-full rounded-lg mb-8 p-0
    flex flex-row justify-between items-center
    text-left;
  }
}
</style>
