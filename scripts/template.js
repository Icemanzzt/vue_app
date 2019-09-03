/**
 * @desc 创建一个模块
 * @type {module:fs}
 */
const fs = require("fs");
const path = require("path");
const basePath = path.resolve(__dirname, "../src");

const chalk = require("chalk");

process.stdin.setEncoding("utf8");
process.stdout.write("请输入模块名>");

process.stdin.on("readable", () => {
    let chunk = process.stdin.read();
    chunk = chunk.replace(/\s*/g, "");
    const reg = /[a-zA-Z]/g;
    if (!(reg.test(chunk))) {
        console.log("模块名只能是英文字母");
        process.stdin.emit("end");
        return;
    }

    if (chunk === "") {
        process.stdin.emit("end");
        return;
    }
    if (chunk !== null) {
        process.stdout.write(`moduleName: ${chunk}\n`);
        const dirName = chunk;
        const folder_exists = fs.existsSync(`${basePath}/views/${dirName}`);
        if(folder_exists){
            console.log("模块名已存在");
            process.stdin.emit("end");
            return;
        }
        const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1);

        /**
         * @msg: vue页面模版
         */
        const VueTep = `<template>
  <div class="${dirName}-wrap">
    {{data.pageName}}
  </div>
</template>

<script lang="ts" src="./${dirName}.ts"></script>

<style lang="scss">
  @import './${dirName}.scss';
</style>

`;

// ts 模版
        const tsTep = `import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { ${capPirName}Data } from '@/types/views/${dirName}.d';
// import {  } from "@/components"; // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter ${dirName}.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: ${capPirName}Data = {
    pageName: '${dirName}'
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

  // 初始化函数
  init() {
    //
  }

}
`;

// scss 模版
        const scssTep = `@import '../../assets/styles/variables.scss';

.${dirName}-wrap {
  width: 100%;
}
`;

// interface 模版
        const interfaceTep = `// ${dirName}.Data 参数类型
export interface ${capPirName}Data {
  pageName: string
}

// VUEX ${dirName}.State 参数类型
export interface ${capPirName}State {
  [key: string]: any
  
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

`;

// vuex 模版
        const vuexTep = `import { ${capPirName}State } from '@/types/views/${dirName}.d'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as ${capPirName}Api from '@/api/${dirName}'

const state: ${capPirName}State = {
  ${dirName}: {
   author: undefined
  }
}

// 强制使用getter获取state
const getters: GetterTree<${capPirName}State, any> = {
  author: (state: ${capPirName}State) => state.${dirName}.author
}

// 更改state
const mutations: MutationTree<${capPirName}State> = {
  // 更新state都用该方法
  UPDATE_STATE(state: ${capPirName}State, data: ${capPirName}State) {
    for (const key in data) {
      if (state.hasOwnProperty(key)) {
        state[key] = data[key]
      }
    }
  }
}

const actions: ActionTree<${capPirName}State, any> = {
  UPDATE_STATE_ASYN({ commit, state: ${capPirName}State }, data: ${capPirName}State) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   ${capPirName}Api.getData();
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

`;

// api 接口模版
        const apiTep = `import Api from '@/utils/request';

export const getData = () => {
  return Api.getData();
}

`;

        fs.mkdirSync(`${basePath}/views/${dirName}`); // mkdir

        process.chdir(`${basePath}/views/${dirName}`); // cd views
        fs.writeFileSync(`${dirName}.vue`, VueTep); // vue
        fs.writeFileSync(`${dirName}.ts`, tsTep); // ts
        fs.writeFileSync(`${dirName}.scss`, scssTep); // scss

        process.chdir(`${basePath}/types/views`); // cd types
        fs.writeFileSync(`${dirName}.d.ts`, interfaceTep); // interface

        process.chdir(`${basePath}/store/module`); // cd store
        fs.writeFileSync(`${dirName}.ts`, vuexTep); // vuex

        process.chdir(`${basePath}/api`); // cd api
        fs.writeFileSync(`${dirName}.ts`, apiTep); // api

        process.exit(0);

    }
});

process.stdin.on("end", (a) => {
    // console.log('没输入吗？');
});
