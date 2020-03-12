<template>
  <div class="w-full bg-white p-1 shadow" style="position: fixed; bottom: 0">
    <div class="container mx-auto px-4">
      <div class="flex items-center w-full lg:max-w-sm lg:mx-auto justify-around flex-wrap">
        <div class="text-center px-2 py-1">
          <router-link class="no-underline text-gray-700 block" to="/">
            <i class="fas fa-home text-lg" />
            <p class="text-xs">Home</p>
          </router-link>
        </div>
        <div class="text-center px-2 py-1">
          <router-link class="no-underline text-gray-700 block" to="/messages">
            <i class="fas fa-bell text-lg" />
            <p class="text-xs">Notification</p>
          </router-link>
        </div>
        <div class="text-center px-2 py-1">
          <router-link class="no-underline text-gray-700 block" to="/articles">
            <i class="fas fa-newspaper text-lg" />
            <p class="text-xs">News</p>
          </router-link>
        </div>
        <div class="text-center px-2 py-1">
          <router-link class="no-underline text-gray-700 block" to="/faq">
            <i class="fas fa-question-circle text-lg" />
            <p class="text-xs">FAQ</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    // authLoading: 'auth/loading'
    // user: 'auth/user'
  })
}
</script>
