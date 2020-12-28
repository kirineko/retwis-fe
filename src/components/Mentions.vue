<template>
  <div class="span-24">
    <div class="span-16">
        <h2>Mentions of: {{ username }}</h2>

        <div v-if="username != loginname" class="box">
            <a
              v-if="!isfollowing"
              :href="`/${ loginname }/follow/${ username }`">
              Following
            </a>
            <a
              v-else
              :href="`/${ loginname }/unfollow/${ username }`">
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

export default {
  data() {
    return {
      username: 'liyi',
      loginname: 'tester',
      isfollowing: false,
      posts: [
        {id: 1, username: 'liyi', content: 'hello world', posttime: new Date()}
      ],
    }
  },
  components: {
    appPost: Post
  }
}
</script>

<style scoped>

</style>
