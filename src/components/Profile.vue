<template>
  <div class="span-24">
    <div class="span-16">
        <h2> {{ username }}</h2>

        <div class="box" v-if="username != loginname">
            <a v-if="!isfollowing" :href="`/${ loginname }/follow/${ username }`">Following</a>
            <a v-else :href="`/${ loginname }/unfollow/${ username }`">Stop Following</a>
            | <a :href="`/mentions/${ username }`">See Mentions</a>
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
      username: 'liyi',
      loginname: 'tester',
      isfollowing: false,
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
