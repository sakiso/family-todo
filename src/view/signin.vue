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