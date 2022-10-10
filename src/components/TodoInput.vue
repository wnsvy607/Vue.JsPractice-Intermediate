<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
    <AlertModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고
        <i class="closeModal Btn fa-regular fa-circle-xmark" @click="showModal = false"></i>
      </h3>
      <div slot="body">
        빈칸을 저장할 수 없습니다.
      </div>
      
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue';

export default {
  data () {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo () {
      if(this.newTodoItem !== '') {
      // themit('이벤트 이름', 인자1, 인자2, ...);
      this.$emit('addTodoItem', this.newTodoItem);
      this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput () {
      // input box에 입력된 값을 비우는 로직
      this.newTodoItem = "";
    }
  },
  components: {
    AlertModal
  }
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
  .closeModalBtn {
    color: #42b983;
  }
</style>