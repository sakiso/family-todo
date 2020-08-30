<template>
<div>

 <h2>setting</h2>

    <v-text-field
     color="grey darken-1"
     label="新しいユーザ名を入力してください"
     v-model="userName"
     >
    </v-text-field>

    {{msg}}<br> 

    <v-btn
     @click="updateName"
     color="blue darken-3"
     dark>
      submit
    </v-btn>


<br><br>
<router-link
 to="/todo">
 戻る
</router-link>



</div>
</template>

<script>
import firebase from 'firebase/app'
import "firebase/auth"
export default {

  data:function(){
    return{
            userName : "",
            msg      : "",
            password : ""
    }
  },

  name: 'setting',
  components: {
  },
  
  methods: {
    updateName: function () {
      var user = firebase.auth().currentUser;

      //thisの参照が切れないようにselfに対比
      const self = this
      //入力されたuserNameでログイン中アカウントのuserName更新
      user.updateProfile({ displayName:self.userName }).then(function() {
      //処理成功
      self.msg = "登録成功"
      }).catch(function(error) {
      //処理失敗
      console.log(error)
      self.msg = "登録失敗"
      });
      this.userName=""
      }
     }
    }  


</script>

<style scoped>
</style>