<template>
  <div class="signin">
    <h2>sign in</h2>


<v-container>
<v-row justify="center">
  <v-col
   cols="8">
    <v-text-field
     v-model="email"
     label="E-mail"
     required>
    </v-text-field>
  </v-col>
</v-row>


<v-row justify="center">
  <v-col
   cols="8">
    <v-text-field
     v-model="password"
     label="Password"
     type="password"
     required>
    </v-text-field>
  </v-col>
</v-row>

<v-row>
  <v-col
    class="text-center">
    <v-btn
     color="light-blue darken-3"
     dark
     large
     @click="signIn">
      sign-in
    </v-btn>
  </v-col>
</v-row>

</v-container>



  </div>
</template>

<script>
import firebase from 'firebase/app'
import "firebase/auth"
export default {

  data:function(){
    return{
            email    : "",
            password : ""
    }
  },

  name: 'signin',
  components: {
  },
  
  created: function(){
    //初期表示時にログイン済みであればtodoにリダイレクト
      firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("logined")
        location.href="#/todo";
     }})
    },

  methods: {
    signIn: function () {
      console.log("signin")
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
      // Handle Errors here.
            alert(error.message)
      });
    //認証状態（userがnullでない）のときにtodoにリダイレクトする
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("logined")
        location.href="#/todo";
      }
    })
    }
  }
}

</script>

<style scoped>
 .no-line{
   text-decoration: none;
 }

</style>