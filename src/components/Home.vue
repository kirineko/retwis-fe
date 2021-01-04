<template>
  <div class="span-24">
    <div class="span-16">
        <div id="updateform" class="box">
            <form>
                {{user.username}}, what's on your mind?
                <textarea v-model="content" name="content" id="" cols="70" rows="3"></textarea>
                <br>
                <input type="submit" value="Update" @click.prevent="postUpdate">
            </form>
        </div>

        <div id="posts" class="span-15">
          <app-post v-for="post in posts" :post="post" :key="post.id"></app-post>
        </div>
    </div>

    <div class="span-7 last">
        <app-user-list :users="user.followers">
          <h4>Followers: {{ user.followers_num }}</h4>
        </app-user-list>
        <app-user-list :users="user.following">
          <h4>Following: {{ user.following_num }}</h4>
        </app-user-list>
    </div>
  </div>
</template>

<script>
import Post from './Post'
import UserList from './UserList'
import { mapGetters } from 'vuex'
import axios from '../axios-auth'

export default {

  data() {
    return {
      user: {},
      posts: [],
      content: ''
    }
  },

  computed: {
    ...mapGetters(['username', 'token'])
  },

  components: {
    appPost: Post,
    appUserList: UserList
  },

  methods: {
    postUpdate() {
      const formData = new FormData()
      formData.append('content', this.content)
      axios.post(`/post?auth=${this.token}`, formData)
        .then(res => {
          this.posts.unshift(res.data)
        })
        .catch(error => console.log(error))
    }
  },

  created () {
    axios.get('/?auth=' + this.token)
      .then(res => {
        this.user = res.data
        this.posts = res.data.posts
      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>
