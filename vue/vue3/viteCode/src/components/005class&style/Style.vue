<template>

  <div>-----------------绑定class-------------</div>
  <h1 >this is h1 </h1>
  <h1 class="thin">this is h1 </h1>
  <h1 class="thin" :class="isChange?'italic':''">this is h1 </h1>
  <button @click="fun">change italic</button>

  <div>-----------------数组-------------</div>
  <h1 class="thin" :class="[isChange?'italic':'',isDelete?'delete':'']">this is text </h1>
  <button @click="fun">toggle italic</button>
  <button @click="deleteF">toggle delete</button>

  <div>-----------------对象-------------</div>
  <h1 class="thin" :class="classObj">this is text </h1>
  <button @click="classObj.italic = !classObj.italic">toggle italic</button>
  <button @click="classObj.delete = !classObj.delete">toggle delete</button>

  <div>-----------------style绑定-------------</div>
  <h1 :style="{color:fcolor,fontSize:fsize+'px',backgroundColor:bgcolor}">this is text </h1>
  <button @click="addSize">addSize</button>
  <button @click="deleteSize">deleteSize</button>

</template>

<script>
export default {
  name: "Style",
  data(){
    return{
      isChange:false,
      isDelete:false,
      classObj:{
        isChange:false,
        isDelete:false,
      },
      fcolor:'red',
      fsize:30,
      bgcolor:'blue'
    }
  },
  methods:{
    fun:function (){
      this.isChange = ! this.isChange;
    },
    deleteF:function (){
      this.isDelete = !this.isDelete;
    },
    addSize:function (){
        this.fsize++;
    },
    deleteSize:function (){
      this.fsize--;
    }
  }
}
</script>

<style scoped>

.thin{
  font-weight: 200;
}
.italic{
  font-style: italic;
}
.delete{
  text-decoration: line-through;
}

</style>