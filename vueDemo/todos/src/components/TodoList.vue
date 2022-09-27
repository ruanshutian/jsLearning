<template>
  <ul class="list-group">
    <li class="list-group-item active" aria-current="true" v-for="item in list" :key="item.id">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="item.done">
        <label class="form-check-label" for="flexCheckDefault" :class="item.done?'delete':''">
          {{item.task}}
        </label>
        <span v-if="item.done==true">完成</span>
        <span v-else>未完成</span>
      </div>

    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    list:{
      type:Array,
      required:true,
      default:[]
    }
  }
}
</script>

<style scoped>
.list-group{
  width: 400px;
}
.delete{
  text-decoration: line-through;
  color: gray;
  font-style: italic;
}
</style>