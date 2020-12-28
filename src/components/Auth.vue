<template>
  <div class="span-24">
    <div class="span-11 box">
        <app-login-form active="注册"></app-login-form>
    </div>

    <div class="span-11 box last">
        <app-login-form active="登录"></app-login-form>
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm'

export default {
  components: {
    appLoginForm: LoginForm
  }
}
</script>

<style scoped>

</style>
