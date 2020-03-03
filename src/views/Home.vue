<template>
  <div class="home">
    <div class="container mx-auto">

      <div class="flex flex-col md:flex-row sm:mt-4">
        <div class="w-full md:w-1/3">

          <home-banner-list />

          <div class="mx-0 sm:mx-2 flex flex-wrap shadow bg-white">
            <div class="w-1/3">
              <router-link to="/">
                <div class="h-full p-3 py-4 text-center text-gray-700">
                  <i class="fas fa-check-circle text-2xl" />
                  <p class="text-sm mt-1">Kenali Gejala</p>
                </div>
              </router-link>
            </div>

            <div class="w-1/3">
              <router-link to="/">
                <div class="h-full p-3 py-4  text-center text-gray-700">
                  <i class="fas fa-phone text-2xl" />
                  <p class="text-sm mt-1">Nomor Darurat</p>
                </div>
              </router-link>
            </div>

            <div class="w-1/3">
              <router-link to="/">
                <div class="h-full p-3 py-4 text-center text-gray-700">
                  <i class="fas fa-map text-2xl" />
                  <p class="text-sm mt-1">Klinik Terdekat</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="w-full md:w-2/3">
          <div class="bg-white shadow mt-4 sm:mt-0 p-4">
            <div class="text-center mb-4">
              <p class="text-sm font-medium">Angka Kejadian di Jawa Barat</p>
            </div>

            <div class="flex">
              <div class="flex-1">
                <div class="text-center text-sm">Terduga</div>
                <div class="text-center text-3xl">0</div>
              </div>
              <div class="flex-1">
                <div class="text-center text-sm">Positif</div>
                <div class="text-center text-3xl">0</div>
              </div>
              <div class="flex-1">
                <div class="text-center text-sm">Sembuh</div>
                <div class="text-center text-3xl">0</div>
              </div>
              <div class="flex-1">
                <div class="text-center text-sm">Meninggal</div>
                <div class="text-center text-3xl">0</div>
              </div>
            </div>
          </div>

          <div class="px-4 mt-4">
            <p class="text-leading text-grey-darker">Informasi Terbaru</p>
          </div>

          <home-article-list class="mt-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeBannerList from '@/components/HomeBannerList'
import HomeArticleList from '@/components/HomeArticleList'

export default {
  name: 'home',
  components: {
    HomeBannerList,
    HomeArticleList
  },

  metaInfo: {
    title: 'Pusat Informasi & Koordinasi COVID-19 Provinsi Jawa Barat'
  },

  computed: mapGetters({
    // authLoading: 'auth/loading',
    // user: 'auth/user'
  })
}
</script>
