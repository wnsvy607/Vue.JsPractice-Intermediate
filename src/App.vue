<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명"></TodoInput> -->
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    ></TodoList>
    <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성"></TodoList> -->
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  data: function () {
    return {
      todoItems: [],
    };
  },
  methods: {
    addOneItem: function (todoItem) {
      var obj = { completed: false, item: todoItem };
      // key - value 쌍으로 저장되는 API
      // localStorage에서 확인이 가능해야 하기 때문에 obj 객체를 JSON API를 사용해
      // 문자열로 저장한다.
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function (todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem: function (todoItem, index) {
      // todoItem.completed = !todoItem.completed;
      // 이렇게 해버리면 todoItems -> propsdata -> todoItem -> toggleComplete(todoItem) -> toggleOneComplete(todoItem)
      // 라는 안티패턴이 생기기 때문에 아래와 같이 인덱스로 직접 접근한다. 
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // localStorage는 업데이트 하는 API가 없기 때문에 삭제하고 다시 저장한다. (로컬스토리지의 데이터를 갱신)
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
        // console.log(localStorage.key(i));
      }
    }
  },
  components: {
    // 컴포넌트 태그명 : 컴포넌트
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoFooter: TodoFooter,
    TodoList: TodoList,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
