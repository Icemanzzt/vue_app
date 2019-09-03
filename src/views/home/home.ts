import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { HomeData } from '@/types/views/home.d';
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter home.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: HomeData = {
    pageName: 'home'
  };

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
