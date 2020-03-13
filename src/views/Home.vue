<template>
  <main>
    <div class="container py-8 sm:px-4 md:px-8 max-w-6xl mx-auto">
      <ClarificationMainAlert class="mb-8" v-show="false" />
      <home-banner-list/>
      <div class="lg:flex flex-wrap flex-row justify-start items-start">
        <div class="lg:pr-8 lg:self-stretch"
             style="flex: 0 0 360px">
          <home-card>
            <PrimaryActions :actions="actionsCall"/>
            <div class="-m-4 mt-4 px-8 py-4 bg-brand-green text-white text-2xl font-bold text-left flex flex-row sm:flex-col justify-between items-center lg:text-xl">
              <h4 class="sm:text-center">
                <span class="block">
                  Pertanyaan Terlayani
                </span>
                <small class="font-normal">
                  (Telpon dan Pesan Teks)
                </small>
              </h4>
              <span class="text-4xl lg:mt-2 text-brand-yellow-lighter">
                {{numberOfResponse}}
              </span>
            </div>
          </home-card>
          <home-card>
            <home-card-title>
              Angka Kejadian<br>
              <p class="text-base text-gray-600 font-bold tracking-wide leading-normal">
                Terakhir diperbarui:<br>
                {{latestCasualtyStatDate}}
              </p>
            </home-card-title>
            <casualty-statistics/>
          </home-card>
        </div>
        <div class="flex-1">
          <div v-if="infographic"
               class="mt-8">
            <div class="p-8 py-4 md:rounded-tl-lg md:rounded-tr-lg rounded-bl-none rounded-br-none bg-gray-800 flex justify-between items-center">
              <h5 class="font-bold text-2xl text-white">
                Infografis
              </h5>
            </div>
            <div class="flex flex-col md:flex-row justify-start items-stretch">
              <div class="flex-auto">
                <InfographicItemPreview :infographic="infographic"
                                        class="flex-auto rounded-none md:rounded-bl-lg md:rounded-br-lg"/>
              </div>
            </div>
          </div>
          <home-card>
            <home-card-title>
              Daftar Rumah Sakit Rujukan<br>
              <small>
                di Jawa Barat
              </small>
            </home-card-title>
            <ReferredHospitalList/>
          </home-card>
          <home-card>
            <home-card-title>
              <div class="flex justify-between items-center">
                <span>
                  Rilis Pers
                </span>
                <router-link class="inline-flex justify-center items-center px-6 py-4 rounded-full border-white bg-gray-200 hover:bg-gray-300"
                            to="/articles">
                  <span class="mr-4 font-bold text-sm text-gray-700 tracking-widest uppercase">
                      Selengkapnya
                  </span>
                  <i class="fa fa-chevron-right"></i>
                </router-link>
              </div>
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
import { formatDateTimeShort } from '../lib/date'
import { mapState } from 'vuex'

import ClarificationMainAlert from '@/components/ClarificationMainAlert'
import HomeBannerList from '@/components/HomeBannerList'
import HomeArticleList from '@/components/HomeArticleList'
import CasualtyStatistics from '../components/CasualtyStatistics'
import InfographicItemPreview from '../components/InfographicItemPreview'
import ReferredHospitalList from '../components/HospitalList'
import PrimaryActions from '../components/PrimaryActions'

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
    ClarificationMainAlert,
    HomeBannerList,
    HomeArticleList,
    HomeCard,
    HomeCardTitle,
    PrimaryActions,
    CasualtyStatistics,
    InfographicItemPreview,
    ReferredHospitalList
  },

  metaInfo: {
    title: 'Pusat Informasi & Koordinasi COVID-19 Provinsi Jawa Barat'
  },

  data () {
    return {
      actionsCall: [
        {
          icon: 'fas fa-phone text-2xl text-green-500',
          title: 'Call Center<br><small>(Nomor Darurat)</small>',
          subtitle: PHONE_NUMBERS.CALL_CENTER,
          tooltip: 'Klik untuk melakukan panggilan telepon',
          to: `tel:${PHONE_NUMBERS.CALL_CENTER}`
        },
        {
          icon: 'fas fa-phone text-2xl text-green-500',
          title: 'Dinkes Jabar<br><small>(Pertanyaan Umum)</small>',
          subtitle: PHONE_NUMBERS.DINKES_JABAR,
          tooltip: 'Klik untuk melakukan panggilan telepon',
          to: `tel:${PHONE_NUMBERS.DINKES_JABAR}`
        }
      ],

      infographic: null,
      strippedInfographics: []
    }
  },
  async created () {
    await this.$store.dispatch('stats/fetchData')
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
  },

  computed: {
    ...mapState('stats', {
      'numberOfResponse': state => (state.data || {}).pertanyaan_terlayani
    }),
    latestCasualtyStatDate () {
      const date = this.$store.state.stats.updatedAt
      return date ? formatDateTimeShort(date) : ''
    }
  }
}
</script>
