//import
import Vue from 'vue';
import router from 'vue-router';

//1.component読み込み
import signin  from "./view/signin"
import todo  from "./view/todo"

//vue-routerをインストール
Vue.use(router);

//2.routerの設定とインスタンス生成
export default new router({
  routes:[
    {
      path: "/signin", //ログインページ
      component:signin
      },

      {
      path: "/todo", //todoリストページ
      component:todo
      }
      
  ]
});