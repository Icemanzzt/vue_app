/**
 * @desc 创建一个组件
 * @type {module:fs}
 */


const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../src')



const chalk = require('chalk');

process.stdin.setEncoding('utf8');
process.stdout.write('请输入组件名>');

process.stdin.on('readable', () => {
    let chunk = process.stdin.read();
    chunk = chunk.replace(/\s*/g, '');
    const reg = /[a-zA-Z]/g;
    if(!(reg.test(chunk))){
        console.log('模块名只能是英文字母');
        process.stdin.emit('end');
    }

    if(chunk === ''){
        process.stdin.emit('end');
        return
    }
    if (chunk !== null) {
        process.stdout.write(`data: ${chunk}\n`);

        const dirName = chunk;
        const folder_exists = fs.existsSync(`${basePath}/components/${dirName}`);
        if(folder_exists){
            console.log("组件名已经存在");
            process.stdin.emit("end");
            return;
        }
        const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)

        /**
         * @msg: vue页面模版
         */
        const VueTep = `<template>
  <div class="${dirName}-wrap">
    {{data.componentName}}
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { Getter, Action } from 'vuex-class'
  import { ${capPirName}Data } from '@/types/components/${dirName}.d';
  // import {  } from "@/components" // 组件

  @Component({})
  export default class Index extends Vue {
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string

    // data
    data: ${capPirName}Data = {
      componentName: '${dirName}'
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

  .${dirName}-wrap {
    width: 100%;
  }
</style>

`

// interface 模版
        const interfaceTep = `// ${dirName}.Data 参数类型
export interface ${capPirName}Data {
  componentName: string
}

`

        fs.mkdirSync(`${basePath}/components/${dirName}`) // mkdir

        process.chdir(`${basePath}/components/${dirName}`) // cd views
        fs.writeFileSync(`index.vue`, VueTep) // vue

        process.chdir(`${basePath}/types/components`) // cd components
        fs.writeFileSync(`${dirName}.d.ts`, interfaceTep) // interface
        process.exit(0);



    }
});

process.stdin.on('end', (a) => {
    console.log('没输入吗？');
});





