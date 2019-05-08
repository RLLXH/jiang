<template>
  <div>
    <div>
      <el-form
        label-position="right"
        label-width="100px"
        :inline="true"
        :model="detailData"
        ref="detailData"
        :rules="rules"
      >
        <el-row>
          <el-col :span="8">
            <el-form-item label="操作人员：" prop="person">
              <el-input v-model="detailData.person"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="订单编号：" prop="purchaseCode">
              <el-input v-model="detailData.purchaseCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="出库时间：" prop="purchaseTime">
              <el-date-picker v-model="detailData.purchaseTime" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="是否出库：" prop="storage">
              <el-select placeholder="请输入信息" clearable v-model="detailData.storage">
                <el-option :value="true" label="是"></el-option>
                <el-option :value="false" label="否"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-row>
      <span>采购商品列表</span>
    </el-row>
    <el-table :data="detailData.purchaseDetailDTOS" style="width: 100%" border>
      <el-table-column label="序号" type="index" width="80"></el-table-column>
      <el-table-column label="商品名" prop="goodsName">
        <template slot-scope="scope">
          <div>
            <span>{{scope.row.goodsDTO.goodsName}}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="商类类别" prop="name">
        <template slot-scope="scope">
          <div>
            <span>{{scope.row.goodsDTO.categoryId}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="生产日期" prop="goodsDate">
        <template slot-scope="scope">
          <div>
            <span>{{scope.row.goodsDTO.goodsDate}}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="单价" prop="goodsPrice">
        <template slot-scope="scope">
          <div>
            <span>{{scope.row.goodsDTO.goodsPrice}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="保质期" prop="goodsShelfLife">
        <template slot-scope="scope">
          <div>
            <span>{{scope.row.goodsDTO.goodsShelfLife}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="数量" prop="goodsNumber">
        <template slot-scope="scope">
          <div>
            <el-input v-model="scope.row.goodsNumber"></el-input>
          </div>
        </template>
      </el-table-column>
    </el-table>
  <el-row class="btnBox">
        <el-button @click="postBtn('detailData')">提交</el-button>
        <el-button @click="back">返回</el-button>
      </el-row>
  </div>
</template>
<script>
import axios from "../../api/axios.js";
import { purchaseSelectDetail,purchaseUpdate } from "../../api/address.js";
export default {
  data() {
    return {
        rules: {
        person: [
          { required: true, message: "请选择", trigger: "change" }
        ],
          purchaseCode: [
          { required: true, message: "请选择", trigger: "change" }
        ],
          purchaseTime: [
          { required: true, message: "请选择", trigger: "change" }
        ],
          storage: [
          { required: true, message: "请输入", trigger: "blur" }
        ],},
      detailData: {},
      dataList: []
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    postBtn(formName){
         this.$refs[formName].validate(valid => {
        if (valid) {
          axios.put(purchaseUpdate,this.detailData).then(data=>{
            this.$router.go(-1);
          })
        }})
    },
    getDetail() {
      axios
        .post(purchaseSelectDetail + "?id=" + this.$route.query.id)
        .then(data => {
          this.detailData = data;
          console.log(data);
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
.btnBox {
  text-align: center;
  margin-top:20px;
}
</style>
