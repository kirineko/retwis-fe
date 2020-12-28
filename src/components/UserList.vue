<template>
  <div class="box">
    <slot></slot>
    <ul class="user-list">
      <li v-for="user in users" :key="user.id">
          <router-link :to="`/${ user.username }`">
              {{ user.username }}
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['users']
}
</script>

<style scoped>

</style>
