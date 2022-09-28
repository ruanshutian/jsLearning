<template>

  <div>

    <div>
      ----------------test_parentsToSon------------------
    </div>
    <son :msg="message" :user="userinfo"></son>

    <button @click="Px+=1">add</button>

<!--    <div>-->
<!--      &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;test_SonTpParents&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--    </div>-->
<!--    <sonToParents @numChange="addSon"></sonToParents>-->
<!--    <p>{{Px}}</p>-->

    <div>
      ----------------test_SandP------------------
    </div>
    <sAndP v-model:count="Px" ></sAndP>
    <p>{{Px}}</p>

  </div>


</template>

<script>
import son from './son.vue'
import sonToParents from "./SonToParents.vue";
import sAndP from "./sAndP.vue"
export default {
  name: "App",
  components: {
    son,sonToParents,sAndP
  },
  data(){
    return{
      message:"hello son",
      userinfo:{
        name:'aron',
        age:25,
      },
      Px:1,
    }
  },
  // methods:{
  //   addSon(val){
  //     this.Px = val
  //   }
  // }
}
</script>

<style scoped>

</style>