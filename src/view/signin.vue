<template>
  <div class="signin">
    <h1>This is a sign in page</h1>


<br>

  <v-btn
  @click="signIn"
  >
    sign-in
  </v-btn>

<br>
    <router-link to="/todo" class="no-line">
    次の画面へ(メニュー)
    </router-link>
<br>


  </div>
</template>

<script>
import firebase from 'firebase/app'
import "firebase/auth"
export default {
  name: 'signin',
  components: {
  },
  created : function(){
    //認証状態（userがnullでない）のときにtodoにリダイレクトする
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    console.log("logined")
    location.href="#/todo";
   }
  });
  },

  methods: {
    signIn: function () {
      const provider = new firebase.auth.GoogleAuthProvider() //googleを指すもの
      firebase.auth().signInWithRedirect(provider)           //providerを引数にしてサインイン処理
    },
  },
}

</script>

<style scoped>
 .no-line{
   text-decoration: none;
 }

</style>