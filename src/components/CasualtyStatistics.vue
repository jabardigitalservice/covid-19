<template>
  <div>
    <ul class="casualty-statistics">
      <li v-for="(stat, index) in listOfCases" :key="index"
         class="casualty-statistics__item">
        <h6 :class="['flex-none w-full sm:mb-2 md:p-0 lg:mb-0 text-base uppercase tracking-widest font-bold', `text-${stat.color}`]">
          {{stat.title}}<br>
          <small v-if="stat.subtitle">
            {{stat.subtitle}}
          </small>
        </h6>
        <div class="flex-none w-full flex justify-between items-center text-xl text-gray-900 font-bold border-b border-solid border-gray-300 leading-loose">
          <label>
            Jawa Barat
          </label>
          <span>
            {{stat.jabar}}
          </span>
        </div>
        <div class="flex-none w-full flex justify-between items-center text-gray-700 text-lg border-b border-solid border-gray-300 leading-loose">
          <label>
            Nasional
          </label>
          <span>
            {{stat.nasional}}
          </span>
        </div>
        <p v-if="stat.description">
          {{stat.description}}
        </p>
      </li>
    </ul>
    <ul class="casualty-statistics flex-wrap">
      <li v-for="(stat, index) in listOfODPAndPDP" :key="index"
          class="casualty-statistics__table mb-12">
        <h6 :class="['flex-none w-full mb-2 md:p-0 text-base uppercase tracking-widest font-bold', `text-${stat.color}`]">
          <span v-html="stat.title"></span>
        </h6>
        <table class="table table-auto w-full">
          <tbody>
            <tr>
              <th class="w-1/2">Jawa Barat</th>
            </tr>
            <tr>
              <td class="text-lg">
                <div class="pb-2 flex flex-wrap justify-between items-baseline text-green-700">
                  <label>
                    Total
                  </label>
                  <p class="mr-4 text-xl font-bold">
                    {{stat.total.jabar}}
                  </p>
                </div>
                <div class="pb-2 flex flex-wrap justify-between items-baseline border-b-2 border-solid border-gray-300 text-gray-600">
                  <label>
                    Selesai
                  </label>
                  <p class="mr-4 text-xl font-bold">
                    {{stat.selesai.jabar}}
                  </p>
                </div>
                <div class="py-2 flex flex-wrap justify-between items-baseline">
                  <label>
                    Masih dalam<br>Pengawasan
                  </label>
                  <p class="mr-4 text-xl font-bold text-right">
                    {{stat.total.jabar - stat.selesai.jabar}}
                    <br>
                    <sub>
                      {{`(${round((stat.total.jabar - stat.selesai.jabar) * 100 / stat.total.jabar, 2)}%)`}}
                    </sub>
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </li>
    </ul>
  </div>
</template>

<script>
import round from 'lodash/round'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('stats', {
      data: state => state.data
    }),
    listOfCases () {
      if (!this.data) return []
      const { aktif, sembuh, meninggal } = this.data
      return [
        {
          color: 'blue-500',
          title: 'Kasus Aktif',
          subtitle: '',
          ...aktif
        },
        {
          color: 'green-500',
          title: 'Sembuh',
          subtitle: '',
          ...sembuh
        },
        {
          color: 'red-500',
          title: 'Meninggal',
          subtitle: '',
          ...meninggal
        }
      ]
    },
    listOfODPAndPDP () {
      if (!this.data) return
      const { odp, pdp } = this.data
      return [
        {
          color: 'blue-500',
          title: 'Pasien dalam Pengawasan<br>(PDP)',
          subtitle: '',
          ...pdp
        },
        {
          color: 'orange-500',
          title: 'Orang dalam Pemantauan<br>(ODP)',
          subtitle: '',
          ...odp
        }
      ]
    }
  },
  methods: {
    round
  }
}
</script>

<style lang="scss" scoped>
.casualty-statistics {
  & {
    @apply p-4 flex flex-col justify-start items-start;
  }

  @screen sm {
    @apply flex-row justify-center items-start;
  }

  @screen lg {
    @apply flex flex-col justify-start items-start;
  }
}

.casualty-statistics__item {
  @apply w-full rounded-lg mb-8
  flex flex-row flex-wrap justify-between items-center
  text-left;

  @screen sm {
    @apply p-0 mr-5 block flex-1
    border-0;
  }

  @screen lg {
    @apply w-full rounded-lg mb-8 p-0
    flex flex-row justify-between items-center;
  }
}

.casualty-statistics__table {
  @apply flex-none w-full;

  @screen sm {
    @apply flex-1 mr-4;
  }

  @screen lg {
    @apply flex-none mr-0;
  }
}

.table {
  @apply border-r border-b border-solid border-gray-300;
  th, td {
    @apply border-t border-l border-solid border-gray-300
    p-4 text-left;
  }
  th {
    @apply text-xl;
  }
}
</style>
