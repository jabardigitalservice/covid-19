<template>
  <div class="w-full">
    <iframe :src="iframeSrc"
      class="w-full"
      style="min-height: 500px;">
    </iframe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iframeSrc: 'https://natsec.esriindonesia.co.id/portal/apps/StoryMapBasic/index.html?appid=fb779d5f11e842f18f05c2a7a1a4fa8b'
    }
  }
}
</script>

<style>

</style>
