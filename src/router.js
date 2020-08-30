//import
import Vue from 'vue';
import router from 'vue-router';

//1.component読み込み
//import signin  from "./view/signin"
import signinByPw  from "./view/signin_by_pw"
import todo  from "./view/todo"
import setting  from "./view/setting"

//vue-routerをインストール
Vue.use(router);

//2.routerの設定とインスタンス生成
export default new router({
  routes:[
/*    {
      path: "/signin", //ログインページ(google利用)
      component:signin
      },
*/
      {
      path: "/signin", //ログインページ
      component:signinByPw
      },

      {
      path: "/todo", //todoリストページ
      component:todo
      },
      
      {
      path: "/setting", //アカウント情報設定ページ
      component:setting
      }
  ]
});