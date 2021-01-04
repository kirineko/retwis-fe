<template>
  <div class="span-24">
    <div class="span-16">
        <h2>Mentions of: {{ username }}</h2>

        <div v-if="username != loginname" class="box">
            <a
              v-if="!isfollowing"
              @click="follow">
              Following
            </a>
            <a
              v-else
              @click="unfollow">
              Stop Following
            </a>
        </div>

        <div id="posts" class="span-15">
          <app-post v-for="post in posts" :post="post" :key="post.id"></app-post>
        </div>
    </div>
  </div>
</template>

<script>
import Post from './Post'
import {mapGetters} from 'vuex'
import axios from '../axios-auth'

export default {
  data() {
    return {
      username: '',
      isfollowing: false,
      posts: []
    }
  },
  components: {
    appPost: Post
  },

  computed: {
    ...mapGetters({
      loginname: 'username',
      token: 'token'
    })
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData() {
      this.username = this.$route.params.username
      axios.get(`/mentions/${this.username}?auth=${this.token}`)
      .then(res => {
        this.isfollowing = res.data.isfollowing
        this.posts = res.data.posts
      })
      .catch(error => console.log(error))
    },

    follow() {
      axios.get(`/${this.loginname}/follow/${this.username}?auth=${this.token}`)
      .then(res=>{
        console.log(res.data)
        this.isfollowing = true
      })
      .catch(error => console.log(error))
    },

    unfollow() {
      axios.get(`/${this.loginname}/unfollow/${this.username}?auth=${this.token}`)
      .then(res=>{
        console.log(res.data)
        this.isfollowing = false
      })
      .catch(error => console.log(error))
    }
  },

  created() {
    this.fetchData()
  }
}
</script>

<style scoped>

</style>
