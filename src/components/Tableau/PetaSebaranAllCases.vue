<template>
  <div class="w-full">
    <div class='tableauPlaceholder' id='viz1584273053004' style='position: relative'>
    <noscript>
        <a href='#'><img alt=' ' src='https://public.tableau.com/static/images/Pe/PetaSebaranODPPDP-BlueVersion/DashboardMapAllCases/1_rss.png' style='border: none' /></a>
    </noscript>
    <object class='tableauViz' style='display:none;'>
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
        <param name='filter' value='publish=yes' />
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
      var divElement = document.getElementById('viz1584273053004')
      var vizElement = divElement.getElementsByTagName('object')[0]
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = '100%'
        vizElement.style.height = '1393px'
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '100%'
        vizElement.style.height = '1227px'
      } else {
        vizElement.style.width = '100%'
        vizElement.style.height = '1227px'
      }
      var scriptElement = document.createElement('script')
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'
      vizElement.parentNode.insertBefore(scriptElement, vizElement)
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
