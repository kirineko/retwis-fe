<template>
  <form method="POST">
    <table>
          <tr>
              <td>用户名:</td>
              <td><input type="text" name="username" id=""></td>
          </tr>
          <tr>
              <td>密码:</td>
              <td><input type="text" name="password" id=""></td>
          </tr>
          <tr>
              <td><button type="submit">{{ active }}</button></td>
          </tr>
      </table>
  </form>
</template>

<script>
export default {
  props: ['active']
}
</script>
