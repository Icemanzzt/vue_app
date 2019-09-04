
<template>
  <div class="login-wrap" @click="goHome()">
    {{loginInfo.data.userName}}
    <div>
      <Tx/>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss">
  @import './login.scss';
</style>

