import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action, namespace } from 'vuex-class';
import { mapGetters } from 'vuex';

import { ILoginData } from '@/types/views/login.d';
import { gettersType, actionType } from '@/store/module/login'; // 组件
import { Text } from '@/components'; // 组件
const loginStore = namespace('Login');
@Component({
  components: {
    Tx: Text
  }
})
export default class Index extends Vue {
  // Getter
  @loginStore.Getter loginInfo: gettersType;

  // Action
  @loginStore.Action GET_DATA_ASYN: actionType;
  @loginStore.Action UPDATE_STATE_ASYN: actionType;

  // data
  data: ILoginData = {
    pageName: 'login',
    userName: this.$store.getters['Login/loginInfo'].userName
  };
  computed = {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'loginInfo',
      // ...
    ])
  };

  created() {
    //
    this.GET_DATA_ASYN({name: '李四'});
  }
    
  activated() {
    //
  }


  mounted() {
    //
    console.log('loginInfo', this.loginInfo);
    // this.$set(this, 'name', this.loginInfo.name);
    console.log(this.data);
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
