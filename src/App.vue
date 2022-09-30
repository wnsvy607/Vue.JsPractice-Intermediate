<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';



export default {
  components: {
    // 컴포넌트 태그명 : 컴포넌트
    'TodoHeader': TodoHeader,
    'TodoInput' : TodoInput,
    'TodoFooter' : TodoFooter,
    'TodoList' : TodoList
  }
}
</script>

<style>

</style>
