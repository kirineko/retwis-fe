<template>
  <div class="span-24">
    <div class="span-16">
        <div id="updateform" class="box">
            <form action="/post" method="post">
                {{username}}, what's on your mind?
                <textarea name="content" id="" cols="70" rows="3"></textarea>
                <br>
                <input type="submit" value="Update">
            </form>
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

export default {
  data() {
    return {
      username: 'tester',
      posts: [
        {id: 1, username: 'liyi', content: 'hello world', posttime: new Date()}
      ],
      followers_num: 1,
      following_num: 1,
      followers: [
        {id: 1, username: 'liyi'}
      ],
      following: [
        {id: 2, username: 'tester'}
      ]
    }
  },

  components: {
    appPost: Post,
    appUserList: UserList
  }
}
</script>

<style scoped>

</style>
