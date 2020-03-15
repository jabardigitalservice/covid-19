<template>
  <div class="w-full">
    <div ref="placeholder" class='tableauPlaceholder' id='viz1584269761121' style='position: relative'>
      <noscript>
          <a href='#'><img alt=' ' src='https://public.tableau.com/static/images/Pe/PetaSebaranODPPDP-BlueVersion/DashboardMapAllCases/1_rss.png' style='border: none' /></a>
      </noscript>
      <object ref="object" class='tableauViz' style='display:none;'>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='site_root' value='' />
          <param name='name' value='PetaSebaranODPPDP-BlueVersion/DashboardMapAllCases' />
          <param name='tabs' value='no' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https://public.tableau.com/static/images/Pe/PetaSebaranODPPDP-BlueVersion/DashboardMapAllCases/1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
      </object>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ready: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.runScript()
    })
  },
  methods: {
    runScript () {
      // const container = this.$el
      // const rect = container.getBoundingClientRect()
      let iframeWidth = '100%'
      let iframeHeight = `727px`
      const placeholder = this.$refs.placeholder
      const object = this.$refs.object
      if (window.innerWidth >= 1366) {
        iframeHeight = '1393px'
      } else if (window.innerWidth > 1100) {
        iframeHeight = '1227px'
      } else if (window.innerWidth > 500) {
        iframeHeight = '900px'
      }
      placeholder.style.width = iframeWidth
      placeholder.style.height = iframeHeight
      object.style.width = iframeWidth
      object.style.height = iframeHeight
      const scriptElement = document.createElement('script')
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'
      this.$el.appendChild(scriptElement)
    }
  }
}
</script>

<style lang="scss" scoped>
.tableauPlaceholder {
  // position: absolute !important;
  // top: 0;
  // right: 0;
  // left: 0;
  // bottom: 0;
  // width: 100% !important;
}
</style>
