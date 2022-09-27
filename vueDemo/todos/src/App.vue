<template>

  <div>


    <todo-input @add="addNewTask"></todo-input>
    <todo-list :list="taskList"></todo-list>
    <TodoButton  v-model:active="act"></TodoButton>

  </div>

</template>

<script>

import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoButton from "./components/TodoButton.vue";
export default {
  name: 'App',
  components: {TodoButton, TodoInput, TodoList},
  data(){
    return{
      todoList:[
        {id:1 ,task:'111111', done:false},
        {id:1 ,task:'222222222', done:false},
        {id:1 ,task:'333333333333', done:true},
      ],
      nextId:4,
      act:0
    }
  },
  methods:{
    addNewTask(val){
      this.todoList.push({
        id:this.nextId,
        task: val,
        done:false
      })
      this.nextId++;
    },
    activeBtnClick(val){
      this.act=val;
    }
  },
  computed:{
    taskList(){
      switch(this.act){
        case 0:return this.todoList
        case 1:return this.todoList.filter(x=>x.done)
        case 2:return this.todoList.filter(x=>!x.done)
      }
    }
  }
}
</script>

<style scoped lang="less">

</style>
