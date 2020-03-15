<template>
  <div>
    <div class="max-w-5xl mx-auto sm:px-8">
      <h3 class="my-8 px-8 md font-bold text-xl">
        <a class="cursor-pointer"
           @click.prevent="$router.back()">
          <i class="mr-4 align-middle fa fa-chevron-left fa-lg text-brand-blue"></i>
          <span class="align-middle">
            Kembali
          </span>
        </a>
      </h3>
      <InfographicGrid/>
    </div>
  </div>
</template>

<script>
import { analytics } from '../lib/firebase'
import InfographicGrid from '../components/InfographicGrid'
export default {
  components: {
    InfographicGrid
  },
  created () {
    analytics.logEvent('infographic_list_view')
  }
}
</script>
