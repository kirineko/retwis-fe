<template>
  <div id="header" class="span-24">
      <div class="span-12">
          <br>
          <h1>Retiws</h1>
      </div>

      <div class="span-12 last right-align">
          <br>
          <br>
          <router-link to="/">home</router-link> |
          <router-link :to="'/mentions/' + username">mentions</router-link> |
          <router-link :to="'/' + username">{{username}}</router-link> |
          <router-link to="/timeline">timeline</router-link> |
          <router-link to="/logout">logout</router-link>
      </div>

      <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'tester'
    }
  }
}
</script>

<style scoped>

</style>
