<template>
  <h1 ref="myh1">App 根组件</h1>
  <hr/>
  <button type="button" @click="getRef">获取¥refs引用</button>
  <hr/>
  <Counter ref="addCount"></Counter>
  <hr/>
  <button @click="reset">置0</button>
  <hr/>
  <input type="text" v-if="visible" ref="ipt">
  <button @click="changeVisible">click</button>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  name: "App",
  components: {Counter},
  data(){
    return{
      visible:false
    }
  },
  methods:{
    getRef(){
      // console.log(this.$refs)
      this.$refs.myh1.style.backgroundColor = 'blue';
      this.$refs.addCount.add();
    },
    reset(){
      this.$refs.addCount.reset();
    },
    changeVisible(){
      this.visible = true;
      // this.$refs.ipt.focus();

      this.$nextTick(()=>{
        this.$refs.ipt.focus();
      })

    }
  }
}
</script>

<style scoped>

</style>