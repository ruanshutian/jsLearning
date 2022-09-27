<template>

  <div>-------------v-model-父到子-----------------</div>
  <div>
    <p>number = {{number}}</p>
  </div>

  <div>-------------v-model-子到父-----------------</div>
  <div>
    <p>number = {{number}}</p>
  </div>
  <button @click="add">add</button>



</template>

<script>
export default {
  name: "Count",
  props:[
      'number'
  ],
  emits:[
      'update:number'
  ],
  methods:{
    add(){
      this.$emit("update:number",this.number+1);
    }
  }
}
</script>

<style scoped>

</style>