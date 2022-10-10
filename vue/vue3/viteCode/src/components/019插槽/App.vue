<template>
  <hr/>

  <div>

    <MyCom>
      <li>hello li1 </li>
      <li>hello li2 </li>
    </MyCom>

  </div>

  <hr/>

  <hr/>
  <div>
    <MyCom></MyCom>
  </div>
  <hr/>
  <span>具名插槽</span>
  <hr/>
  <div>
    <MyCom>
      <template v-slot:first>
        <li>this is first slot</li>
      </template>
      <template #second>
        <li>this is second slot</li>
      </template>
      <template #fourth="scope" >
        <li>this is fourth slot</li>
        <li>{{scope}}</li>
        <li>{{scope.info.name}}</li>
      </template>
      <template #fifth="{info}" >
        <li>this is fifth slot解构赋值</li>
        <li>{{info}}</li>
        <li>{{info.name}}</li>
      </template>
    </MyCom>
  </div>
  <hr/>

</template>

<script>
import MyCom from "./MyCom.vue";
export default {
  name: "App",
  components: {
    MyCom
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>