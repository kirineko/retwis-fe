<template>
  <div id="header" class="span-24">
      <div class="span-12">
          <br>
          <h1>Retiws</h1>
      </div>

      <div v-if="auth" class="span-12 last right-align">
          <br>
          <br>
          <router-link to="/">home</router-link> |
          <router-link :to="'/mentions/' + username">mentions</router-link> |
          <router-link :to="'/' + username">{{username}}</router-link> |
          <router-link to="/timeline">timeline</router-link> |
          <a href="" @click="onLogout">logout</a>
      </div>

      <hr>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['auth', 'username'])
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>

</style>
