<template>
  <div class="">
    <ul class="list-disc list-outside pl-4 pr-8">
      <li v-for="(item, index) in itemsToShow"
          :key="index"
          class="mb-8">
        <h5 class="inline-block text-lg font-bold leading-loose">
          {{item.name}}
        </h5>
        <p>
          {{item.address}}, {{item.city}}
        </p>
        <p>
          <template v-if="item.phones && item.phones.length">
            <a v-for="(num, index) in item.phones"
              :key="index"
              class="inline-block px-4 py-1 bg-blue-100 rounded mt-2 mr-2 text-blue-700 hover:opacity-50"
              :href="`tel:${num}`"
              target="_blank"
              :title="`Telpon ${num}`">
              <i class="fas fa-phone fa-sm mr-1"></i>
              <span>
                {{num}}
              </span>
            </a>
          </template>
          <a  v-if="item.web"
              class="inline-block px-4 py-1 bg-green-100 rounded mt-2 mr-2 text-green-700 hover:opacity-50"
              :href="item.web"
              target="_blank"
              :title="`Buka Laman ${item.web}`">
              <i class="fas fa-globe-asia fa-sm mr-1"></i>
              <span>
                {{item.web}}
              </span>
            </a>
        </p>
      </li>
    </ul>
    <div class="-m-4">
      <button class="w-full px-6 py-4 rounded bg-blue-500 hover:bg-blue-400 text-white uppercase font-bold tracking-wider"
              :style="{'box-shadow': isCollapsed ? 'none' : '0 -8px 24px 0 #e0e0e0'}"
              @click="isCollapsed = !isCollapsed">
        {{isCollapsed ? 'Tutup' : 'Lihat Rumah Sakit Lainnya'}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapsed: false,
      hospitals: [
        {
          name: 'RSU Dr. Hasan Sadikin',
          address: 'Jl. Pasteur No. 38',
          city: 'Bandung',
          phones: [
            '+62 22 2034 953',
            '+62 22 2034 954',
            '+62 22 2034 955',
            '+62 22 2551 111'
          ],
          web: 'https://web.rshs.or.id'
        },
        {
          name: 'RSTP Dr. H. A. Rotinsulu',
          address: 'Jl. Bukit Jarian No.40, Hegarmanah',
          city: 'Bandung',
          phones: [
            '+62 22 2034446'
          ],
          web: 'http://rsparurotinsulu.org'
        },
        {
          name: 'Rumah Sakit Tk. II Dustira',
          address: 'Jl. Dustira No. 1',
          city: 'Cimahi',
          phones: [
            '+62 22 2034446'
          ],
          web: 'http://rsdustira.com/'
        },
        {
          name: 'RSU Dr. Slamet',
          address: 'Jl. RSU DR. Slamet No.12, Sukakarya',
          city: 'Garut',
          phones: [
            '+62 262 237791'
          ],
          web: null
        },
        {
          name: 'RSU Gunung Jati',
          address: 'Jalan Kesambi Raya No.56, Drajat, Kesambi',
          city: 'Cirebon',
          phones: [
            '+62 231 202441',
            '+62 231 206330'
          ],
          web: 'https://rsudgunungjati.cirebonkota.go.id/'
        },
        {
          name: 'RSU R. Syamsudin, SH',
          address: ' Jl. Rumah Sakit No.1, Cikole',
          city: 'Sukabumi',
          phones: [],
          web: 'https://www.rsudsyamsudin.org/'
        },
        {
          name: 'RSUD Indramayu',
          address: 'Jl. Murahnara No.7, Sindang',
          city: 'Indramayu',
          phones: [
            '+62 234 272655'
          ],
          web: 'http://rsud.indramayukab.go.id/'
        },
        {
          name: 'RSUD Subang',
          address: 'Jl. Brigjen Katamso No.37, Dangdeur',
          city: 'Subang',
          phones: [],
          web: 'http://rsudsubang.com/'
        }
      ]
    }
  },
  computed: {
    itemsToShow () {
      if (!this.isCollapsed) {
        return this.hospitals.filter((_, index) => index < 3)
      }
      return this.hospitals
    }
  }
}
</script>

<style>

</style>
