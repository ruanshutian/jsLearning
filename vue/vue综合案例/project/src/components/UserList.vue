<template>

  <div>
<!--    添加按钮-->
    <el-button type="primary" @click="dialogVisible = true">添加新用户</el-button>

<!--    用户的表哥-->
    <el-table :data="userList" stripe border>
<!--      索引列-->
      <el-table-column label="#" type="index"></el-table-column>
<!--      渲染用户名-->
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="头衔" prop="position"></el-table-column>
<!--      <el-table-column label="创建时间" prop="addtime"></el-table-column>-->
      <el-table-column label="创建时间" >
<!--        <template v-slot:default="scope">-->
<!--          {{scope.row.addtime | dataFormat}}-->
<!--        </template>-->
<!--        slot-scope是vue2写法-->
        <template v-slot="scope">
          {{scope.row.addtime | dataFormat}}
        </template>
      </el-table-column>

      <el-table-column label="操作">
<!--        <template v-slot:default="scope">-->
<!--        <template #default="scope">-->
<!--        <template v-slot="scope">-->
        <template v-slot="{row}">
          <div>
<!--            <a href="#">详情</a>&nbsp;-->
            <router-link :to="'/users/' + row.id">详情</router-link>&nbsp;
            <a href="#" @click.prevent="onRemove(row.id)">删除</a>
          </div>
        </template>
      </el-table-column>
    </el-table>


    <!--      添加用户的对话框-->
    <el-dialog
        title="添加新用户"
        :visible.sync="dialogVisible"
        width="50%" @close="onDialogClose" >

      <el-form :model="form" :rules="formRules" ref="myaddForm">
        <el-form-item label="用户姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="用户年龄" prop="age">
          <el-input v-model.number="form.age"></el-input>
        </el-form-item>
        <el-form-item label="用户头衔" prop="position">
          <el-input v-model="form.position"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="onAddNewUser">确 定</el-button>
      </span>
    </el-dialog>

  </div>

</template>

<script>
export default {
  name: "UserList",
  data(){
    let checkAge=(rule, value ,cb)=>{
      if(!Number.isInteger(value)){
        return cb(new Error("请输入整数！"))
      }
      if(value >100 || value < 1){
        return cb(new Error("年龄必须1-100"))
      }
      cb()
    }
    return{
      userList:[],
      dialogVisible:false,
      form:{
        name:'',
        age:'',
        position:''
      },
      formRules:{
        name:[
          {required:true , message:"名字是必填项", trigger:'blur'},
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        age:[
          {required:true , message:"年龄是必填项", trigger:'blur'},
          {validator:checkAge, trigger: 'blur'}
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        position: [
          {required:true , message:"年龄是必填项", trigger:'blur'},
        ]
      },

    }
  },
  created() {
    this.getUserList()
  },
  methods:{
    async getUserList(){
      const {data:res} = await this.$http.get('/api/users');
      // console.log(res)
      if(res.status !==0 )return console.log("用户列表数据获取失败");
      this.userList = res.data;
      console.log(this.userList)
    },
    //监听对话框关闭
    onDialogClose(){
      // console.log("ok")
      this.$refs.myaddForm.resetFields();
    },
    //点击添加按钮
    onAddNewUser(){
      this.$refs.myaddForm.validate(async (valid)=>{
        if(!valid)return;
        const {data:res} = await this.$http.post('/api/users',this.form);
        console.log(res);

        //消息提示
        if(res.status !== 0 ) return this.$message.error("添加失败")
        this.$message.success("添加成功")

        this.dialogVisible =false;
        this.getUserList();
      })
    },
    //删除
    async onRemove(id){
      // console.log(11)
      const confirmResult = await this.$confirm("此操作将永久删除该用户","提示",{
        confirmButtonText:"确定",
        cancelButtonText:"取消",
        type:"warning"
      }).catch(err=>err)
      console.log(confirmResult)
      if(confirmResult !=="confirm"){
          return this.$message.info("取消了删除")
      }

      const  {data:res} = await this.$http.delete('/api/users/' + id);
      if(res.status !== 0) return this.$message.info("取消了删除");
      this.$message.success('删除成功')
      this.getUserList();
    }
  }
}
</script>

<style scoped lang="less">
.el-table{
  margin-top: 15px;
}
</style>