<template>
  <div>
    <div>
      <el-form label-position="right" label-width="100px" :inline="true">
        <el-form-item label="库房:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="商品名称:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="进货状态:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="销售状态:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label=" ">
          <el-button>查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <el-row>
      <el-button class="addBtn" @click="AddnewBtn">增加</el-button>
    </el-row>-->
    <el-table :data="dataList" style="width: 100%" border>
      <el-table-column label="序号" type="index" width="80"></el-table-column>
      <el-table-column label="操作" width="180">
        <template>
          <div>
            <el-button type="text" @click="detailBtn">查看</el-button>
          </div>
        </template>
      </el-table-column>
    
      <el-table-column label="商品名称" prop="name">
        <template slot-scope="scope">
          <div>
            <span>{{scope.row.goodsDTO?scope.row.goodsDTO.goodsName:''}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="库存数量" prop="amount"></el-table-column>
      <el-table-column label="入库时间" prop="updateTime"></el-table-column>
      <!-- <el-table-column label="进货状态" prop="name"></el-table-column> -->
    </el-table>
  </div>
</template>
<script>
import axios from "../api/axios.js";
import { storeroomSelect } from "../api/address.js";
export default {
  data() {
    return {
      theQuery: {
        amount: null,
        goodsCode: "",
        goodsName: "",
        pageNum: 1,
        pageSize: 20,
        person: "",
        updateTime: ""
      },
      dataList: [
      ]
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      axios.post(storeroomSelect, this.theQuery).then(data => {
        console.log(data);
        this.dataList=data.content
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
