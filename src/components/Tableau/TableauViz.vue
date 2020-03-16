<template>
  <div id="vizContainer">
  </div>
</template>

<script>
export default {
  props: ['url'],
  mounted () {
    const placeholderDiv = document.getElementById('vizContainer')
    const options = {
      showTabs: false,
      hideToolbar: true,
      hideTabs: true
    }
    // eslint-disable-next-line
    this.viz = new tableau.Viz(placeholderDiv, this.url, options)
  },
  watch: {
    url: {
      immediate: true,
      handler (v) {
        //
      }
    }
  }
}
</script>

<style>

</style>
