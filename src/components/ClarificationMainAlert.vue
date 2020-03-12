  <template>
  <div>
    <div  v-if="!hideAlert && main"
          class="bg-green-100 px-4 py-8 md:px-8">
      <h3 class="relative font-bold text-2xl text-gray-900 text-left md:text-center pr-12 md:pr-0">
        <i class="fas fa-exclamation-circle mr-2 text-brand-green"></i>
        <span>
          {{main.title}}
        </span>
        <button class="appearance-none "
                @click="hideAlert = true">
          <i  class="absolute right-0 fas fa-times mr-2 text-gray-600 hover:text-red-500 cursor-pointer"
              style="top: 3px;"></i>
        </button>
      </h3>
      <br>
      <div class="text-base leading-loose"
           v-html="main.content">
        {{main.content}}
      </div>
      <br>
      <div class="clearfix">
        <a  :href="main.action_url"
            @click.prevent="onClick"
            class="float-right text-brand-green-darkest hover:text-green-900 hover:underline font-bold uppercase tracking-widest">
          Buka Rilis Pers
          <i class="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      hideAlert: false
    }
  },
  created () {
    this.fetchMainClarification()
  },
  computed: {
    ...mapState('clarifications-list', {
      main: 'main'
    })
  },
  methods: {
    ...mapActions('clarifications-list', {
      fetchMainClarification: 'fetchMainClarification'
    }),
    onClick (e) {
      if (window.innerWidth < 576) {
        window.open(this.main.action_url, '_blank')
      } else {
        this.$router.push({
          path: '/document-viewer',
          query: {
            src: this.main.action_url
          }
        })
      }
    }
  }
}
</script>

<style>

</style>
