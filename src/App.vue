<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  async beforeCreate () {
    await this.$store.dispatch('tryAutoLogin')
    this.$router.go(-1)
  }
}
</script>

<style>

</style>
