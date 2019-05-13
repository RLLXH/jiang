<template>
  <div>
    <div>
      <el-form
        label-position="right"
        label-width="120px"
        :inline="true"
        :model="postData"
        ref="postData"
        :rules="rules"
      >
        <el-form-item label="商品编号:" prop="goodsCode">
          <el-input v-model="postData.goodsCode"></el-input>
        </el-form-item>
        <el-form-item label="商品类:" prop="categoryId">
          <el-select placeholder="请输入信息" clearable v-model="postData.categoryId">
            <el-option
              v-for="(item,index) in categoryList"
              :key="index"
              :label="item.categoryName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品生产日期:" prop="goodsDate">
          <el-date-picker v-model="postData.goodsDate" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="商品名称:" prop="goodsName">
          <el-input v-model="postData.goodsName"></el-input>
        </el-form-item>
        <el-form-item label="商品单价:" prop="goodsPrice">
          <el-input v-model="postData.goodsPrice"></el-input>
        </el-form-item>
        <el-form-item label="商品规格型号:" prop="goodsSpecification">
          <el-input v-model="postData.goodsSpecification"></el-input>
        </el-form-item>
        <el-form-item label="商品计量单位:" prop="goodsUnit">
          <el-select placeholder="请输入信息" clearable v-model="postData.goodsUnit">
            <el-option value="桶" :label="桶"></el-option>
            <el-option value="包" :label="包"></el-option>
            <el-option value="个" :label="个"></el-option>
            <el-option value="瓶" :label="瓶"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="厂商ID:" prop="supplierId">
          <el-input v-model="postData.supplierId"></el-input>
        </el-form-item>
      </el-form>
      <el-row class="btnBox">
        <el-button @click="postBtn('postData')">提交</el-button>
        <el-button @click="backBtn">返回</el-button>
      </el-row>
    </div>
  </div>
</template>
<script>
import axios from "../../api/axios.js";
import {
  goodsInsert,
  categoryList,
  goodsSelectById,
  goodsUpdate
} from "../../api/address.js";
export default {
  data() {
    return {
      categoryList: [],
      supplierList: [],
      postData: {
        categoryId: "", //细类ID
        goodsCode: "", //商品编号
        goodsDate: "", //商品生产日期
        goodsName: "", //商品名称
        goodsPrice: "", //商品单价
        goodsSpecification: "", //商品保质期
        supplierId: "", //厂商ID
        goodsUnit: "" //商品计量单位(桶、包、个、瓶…)
      },

      rules: {
        categoryId: [{ required: true, message: "请选择", trigger: "change" }],
        goodsUnit: [{ required: true, message: "请选择", trigger: "change" }],
        goodsCode: [{ required: true, message: "请输入", trigger: "blur" }],
        goodsName: [{ required: true, message: "请输入", trigger: "blur" }],
        goodsPrice: [{ required: true, message: "请输入", trigger: "blur" }],
        goodsSpecification: [
          { required: true, message: "请输入", trigger: "blur" }
        ],
        goodsDate: [{ required: true, message: "请选择", trigger: "change" }],
        supplierId: [{ required: true, message: "请输入", trigger: "blur" }]
      },
      channel: [
        {
          value: "直送"
        },
        {
          value: "配送"
        }
      ],
      categories: [
        {
          value: "A类",
          label: "A类"
        },
        {
          value: "B类",
          label: "B类"
        },
        {
          value: "C类",
          label: "C类"
        },
        {
          value: "D类",
          label: "D类"
        }
      ], //商品类别
      dataList: []
    };
  },
  created() {
    this.getcategoryList();
    if (this.$route.query.id) {
      axios.post(goodsSelectById + "?id=" + this.$route.query.id).then(data => {
        console.log(data, "12");
        this.postData = data;
      });
    }
  },
  methods: {
    getsupplierList() {},
    getcategoryList() {
      axios.get(categoryList).then(data => {
        console.log(data);
        this.categoryList = data;
      });
    },
    postBtn(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.$route.query.id) {
            axios.put(goodsUpdate, this.postData).then(data => {
              console.log(data);
              this.$router.go(-1);
            });
          } else {
            axios.post(goodsInsert, this.postData).then(data => {
              console.log(data);
              this.$router.go(-1);
            });
          }
        }
      });
    },
    //返回
    backBtn() {
      this.$router.go(-1);
    },
    //新增
    AddnewBtn() {
      this.$router.push({
        path: "/Index/refundManageAddNew",
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
.btnBox {
  text-align: center;
}
</style>
