<template>
  <div class="span-24">
    <div class="span-16">
        <h2>Timeline</h2>

        Posts from all users.
        <br>

        <div id="posts" class="span-15">
          <app-post v-for="post in posts" :post="post" :key="post.id"></app-post>
        </div>
    </div>


    <div class="span-7 last">
        <app-user-list :users="users">
          <h3>New User</h3>
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
      posts: [],
      users: []
    }
  },
  components: {
    appPost: Post,
    appUserList: UserList
  },

  computed: {
    ...mapGetters({
      token: 'token'
    })
  },

  methods: {
    fetchData() {
      axios.get(`/timeline?auth=${this.token}`)
      .then(res => {
        this.posts = res.data.posts
        this.users = res.data.users
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
