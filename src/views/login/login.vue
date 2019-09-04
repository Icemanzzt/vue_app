
<template>
  <div class="login-wrap" @click="goHome()">
    {{data.pageName}}
    <div>
      <Tx/>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss">
  @import './login.scss';
</style>

