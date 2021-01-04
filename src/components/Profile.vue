<template>
  <div class="span-24">
    <div class="span-16">
        <h2> {{ username }}</h2>

        <div class="box" v-if="username != loginname">
            <a v-if="!isfollowing" @click="follow">Following</a>
            <a v-else @click="unfollow">Stop Following</a>
            | <router-link :to="`/mentions/${ username }`">See Mentions</router-link>
        </div>

        <div id="posts" class="span-15">
          <app-post v-for="post in posts" :post="post" :key="post.id"></app-post>
        </div>
    </div>


    <div class="span-7 last">
        <app-user-list :users="followers">
          <h4>Followers: {{ followers_num }}</h4>
        </app-user-list>
        <app-user-list :users="following">
          <h4>Following: {{ following_num }}</h4>
        </app-user-list>
    </div>
  </div>
</template>

<script>
import Post from './Post'
import UserList from './UserList'
import {mapGetters} from 'vuex'
import axios from '../axios-auth'

export default {
  data() {
    return {
      username: '',
      isfollowing: false,
      posts: [],
      followers_num: 0,
      following_num: 0,
      followers: [],
      following: []
    }
  },
  components: {
    appPost: Post,
    appUserList: UserList
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
      axios.get(`/${this.username}?auth=${this.token}`)
      .then(res => {
        const result = res.data
        this.isfollowing = result.isfollowing
        this.followers = result.followers
        this.following = result.following
        this.followers_num = result.followers_num
        this.following_num = result.following_num
        this.posts = result.posts
      })
      .catch(error => console.log(error))
    },

    follow() {
      axios.get(`/${this.loginname}/follow/${this.username}?auth=${this.token}`)
      .then(res=>{
        console.log(res.data)
        this.isfollowing = true
        this.followers.unshift({username: this.loginname})
        this.followers_num += 1
      })
      .catch(error => console.log(error))
    },

    unfollow() {
      axios.get(`/${this.loginname}/unfollow/${this.username}?auth=${this.token}`)
      .then(res=>{
        console.log(res.data)
        this.isfollowing = false
        this.followers.splice(this.following.findIndex((element) => {
          element.username == this.loginname
        }), 1)
        this.followers_num -= 1
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
