<template>
  <div class="header-wrap">
    <van-nav-bar
      :title="title"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickBack"
      @click-right="onClickRight"
    ></van-nav-bar>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
  import { Getter, Action } from 'vuex-class'
  import { HeaderData } from '@/types/components/header.d';
  // import {  } from "@/components" // 组件

  @Component({})
  export default class Index extends Vue {
    // prop
    @Prop({
      required: false,
      default: ''
    }) title!: string;
    @Prop({
      required: false,
      default: ''
    }) onClickLeft!: (text: string)=> void;

    data: HeaderData = {
      componentName: 'header'
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
    onClickBack() {
      if(this.onClickLeft){
        console.log(this.onClickLeft);
        this.onClickLeft('子组件传入');
      }else {
        this.$router.back();
      }
    }
    onClickRight = () => {
      console.log('right');
    }
  }
</script>

<style lang="scss">
  @import '../../assets/styles/variables.scss';

  .header-wrap {
    width: 100%;
  }
</style>

