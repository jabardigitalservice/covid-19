<template>
  <div>
    <div class="w-full">
      <ul class="infographic-grid">
        <li v-for="inf in infographics"
            :key="inf.id"
            class="cursor-pointer flex flex-col justify-start">
          <router-link tag="div"
                       :to="`/infographics/${inf.id}`"
                       class="flex-1 order-2 px-0 mb-4">
            <img :src="inf.images[0]"
                  class="w-full h-full object-cover object-left-top sm:rounded-lg shadow hover:opacity-50">
          </router-link>
          <div class="order-1 flex-initial px-0 mb-4">
            <h5 class="mt-3 font-bold text-lg leading-normal"
                style="">
              {{inf.title}}
            </h5>
            <h6 v-if="inf.subtitle"
                class="text-sm">
              <span class="w-full inline-block overflow-hidden whitespace-no-wrap leading-none"
                    style="height: 1em; text-overflow: ellipsis;">
                {{inf.subtitle}}
              </span>
            </h6>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    perPage: {
      type: Number,
      default: 7
    }
  },
  data () {
    return {
      infographics: []
    }
  },
  created () {
    this.fetchItems()
  },
  methods: {
    fetchItems () {
      return this.$store
        .dispatch('infographics/fetchItems', {
          perPage: this.perPage
        })
        .then(items => {
          this.infographics = items
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.infographic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  align-items: stretch;
}
</style>
