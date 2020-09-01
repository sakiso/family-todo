<template>
  <v-row>
    <v-col cols="5" sm="6" md="4">
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="todo期限"
            prepend-inner-icon="event"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="menu = false" @change="datePick"></v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'datepicker',
    data () {
      return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      }
    },

    created:function(){
      //date初期値（当日の日付）を親コンポーネントにわたすためにcreatedでemit実行
      this.$emit('datePick',this.date)
    },

    methods:{
      datePick(){
        this.$emit('datePick',this.date)
      }
    }
  }
</script>