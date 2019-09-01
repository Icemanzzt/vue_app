<template>
  <div class="text-wrap">
    {{data.componentName}}
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { Getter, Action } from 'vuex-class'
  import { TextData } from '@/types/components/text.d';
  // import {  } from "@/components" // 组件

  @Component({})
  export default class Index extends Vue {
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string

    // data
    data: TextData = {
      componentName: 'text'
    }

    created() {
      //
    }
    
    activated() {
      //
    }

    mounted() {
      //
    }

  }
</script>

<style lang="scss">
  @import '../../assets/styles/variables.scss';

  .text-wrap {
    width: 100%;
  }
</style>

