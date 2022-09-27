<template>
<div>
  <form class="row g-3 needs-validation" novalidate>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">任务</span>
      <input type="text" class="form-control" placeholder="请输入任务信息" style="width: 350px" v-model.trim="taskname">
      <button class="btn btn-primary" type="submit" @click.prevent="onFormSubmit">Submit</button>
    </div>
  </form>



</div>
</template>

<script>
export default {
  name: "TodoInput",
  data(){
    return{
      taskname:'',
    }
  },
  emits:['add']
  ,
  methods:{
    onFormSubmit:function (){
      if(!this.taskname) return alert("不能为空");
      this.$emit('add',this.taskname);
      this.taskname = '';
    }
  }
}
</script>

<style scoped lang="less">

</style>