import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action, namespace } from 'vuex-class';
import { mapGetters } from 'vuex';
import {formatDate, getDate} from '@/utils/common';
import { ILoginData } from '@/types/views/login.d';
import { gettersType, actionType } from '@/store/module/login'; // 组件
import { Text } from '@/components'; // 组件
import { Hender } from '@/components'; // 组件
const loginStore = namespace('Login');
@Component({
  components: {
    Tx: Text,
    Hd: Hender
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
    console.log(formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss:qq:S'));
  }

  onClickLeft = (text: string) => {
    console.log('子组件向父组件传值成功：', text);
  }
  onClickRight = () => {
    console.log('right');
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
