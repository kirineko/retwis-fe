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

export default {
  data() {
    return {
      posts: [
        {id: 1, username: 'liyi', content: 'hello world', posttime: new Date()}
      ],
      users: [
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
