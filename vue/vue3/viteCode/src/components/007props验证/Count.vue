<template>

  <div>-------------指定对象里面类型验证props------------------</div>
  <div>
    count is Number :<p>{{count}}</p>
    state is Boolean :<p>{{state}}</p>
  </div>

  <div>-------------props基础类型检查------------------</div>
  <div>
    A:String:<p>{{A}}</p>
    B:Number:<p>{{B}}</p>
    C:Boolean:<p>{{C}}</p>
    D:Array:<p>{{D}}</p>
    E:Object:<p>{{E}}</p>
    F:Date:<p>{{F}}</p>
    G:Function:<p>{{G}}</p>
    H:Symbol:<p>{{H}}</p>
    <div>-------------props多个类型检查------------------</div>
    I:[Boolean,String]:<p>{{I}}</p>

    <div>-------------props required检查------------------</div>
    propQ:{
    type:Number,
    required:true
    }:<p>{{propQ}}</p>
    <div>-------------props 默认值------------------</div>
    propM:{
    type:Number,
    default:555
    }：<p>{{propM}}</p>
    <div>-------------props validator------------------</div>
    type:{
    validate(value){
    return ['success','warning','danger'].indexOf(value)!=-1
    }
    }:
    <p>{{type}}</p>

  </div>

</template>

<script>
export default {
  name: "Count",
  // props:[
  //     'count','state'
  // ]
  props:{
    count:Number,
    state:Boolean,
    A:String,
    B:Number,
    C:Boolean,
    D:Array,
    E:Object,
    F:Date,
    G:Function,
    H:Symbol,
    I:[Boolean,Number],
    propQ:{
      type:Number,
      required:true
    },
    propM:{
      type:Number,
      default:555
    },
    type:{
      validator(value){
        return ['success','warning','danger'].indexOf(value)!==-1
      }
    }
  },
}
</script>

<style scoped>

</style>