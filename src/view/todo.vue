<template>
<div ID="app">

<v-container>
<v-row>
<v-col>
  <v-card class="todo-card"
      elevation="4"
      color="amber lighten-5"
      min-height="280px">
    <v-card-title>ToDo List</v-card-title>
    <v-card-text class="body-1 text-left">
    <v-text-field
     color="grey darken-1"
     label="ToDoを入力してください"
     v-model="newTodoName"
     >
    </v-text-field>

   <datepicker @datePick="dateSet">
   </datepicker>

   <v-btn 
     small
     color="light-blue accent-4"
     dark
     @click="addTodo()">＋ 追加
   </v-btn>

   <br>
   <br>

   <v-divider></v-divider>

   <br>


          <v-row>
    <ul>
      

      <li
       v-for="(todo,key) in todos" :key="key"
      >
        <input type="checkbox"
         v-model="todo.complete_sts"
         @click="updateTodo(todo,key)"/>
  
         <font 
          color="212121" 
          :class="{done: todo.complete_sts}"> 
          {{todo.title}}
          </font>

        <font 
          class="appointedDate" >
          {{todo.appointed_date}}
          まで
        </font>

        <font 
          class="entryUserName" >
          {{todo.entry_user}}
        </font>
        
        <font 
          class="entryDate" >
          {{todo.entry_date}}
        </font>

         <v-btn
           x-small
           color="grey darken"
           dark
           margin-left="100px"
           @click="deleteTodo(todo,key)"
           v-show="todo.complete_sts"
           class="delbtn">
           削除
         </v-btn>


      </li>
      
    </ul>
</v-row>
  </v-card-text>
</v-card>
</v-col>
</v-row>

<v-row>
<v-col>
  <!--余白用row-->
</v-col>
</v-row>


<v-row>
<v-col>
  <v-btn
   @click="signOut"
   color="grey darken-1"
   dark
   dense>
  sign-out
</v-btn>
</v-col>
</v-row>

<!-- 一度ユーザ名を設定したらもう不要なのでコメントアウトしている
<v-row>
<v-col>
  <router-link
   to="/setting">
   ユーザ名設定
</router-link>
</v-col>
</v-row>
-->

</v-container>


</div>
</template>

<script>
import {db} from '@/plugins/firebase';
import firebase from 'firebase/app'
import "firebase/auth"
import datepicker from "@/components/datepicker.vue"

export default {
    name:"todo",
    data:function() {
      return{ newTodo : "",
              todos : {},
              newTodoName : "",
              todoListRef : null,
              appointedDate : ""
             }
     },

     components:{
       datepicker
     },

//初期処理
  created: function() {

  //認証状態でない場合、サインイン画面にリダイレクト
  firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    console.log("not logined")
    location.href="#/signin";
  }})


  //Firestoreからデータ取得
  //todoコレクションへの参照  
  this.todoListRef = db.collection("ToDoList")  

  //ToDoListコレクション全体の参照に、onSnapshotメソッドでリッスン開始
  this.todoListRef.onSnapshot(querySnapshot => { 
   //データが更新されるとコールバック関数（querysnapshot）を実行
   const obj = {} //空白のobject用意（object型でデータを取得するため）
   querySnapshot.forEach(doc => { 
     obj[doc.id] = doc.data()   
   })
   this.todos = obj
  })
 

},

  methods:{

    dateSet(pickedDate){
      //datePickerコンポーネントから帰ってきた値(appointedDate)を処理するメソッド
      console.log(pickedDate)
      //YYYY-MM-DDで受け取るので、MM-DD形式に変換(09などを9にするためNumberを噛ませる)
      this.appointedDate = Number(pickedDate.substr(5,2)) + "/" + Number(pickedDate.substr(8,2))      
    },

    addTodo(){
      //入力がなければ抜ける
      if(this.newTodoName === ""){ console.log("todo入力なし");return }
      //ログインユーザ名を取得
      const user = firebase.auth().currentUser;
      if (user != null) {
        const userName  = user.displayName; //settingページで設定されたdisplayNameをFIlestoreから取得        
        const today     = new Date()
        const entryDate = (today.getMonth()+1) + "/" + today.getDate()
        const timestamp = today.toISOString()
        
        //todolistにsetする（IDにタイムスタンプを設定したいためaddではなくset）
        this.todoListRef.doc(timestamp).set({
        title:this.newTodoName,// 入力されたnewTodoNameをtitleに
        entry_user:userName,
        entry_date:entryDate,
        appointed_date:this.appointedDate,
        complete_sts:false     // 完了区分はfalse
        })
      }
      else{console.log("sign-in未済")}
      this.newTodoName = ""  // 入力フォームの入力値をクリアする
    },

    updateTodo(todo,key){
      //checkbox押下時にfirestoreのcomplete_stsを同期更新する
      todo.complete_sts = !todo.complete_sts //現在のboolean値を反転させて代入！
      this.todoListRef.doc(key).update({ //引数keyで更新するdocを特定し、
        complete_sts: todo.complete_sts  //objectで更新対象と内容を指定
      })
    },    

    deleteTodo(todo,key){
      //削除ボタン押下時にfirestoreの該当docを削除する
      this.todoListRef.doc(key).delete()
    },

    signOut(){
      console.log("signOut")
      firebase.auth().signOut()
      this.$router.push('signin')
    } 
  }
}

</script>

<style scoped>
    .delbtn {
      margin-left: 15px;
    }
    .done {
      color:gray;
      text-decoration: line-through;
    }
     .no-line{
      text-decoration: none;
      color:bluegray;
    }
    .entryUserName {
      color:gray;
      font-size:70%;
      margin-left: 10px;
    }
    .entryDate {
      color:gray;
      font-size:70%;
    }
    .appointedDate{
      color:#C62828;
      font-size:85%;
      margin-left: 15px;
    }


</style>