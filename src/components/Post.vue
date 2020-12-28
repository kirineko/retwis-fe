<template>
  <div class="post">
      <strong>
          <router-link :to="`/${post.username}`">
              {{ post.username }}
          </router-link>
      </strong>
      {{ post.content }}
      <div class="date">{{ post.posttime }}</div>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style scoped>

</style>
