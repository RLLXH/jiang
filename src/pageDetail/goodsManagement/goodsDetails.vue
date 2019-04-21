<template>
  <div>


   <!-- <el-select v-model="value" placeholder="请选择所属厂商" class="el-input">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" ></el-option>
    </el-select>-->

    <el-cascader
      placeholder="试试搜索：指南"
      :options="options"
      filterable
      change-on-select
    ></el-cascader>

    <el-input placeholder="请输商品名" class="el-input"></el-input>

    <el-button>添加商品</el-button>
  <!--height="380" 设置高度 固定表头-->
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <!--<el-table-column
      prop="categoryDTO.secondaryCategoryDTO.bigCategoryDTO.bigCategoryName"
      label="所属大类"
      width="80">
    </el-table-column>
    <el-table-column
      prop="categoryDTO.secondaryCategoryDTO.secondaryCategoryName"
      label="所属中类"
      width="80">
    </el-table-column>
    <el-table-column
      prop="categoryDTO.categoryName"
      label="所属细类"
      width="80">
    </el-table-column>
-->

    <el-table-column
      prop="goodsName"
      label="商品名">
    </el-table-column>
    <el-table-column
      prop="supplierDTO.supplierName"
      label="所属厂商">
    </el-table-column>

    <el-table-column
      prop="goodsCode"
      label="商品编号">
    </el-table-column>

    <el-table-column
      prop="goodsDate"
      label="生产日期">
    </el-table-column>

    <el-table-column
      prop="goodsPrice"
      label="单价/元">
    </el-table-column>

    <el-table-column
      prop="goodsShelfLife"
      label="保质期">
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
  <div class="block">
    <el-pagination
      layout="prev, pager, next"
      :page-size="7"
      :total="2">
    </el-pagination>
  </div>


    <el-dialog title="详细信息" :visible.sync="dialogVisible" :data="dialogValue" width="60%">

      <el-form :inline="true" :model="dialogValue" class="demo-form-inline">

        <el-form-item>

        </el-form-item>
        <!--<el-form-item>
          <el-select :model="dialogValue" placeholder="请选择" size="mini">
            <el-option
              v-for="item in bigCategorys"
              :label="item.bigCategoryName"
              :value="item.bigCategoryID"
              size="mini">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-select v-model="dialogValue" placeholder="请选择" size="mini">
            <el-option
              v-for="item in secondaryCategorys"
              :label="item.secondaryCategoryName"
              :value="item.secondaryCategoryID"
              size="mini">
            </el-option>
          </el-select>
        </el-form-item>-->
        <el-form-item label="商品名">
          <el-input v-model="dialogValue.goodsName" size="mini"></el-input>
        </el-form-item>

        <el-form-item label="商品编号">
          <el-input v-model="dialogValue.goodsCode" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="生产日期">
          <el-input v-model="dialogValue.goodsDate" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="单价">
          <el-input v-model="dialogValue.goodsPrice" size="mini"></el-input>
        </el-form-item><br>
        <el-form-item label="保质期">
          <el-input v-model="dialogValue.goodsShelfLife" size="mini"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
       <el-button @click="dialogVisible = false">取 消</el-button>
       <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>


    </el-dialog>
</div>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-scrollbar.el-scrollbar__wrap el-select-dropdown__wrap{
    margin-bottom: 0px;
    margin-right: -17px;
  }
.el-input{
  width: 200px;
}
  .el-cascader-menu{
    height: 100%;
  }
</style>

<script>
  export default {
    methods: {
      getList:function(){
        this.$axios({
            method:'POST',
            url:'http://localhost:8080/goods/select',
            data:this.qs.stringify({    //这里是发送给后台的数据
              pageNum:1,
              pageSize:7,
            })
        }).then((response) =>{
          console.log("开始打印！")//这里使用了ES6的语法
          console.log(response)       //请求成功返回的数据
          this.total=response.data.content.length
          this.tableData=response.data.content
        }).catch((error) =>{
          console.log(error)       //请求失败返回的数据
        })

      },
      getBigCategory:function(){
        this.$axios({
          method:'GET',
          url:'http://localhost:8080/bigCategory/selectAll',
        }).then((response) =>{
          console.log(response.data)       //请求成功返回的数据
          this.bigCategorys=response.data;

        }).catch((error) =>{
          console.log(error)       //请求失败返回的数据
        })
      },

      getSecondaryCategory:function(){
        this.$axios({
          method:'POST',
          url:'http://localhost:8080/secondaryCategory/selectAll',
        }).then((response) =>{
          console.log(response.data)       //请求成功返回的数据
          this.secondaryCategorys=response.data;
        }).catch((error) =>{
          console.log(error)       //请求失败返回的数据
        })
      },
      getCategory:function(){
        this.$axios({
          method:'GET',
          url:'http://localhost:8080//category/selectAll',
        }).then((response) =>{
          console.log(response.data)       //请求成功返回的数据
          /*response.data.forEach(i=>{
            let parent={}/!*父级对象*!/
            let children1={}
            let children2={}

            children2.value=i.id
            children2.lable=i.categoryName
            children1.value=i.secondaryCategoryDTO.id
            children1.lable=i.secondaryCategoryDTO.secondaryCategoryName
            parent.value=i.secondaryCategoryDTO.bigCategoryDTO.id
            parent.lable=i.secondaryCategoryDTO.bigCategoryDTO.bigCategoryName

            options.push(parent)
            parents.push(children1)
            childrens.push(children2)

          })*/
          console.log(options)
          console.log(parents)
          console.log(childrens)

        }).catch((error) =>{
          console.log(error)       //请求失败返回的数据
        })
      },
      dilogclick:function (data) {
        this.dialogVisible = true

        this.dialogValue=data
      },

    },
    data() {
      return {
        tableData: [],
        total:1,
        dialogVisible: false,
        dialogValue:[],
        bigCategorys:[],
        secondaryCategorys:[],
        value1:'',
        value2:'',
        options:[]
      }
    },
    mounted:function(){
      console.log("开始执行！")
      this.getList();
      this.getBigCategory();
      this.getSecondaryCategory();
      this.getCategory();
    }
  }
</script>

