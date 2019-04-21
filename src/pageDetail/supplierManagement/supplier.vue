<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-input v-model="input" placeholder="请输入内容"></el-input>

    <el-button type="primary" plain>查询</el-button>
    <el-button type="info" plain>添加</el-button>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="supplierName"
        label="供应商名">
      </el-table-column>
      <el-table-column
        prop="supplierPhone"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="supplierAddress"
        label="地址">
      </el-table-column>

      <el-table-column
        prop="supplierWeb"
        label="网址">
      </el-table-column>

      <el-table-column
        prop="operation"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="dilogclick(scope.row)" type="text" size="small" icon="el-icon-edit">修改</el-button>
          <el-button type="text" size="small" icon="el-icon-delete" style="color: darkred">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'supplier',
    data() {
      return {
        tableData:[]
      }
    },
    methods: {
      getList(){
        this.$axios({
          method:'POST',
          url:'http://localhost:8080/supplier/select',
          data:this.qs.stringify({    //这里是发送给后台的数据
            pageNum:1,
            pageSize:7,
          })
        }).then((response) =>{
          console.log(response.data)       //请求成功返回的数据
          this.tableData=response.data.content
          console.log(this.tableData)
        }).catch((error) =>{
          console.log(error)       //请求失败返回的数据
        })
      },
    },
    mounted(){
      this.getList()
    },
    created () {

    }

  }
</script>

<style scoped>
  .el-input{
    width: 200px;
  }
</style>
