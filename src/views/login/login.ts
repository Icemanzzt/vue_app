import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action, namespace } from 'vuex-class';
import { LoginData } from '@/types/views/login.d';
import { actionType } from '@/store/module/login'; // 组件
import { Text } from '@/components'; // 组件
const loginStore = namespace('Login');
@Component({
  components: {
    Tx: Text
  }
})
export default class About extends Vue {
  // Getter
  // @Getter login.author

  // Action
  @loginStore.Action GET_DATA_ASYN: actionType;
  @loginStore.Action UPDATE_STATE_ASYN: actionType;

  // data
  data: LoginData = {
    pageName: 'login'
  };

  created() {
    //
  }
    
  activated() {
    //
  }

  mounted() {
    //
    console.log(process.env.APP_ENV);
    console.log(process.env);

    this.GET_DATA_ASYN();
    this.UPDATE_STATE_ASYN({author: 11});
  }


  goHome() {
    this.$router.push('/home').catch((err) => {
      console.log(err);
    });
  }

  // 初始化函数
  init() {
    //
  }
    
}
