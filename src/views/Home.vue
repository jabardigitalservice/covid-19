<template>
  <main>
    <div class="container sm:py-8 sm:px-4 md:px-8 max-w-6xl mx-auto">
      <home-banner-list/>
      <div class="lg:flex flex-wrap flex-row justify-start items-start">
        <div class="lg:pr-8"
             style="flex: 0 0 360px">
          <home-card>
            <home-card-title>
              Nomor Darurat Pelaporan
            </home-card-title>
            <primary-actions :actions="actionsCall"/>
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
              <small class="text-base text-gray-600 uppercase font-bold tracking-widest">
                Per {{latestCasualtyStatDate}}
              </small>
            </home-card-title>
            <casualty-statistics :stats="casualtyStats"/>
          </home-card>
        </div>
        <div class="flex-1">
          <home-card>
            <home-card-title>
              Berita Terbaru
            </home-card-title>
            <home-article-list/>
          </home-card>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { PHONE_NUMBERS } from '../config'

import HomeBannerList from '@/components/HomeBannerList'
import HomeArticleList from '@/components/HomeArticleList'
import PrimaryActions from '../components/PrimaryActions'
import CasualtyStatistics from '../components/CasualtyStatistics'

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
    return (
      <h3 class="-m-4 mb-4 p-8 text-left text-2xl font-bold border-b border-solid border-gray-200">
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
    PrimaryActions,
    HomeCard,
    HomeCardTitle,
    CasualtyStatistics
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
          subtitle: PHONE_NUMBERS.KEMENKES_HOME,
          tooltip: 'Klik untuk melakukan panggilan telepon',
          to: `tel://${PHONE_NUMBERS.KEMENKES_HOME}`
        },
        {
          icon: 'fas fa-phone text-2xl text-green-500',
          title: 'Kemenkes RI',
          subtitle: PHONE_NUMBERS.KEMENKES_PHONE,
          tooltip: 'Klik untuk melakukan panggilan telepon',
          to: `tel://${PHONE_NUMBERS.KEMENKES_PHONE}`
        },
        {
          icon: 'fas fa-phone text-2xl text-green-500',
          title: 'Dinkes Jabar',
          subtitle: PHONE_NUMBERS.DINKES_JABAR,
          tooltip: 'Klik untuk melakukan panggilan telepon',
          to: `tel://${PHONE_NUMBERS.DINKES_JABAR}`
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

      numberOfResponse: 632
    }
  }
}
</script>
