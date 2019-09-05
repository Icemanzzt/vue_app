
<template>

  <div class="login-wrap">
    <Hd title="登录" ></Hd>
    <div @click="goHome()">
      {{loginInfo.data.userName}}
    </div>
    <div>
      <Tx/>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss">
  @import './login.scss';
</style>

