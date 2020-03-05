<template>
  <main>
    <div class="container sm:py-8 sm:px-4 md:px-8 max-w-6xl mx-auto">
      <home-banner-list/>
      <div class="lg:flex flex-wrap flex-row justify-start items-start">
        <div class="lg:pr-8 lg:self-stretch"
             style="flex: 0 0 360px">
          <home-card>
            <h3 class="cursor:pointer text-center py-8 hover:bg-gray-200">
              <span class="relative text-2xl uppercase font-bold tracking-wide">
                <i class="absolute fas fa-phone-alt text-gray-700 text-xl" style="right: calc(100% + 0.5rem); top: 4px;"></i>
                Call Center
              </span>
              <br>
              <a href="tel:119"><strong class="text-5xl pt-8 tracking-widest">119</strong></a>
            </h3>
            <!-- <primary-actions :actions="actionsCall"/> -->
            <h4 class="-m-4 mt-4 py-4 bg-brand-green text-white text-2xl font-bold text-center flex flex-row lg:flex-col justify-center items-center lg:text-xl">
              <span>
                Pertanyaan Terlayani
              </span>
              <span class="mx-2 lg:hidden">
                :
              </span>
              <span class="text-4xl lg:mt-2 text-brand-yellow-lighter">
                {{numberOfResponse}}
              </span>
            </h4>
          </home-card>
          <home-card>
            <home-card-title>
              Angka Kejadian di Jawa Barat<br>
              <small class="text-base text-gray-600 uppercase font-bold tracking-wide">
                Per {{latestCasualtyStatDate}}
              </small>
            </home-card-title>
            <casualty-statistics :stats="casualtyStats"/>
          </home-card>
        </div>
        <div class="flex-1">
          <div v-if="infographic"
               class="mt-8">
            <div class="p-8 py-4 md:rounded-tl-lg md:rounded-tr-lg rounded-bl-none rounded-br-none bg-gray-800 flex justify-between items-center">
              <h5 class="font-bold text-2xl text-white">
                Infografis
              </h5>
              <router-link to="/infographics"
                          class="text-white uppercase font-bold tracking-widest opacity-75 hover:opacity-100">
                Lainnya
              </router-link>
            </div>
            <div class="flex flex-col md:flex-row justify-start items-stretch">
              <div class="flex-auto">
                <InfographicItemPreview :infographic="infographic"
                                        class="flex-auto rounded-none md:rounded-bl-lg md:rounded-br-lg"/>
              </div>
            </div>
          </div>
          <home-card>
            <NearestHospitalLocation/>
          </home-card>
          <home-card>
            <home-card-title>
              Berita Terbaru
            </home-card-title>
            <home-article-list/>
          </home-card>
        </div>
      </div>
      <div class="md:mx-0 mt-12 clearfix">
      </div>
    </div>
  </main>
</template>

<script>
import { PHONE_NUMBERS } from '../config'

import HomeBannerList from '@/components/HomeBannerList'
import HomeArticleList from '@/components/HomeArticleList'
import CasualtyStatistics from '../components/CasualtyStatistics'
import InfographicItemPreview from '../components/InfographicItemPreview'
import NearestHospitalLocation from '../components/NearestHospitalLocation'

const HomeCard = {
  functional: true,
  render (h, context) {
    const attrs = context.data.attrs || {}
    const staticClass = context.data.staticClass || {}
    const classes = [
      'overflow-hidden sm:rounded-lg my-8 p-4 shadow-lg',
      `bg-${'dark' in attrs ? 'gray-700' : 'white'}`,
      staticClass
    ]
    return (
      <div class={classes}>
        {context.children}
      </div>
    )
  }
}

const HomeCardTitle = {
  functional: true,
  render (h, context) {
    const staticClass = context.data.staticClass || {}
    const classes = [
      '-m-4 mb-4 p-8 text-left text-2xl font-bold border-b border-solid border-gray-200',
      staticClass
    ]
    return (
      <h3 class={classes}>
        {context.children}
      </h3>
    )
  }
}

export default {
  name: 'home',
  components: {
    HomeBannerList,
    HomeArticleList,
    HomeCard,
    HomeCardTitle,
    CasualtyStatistics,
    InfographicItemPreview,
    NearestHospitalLocation
  },

  metaInfo: {
    title: 'Pusat Informasi & Koordinasi COVID-19 Provinsi Jawa Barat'
  },

  data () {
    return {
      actionsCall: [
        {
          icon: 'fas fa-phone text-2xl text-green-500',
          title: 'Call Center',
          subtitle: PHONE_NUMBERS.CALL_CENTER,
          tooltip: 'Klik untuk melakukan panggilan telepon',
          to: `tel:${PHONE_NUMBERS.CALL_CENTER}`
        },
        {
          icon: 'fas fa-phone text-2xl text-green-500',
          title: 'Kemenkes RI',
          subtitle: PHONE_NUMBERS.KEMENKES_PHONE,
          tooltip: 'Klik untuk melakukan panggilan telepon',
          to: `tel:${PHONE_NUMBERS.KEMENKES_PHONE}`
        },
        {
          icon: 'fas fa-phone text-2xl text-green-500',
          title: 'Dinkes Jabar',
          subtitle: PHONE_NUMBERS.DINKES_JABAR,
          tooltip: 'Klik untuk melakukan panggilan telepon',
          to: `tel:${PHONE_NUMBERS.DINKES_JABAR}`
        }
      ],

      latestCasualtyStatDate: '3 Maret 2020',
      casualtyStats: [
        {
          color: 'blue-500',
          title: 'Kasus Aktif',
          subtitle: '',
          value: 2
        },
        {
          color: 'green-500',
          title: 'Sembuh',
          subtitle: '',
          value: 0
        },
        {
          color: 'red-500',
          title: 'Meninggal',
          subtitle: '',
          value: 0
        }
      ],

      numberOfResponse: 63,

      infographic: null,
      strippedInfographics: []
    }
  },

  async created () {
    this.infographic = await this.$store.dispatch('infographics/fetchItemById', {
      id: '2AM5T7rzse2T5hNvPNMf'
    })
    if (this.infographic) {
      await this.$store.dispatch('infographics/fetchItems', {
        perPage: 3
      }).then(items => {
        this.strippedInfographics = items.filter(x => x.id !== this.infographic.id)
      })
    }
  }
}
</script>
