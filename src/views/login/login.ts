import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { LoginData } from '@/types/views/login.d';
// import {  } from "@/components" // 组件
import { Text } from '@/components'; // 组件
@Component({
  components: {
    Tx: Text
  }
})
export default class About extends Vue {
  // Getter
  // @Getter login.author
    
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: LoginData = {
    pageName: 'login'
  };

  created() {
    //
    console.log('666');
  }
    
  activated() {
    //
  }

  mounted() {
    //

  }


  goHome() {
    console.log(this.$router);
    this.$router.push('/home').catch((err) => {
      console.log(err);
    });
  }

  // 初始化函数
  init() {
    //
  }
    
}
