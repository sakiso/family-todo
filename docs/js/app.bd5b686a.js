(function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,i=1;i<o.length;i++){var c=o[i];0!==a[c]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},a={app:0},r=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"51aa":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:"",dense:""}},[e._v(" Family Todo ")]),o("br"),o("br"),o("br"),o("router-view")],1)},r=[],s={name:"App",components:{},data:function(){return{}}},i=s,c=o("2877"),l=o("6544"),u=o.n(l),d=o("7496"),p=o("40dc"),f=Object(c["a"])(i,a,r,!1,null,null,null),v=f.exports;u()(f,{VApp:d["a"],VAppBar:p["a"]});var m=o("f309");n["a"].use(m["a"]);var h=new m["a"]({}),g=o("0ff2"),b=o("59ca"),_=o.n(b);o("e71f");n["a"].use(g["a"]);var w=_.a.initializeApp({apiKey:"AIzaSyALf4C9tvk55SMZYUeA9sgzWQBB58jXjNs",authDomain:"fufu-project-d3b38.firebaseapp.com",databaseURL:"https://fufu-project-d3b38.firebaseio.com",projectId:"fufu-project-d3b38",storageBucket:"fufu-project-d3b38.appspot.com",messagingSenderId:"906542206934",appId:"1:906542206934:web:6ecd3c5e9a3c8a21085e77",measurementId:"G-ZGMJ3NN0H3"}),y=w.firestore(),x=o("8c4f"),k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"signin"},[o("h1",[e._v("This is a sign in page")]),o("br"),o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"8"}},[o("v-text-field",{attrs:{label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"8"}},[o("v-text-field",{attrs:{label:"Password",type:"password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),o("v-row",[o("v-col",{staticClass:"text-center"},[o("v-btn",{attrs:{color:"light-blue darken-3",dark:"",large:""},on:{click:e.signIn}},[e._v(" sign-in ")])],1)],1)],1)],1)},T=[],j=(o("ea7b"),{data:function(){return{email:"",password:""}},name:"signin",components:{},created:function(){_.a.auth().onAuthStateChanged((function(e){e&&(console.log("logined"),location.href="#/todo")}))},methods:{signIn:function(){console.log("signin"),_.a.auth().signInWithEmailAndPassword(this.email,this.password).catch((function(e){alert(e.message)})),_.a.auth().onAuthStateChanged((function(e){e&&(console.log("logined"),location.href="#/todo")}))}}}),C=j,O=(o("ca5a"),o("8336")),A=o("62ad"),V=o("a523"),N=o("0fd9"),S=o("8654"),L=Object(c["a"])(C,k,T,!1,null,"879a8958",null),P=L.exports;u()(L,{VBtn:O["a"],VCol:A["a"],VContainer:V["a"],VRow:N["a"],VTextField:S["a"]});var I=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{ID:"app"}},[e._v(" todo-list "),o("br"),o("br"),o("v-container",[o("v-row",[o("v-col",[o("v-card",{staticClass:"todo-card",attrs:{elevation:"4",color:"amber lighten-5","min-height":"280px"}},[o("v-card-title",[e._v("ToDo List")]),o("v-card-text",{staticClass:"body-1 text-left"},[o("v-text-field",{attrs:{color:"grey darken-1",label:"ToDoを入力してください"},model:{value:e.newTodoName,callback:function(t){e.newTodoName=t},expression:"newTodoName"}}),o("v-btn",{attrs:{small:"",color:"grey darken-1",dark:""},on:{click:function(t){return e.addTodo()}}},[e._v("＋ 追加")]),o("br"),o("br"),o("ul",e._l(e.todos,(function(t,n){return o("li",{key:n},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.complete_sts,expression:"todo.complete_sts"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.complete_sts)?e._i(t.complete_sts,null)>-1:t.complete_sts},on:{click:function(o){return e.updateTodo(t,n)},change:function(o){var n=t.complete_sts,a=o.target,r=!!a.checked;if(Array.isArray(n)){var s=null,i=e._i(n,s);a.checked?i<0&&e.$set(t,"complete_sts",n.concat([s])):i>-1&&e.$set(t,"complete_sts",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(t,"complete_sts",r)}}}),o("font",{class:{done:t.complete_sts},attrs:{color:"212121"}},[e._v(" "+e._s(t.title)+" ")]),o("font",{staticClass:"entryDate"},[e._v(" "+e._s(t.entry_date)+" ")]),o("font",{staticClass:"entryUserName"},[e._v(" "+e._s(t.entry_user)+" ")]),o("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.complete_sts,expression:"todo.complete_sts"}],staticClass:"delbtn",attrs:{"x-small":"",color:"grey darken",dark:"","margin-left":"100px"},on:{click:function(o){return e.deleteTodo(t,n)}}},[e._v(" 削除 ")])],1)})),0)],1)],1)],1)],1)],1),o("v-btn",{on:{click:e.signOut}},[e._v(" signout ")])],1)},R=[],D=(o("4160"),o("159b"),{name:"todo",data:function(){return{newTodo:"",todos:{},newTodoName:"",todoListRef:null}},created:function(){var e=this;_.a.auth().onAuthStateChanged((function(e){e||(console.log("not logined"),location.href="#/signin")})),this.todoListRef=y.collection("ToDoList"),this.todoListRef.onSnapshot((function(t){var o={};t.forEach((function(e){o[e.id]=e.data()})),e.todos=o}))},methods:{addTodo:function(){if(""!==this.newTodoName){var e=_.a.auth().currentUser;if(null!=e){var t=e.email,o=new Date,n=o.getFullYear()+"/"+o.getMonth()+"/"+o.getDate();this.todoListRef.add({title:this.newTodoName,entry_user:t,entry_date:n,complete_sts:!1})}else console.log("sign-in未済");this.newTodoName=""}else console.log("todo入力なし")},updateTodo:function(e,t){e.complete_sts=!e.complete_sts,this.todoListRef.doc(t).update({complete_sts:e.complete_sts})},deleteTodo:function(e,t){this.todoListRef.doc(t).delete()},signOut:function(){console.log("signOut"),_.a.auth().signOut(),this.$router.push("signin")}}}),$=D,M=(o("621a"),o("b0af")),B=o("99d9"),E=Object(c["a"])($,I,R,!1,null,"9aca78d6",null),F=E.exports;u()(E,{VBtn:O["a"],VCard:M["a"],VCardText:B["a"],VCardTitle:B["b"],VCol:A["a"],VContainer:V["a"],VRow:N["a"],VTextField:S["a"]}),n["a"].use(x["a"]);var U=new x["a"]({routes:[{path:"/signin",component:P},{path:"/todo",component:F}]});n["a"].config.productionTip=!1,new n["a"]({router:U,vuetify:h,render:function(e){return e(v)}}).$mount("#app")},"621a":function(e,t,o){"use strict";var n=o("51aa"),a=o.n(n);a.a},b410:function(e,t,o){},ca5a:function(e,t,o){"use strict";var n=o("b410"),a=o.n(n);a.a}});
//# sourceMappingURL=app.bd5b686a.js.map