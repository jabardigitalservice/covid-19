<template>
  <div>
    <div v-if="showPopupNotification" class="bg-brand-yellow-darkest">
      <div class="container mx-auto">
        <div class="flex flex-wrap px-6 py-4">
          <div class="text-sm w-full">
            Izinkan notifikasi mengirim pesan
            <button @click="allowNotification" class="ml-2 bg-brand-blue text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Allow
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white shadow">
      <div class="container mx-auto px-2">
        <div class="flex items-center px-3 py-4">
          <a href="/">
            <img class="block h-10 mx-auto mr-4" src="@/assets/logo.jpg" alt>
          </a>

          <a href="/">
            <div class="text-left flex-grow">
              <p class="text-sm leading-normal">Pusat Informasi &amp; Koordinasi COVID-19</p>
              <p class="text-sm text-gray-700">Provinsi Jawa Barat</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <slot>
      <router-view />
    </slot>
    <navbar />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { db, FieldValue, messaging } from '@/lib/firebase'

export default {
  components: {
    Navbar
  },

  computed: {
    // showPopupNotification () {
    //   return Notification.permission === 'default'
    // }
  },

  data () {
    return {
      showPopupNotification: false
    }
  },

  mounted () {
    this.checkPermission()

    this.$store.dispatch('home-banners/fetchItems')
    this.$store.dispatch('home-articles/fetchItems')
    this.$store.dispatch('messages-list/fetchItems')
  },

  methods: {
    async checkPermission () {
      if (!messaging) return

      const permission = await Notification.permission

      if (permission === 'default') {
        this.showPopupNotification = true
      }

      if (permission === 'granted') {
        const token = await messaging.getToken()

        this.saveToken(token)
      }
    },

    async allowNotification () {
      if (!messaging) return

      // Request Permission of Notifications
      const permission = await Notification.requestPermission()

      if (permission === 'granted') {
        const token = await messaging.getToken()

        this.saveToken(token)
      }

      messaging.onTokenRefresh(async () => {
        const token = await messaging.getToken()

        this.saveToken(token)
      })

      this.showPopupNotification = false
    },

    async saveToken (token) {
      const tokenRef = await db.collection('tokens').doc(token)
      const record = await tokenRef.get()

      if (record.exists === false) {
        tokenRef.set({
          'token': token,
          'createdAt': FieldValue.serverTimestamp()
        })
      }
    }
  }
}
</script>
