<template>
  <form method="POST">
    <table>
          <tr>
              <td>用户名:</td>
              <td><input type="text" name="username" id="" v-model="username"></td>
          </tr>
          <tr>
              <td>密码:</td>
              <td><input type="password" name="password" id="" v-model="password"></td>
          </tr>
          <tr>
              <td><button type="submit" @click.prevent="onSubmit">{{ active }}</button></td>
          </tr>
      </table>
  </form>
</template>

<script>
import axios from '../axios-auth'

export default {
  props: ['active'],
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      const formData = new FormData()
      formData.append('username', this.username)
      formData.append('password', this.password)
      const action = this.active == '注册' ? 'signup' : 'login'
      this.$store.dispatch(action, formData)
    }
  }

}
</script>
