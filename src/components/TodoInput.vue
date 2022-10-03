<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">

      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function () {
      if(this.newTodoItem !== '') {
        var obj = {completed: false, item: this.newTodoItem};
      // key - value 쌍으로 저장되는 API
      // localStorage에서 확인이 가능해야 하기 때문에 obj 객체를 JSON API를 사용해
      // 문자열로 저장한다.
      localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
      this.clearInput();
      }
    },
    clearInput: function () {
      // input box에 입력된 값을 비우는 로직
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB,#8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>