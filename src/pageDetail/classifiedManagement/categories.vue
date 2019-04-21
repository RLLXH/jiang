<template>
<div>
  <el-button @click="select">查询</el-button>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="id" label="商品大类id" width="180"></el-table-column>
    <el-table-column prop="bigCategoryName" label="大类名称" width="180"></el-table-column>

  </el-table>
</div>
</template>

<script>
  export default {
    name: 'categories',
    data(){
      return{
        tableData:[],
      }
    },
    created(){
      //在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。

    },
    mounted(){
      //在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
      this.select();
      console.log("什么鬼i")
    },
    methods:{
      select:function () {
        this.$axios({
          method:'get',
          url:'http://localhost:8080/bigCategory/selectAll',
          data:this.qs.stringify({    //这里是发送给后台的数据

          })
        }).then((response) =>{
          console.log("开始打印！")//这里使用了ES6的语法
          console.log(response)       //请求成功返回的数据
          this.tableData=response.data
        }).catch((error) =>{
          console.log(error)       //请求失败返回的数据
        })

      },

    }

  }
</script>

<style scoped>

</style>
