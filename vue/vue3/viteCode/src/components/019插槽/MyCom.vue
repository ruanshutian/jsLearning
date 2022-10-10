<template>
  <div>
    <p>this is default p</p>
    <slot >  </slot>

    <p>this is first p</p>
    <slot name="first">  </slot>

    <p>this is second p</p>
    <slot name="second"> this is 后备内容 </slot>
    <p>this is third p</p>

    <p>this is third p</p>
    <slot name="third">  </slot>
    <p>this is third p</p>

    <p>this is fourth p</p>
    <slot name="fourth" :info="information">  </slot>
    <p>this is fourth p </p>

    <p>this is fifth p</p>
    <slot name="fifth" :info="information">  </slot>
    <p>this is fifth p </p>


  </div>
</template>

<script>
export default {
  name: "MyCom",
  data(){
    return{
      information:{
        phone:13333333333,
        address:'中国安徽',
        name:'rst'
      }
    }
  }
}
</script>

<style scoped>

</style>