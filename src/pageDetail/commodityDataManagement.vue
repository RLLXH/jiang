<template>
  <div>
    <div>
      <el-form label-position="right" label-width="100px" :inline="true">
        <el-form-item label="商品编号:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="商品类别:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label=" ">
          <el-button>查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-row>
      <el-button class="addBtn" @click="AddnewBtn">增加</el-button>
    </el-row>
    <el-table :data="dataList" style="width: 100%" border>
      <el-table-column label="序号" type="index" width="80"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <div>
            <el-button type="text" @click="detailBtn">查看</el-button>
            <el-button type="text" @click="detailBtn">编辑</el-button>
            <el-button type="text" @click="deleteBtn(scope.row.id)">删除</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="商品编号" prop="goodsCode"></el-table-column>
      <el-table-column label="商类类别" prop="name">
        <template slot-scope="scope">
          <div>
            <span>{{scope.row.categoryDTO.categoryName}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="生产日期" prop="goodsDate"></el-table-column>
      <el-table-column label="商品名" prop="goodsName"></el-table-column>
      <el-table-column label="单价" prop="goodsPrice"></el-table-column>
      <el-table-column label="保质期" prop="goodsShelfLife"></el-table-column>
    </el-table>
      <paging v-on:pageFlag="pageFlag" :pageNum="pageNum" :theQuery="theQuery"></paging>
  </div>
</template>
<script>
import axios from "../api/axios.js";
import { goodsSelect ,goodsDelete} from "../api/address.js";
import paging from "../components/paging.vue";
export default {
   components: {
    paging
  },
  data() {
    
    return {
      pageNum:'',
      theQuery: {
        categoryId: null,
        categoryName:null,
        goodsCode:null,
        goodsDate:null,
        goodsName:null,
        goodsPrice: null,
        goodsShelfLife:null,
        pageNum: 1,
        pageSize: 20,
        person:null,
        supplierId: null,
        supplierName:null
      },
      dataList: []
    };
  },
  created(){
    this.getList();
  },
  methods: {
    deleteBtn(row){
      axios.delete(goodsDelete+'?id='+row).then(data=>{
        this.getList();
      }
      )
    },
        //分页
    pageFlag: function(data) {
      this.theQuery.pageNum = data.pageNo;
      this.theQuery.pageSize = data.pageSize;
      this.getList();
    },
    getList() {
      axios.post(goodsSelect,this.theQuery).then(data=>{
        console.log(data)
        this.dataList=data.content
          this.pageNum = data.totalElements;
      });
    },
    //新增
    AddnewBtn() {
      this.$router.push({
        path: "/Index/commodityDataManagementAddNew",
        query: {}
      });
    },
    //详情
    detailBtn() {
      console.log("121");
      this.$router.push({
        path: "/Index/refundManageDetail",
        query: {}
      });
    },
    Btn() {
      this.$router.push({
        path: "/Index/Markey",
        query: {}
      });
    }
  }
};
</script>
<style lang="less">
.addBtn {
  margin: 10px 0px;
}
</style>
