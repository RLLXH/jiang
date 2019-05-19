<template>
  <div>
    <div>
      <el-form label-position="right" label-width="100px" :inline="true">
        <el-form-item label="供应商名称:">
          <el-input v-model="theQuery.supplierName"></el-input>
        </el-form-item>
        <el-form-item label="供应商地址:">
          <el-input v-model="theQuery.supplierAddress"></el-input>
        </el-form-item>
        <el-form-item label="供应商电话:">
          <el-input v-model="theQuery.supplierPhone"></el-input>
        </el-form-item>
        <el-form-item label="供应商编号:">
          <el-input v-model="theQuery.supplierCode"></el-input>
        </el-form-item>
        <el-form-item label=" ">
          <el-button @click="getList">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-row>
      <el-button class="addBtn" @click="AddnewBtn">增加</el-button>
    </el-row>
    <el-table :data="dataList" style="width: 100%" border>
      <el-table-column label="序号" type="index" width="80"></el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <div>
            <el-button type="text" @click="detailBtn(scope.row)">修改</el-button>
            <el-button type="text" @click="deleteBtn(scope.row)">删除</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="供应商名" prop="supplierName"></el-table-column>
      <el-table-column label="供应商地址" prop="supplierAddress"></el-table-column>
      <el-table-column label="供应商编码" prop="supplierCode"></el-table-column>
      <el-table-column label="供应商电话" prop="supplierPhone"></el-table-column>
      <el-table-column label="供应商官网" prop="supplierWeb"></el-table-column>
    </el-table>
     <paging v-on:pageFlag="pageFlag" :pageNum="pageNum" :theQuery="theQuery"></paging>
    <el-dialog title="新增厂商" :visible.sync="dialogVisibleAdd" width="60%" center>
      <el-form
        label-position="right"
        label-width="100px"
        :inline="true"
        :model="postData"
        ref="postData"
        :rules="rules"
      >
        <el-form-item label="供应商名:" prop="supplierName">
          <el-input v-model="postData.supplierName"></el-input>
        </el-form-item>
        <el-form-item label="供应商地址:" prop="supplierAddress">
          <el-input v-model="postData.supplierAddress"></el-input>
        </el-form-item>
        <el-form-item label="供应商编码:" prop="supplierEvaluate">
          <el-input v-model="postData.supplierCode"></el-input>
        </el-form-item>
        <el-form-item label="供应商电话:" prop="supplierPhone">
          <el-input v-model="postData.supplierPhone"></el-input>
        </el-form-item>
        <el-form-item label="供应商官网:" prop="supplierWeb">
          <el-input v-model="postData.supplierWeb"></el-input>
        </el-form-item>
      </el-form>
      <el-row class="dialogBtnBox">
        <el-button @click="postBtn('postData')">提交</el-button>
        <el-button @click="postB">取消</el-button>
      </el-row>
    </el-dialog>
    <el-dialog title="修改库房" :visible.sync="dialogVisibleDetail" width="60%">
      <el-form
        label-position="right"
        label-width="100px"
        :inline="true"
        :model="updateData"
        ref="updateData"
        :rules="rules"
      >
        <el-form-item label="供应商名:" prop="supplierName">
          <el-input v-model="updateData.supplierName"></el-input>
        </el-form-item>
        <el-form-item label="供应商地址:" prop="supplierAddress">
          <el-input v-model="updateData.supplierAddress"></el-input>
        </el-form-item>
        <el-form-item label="供应商编码:" prop="supplierEvaluate">
          <el-input v-model="updateData.supplierCode"></el-input>
        </el-form-item>
        <el-form-item label="供应商电话:" prop="supplierPhone">
          <el-input v-model="updateData.supplierPhone"></el-input>
        </el-form-item>
        <el-form-item label="供应商官网:" prop="supplierWeb">
          <el-input v-model="updateData.supplierWeb"></el-input>
        </el-form-item>
      </el-form>
      <el-row class="dialogBtnBox">
        <el-button @click="updateBtn('updateData')">提交</el-button>
        <el-button @click="updateB">取消</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import axios from "../api/axios.js";
import {
  supplierINsert,
  supplierSelect,
  supplierDelete,
  supplierUpdate
} from "../api/address.js";
import paging from '../components/paging.vue'
export default {
  components:{
    paging
  },
  data() {
    return {
      dialogVisibleDetail: false,
      dialogVisibleAdd: false,
      pageNum:'',
      theQuery: {
        pageNum: 1,
        pageSize: 20,
        supplierAddress: "",
        supplierCode: "",
        supplierName: "",
        supplierPhone: "",
        supplierWeb: ""
      },
      updateData: {},
      postData: {
        supplierAddress: "",
        supplierEvaluate: "",
        supplierName: "",
        supplierPhone: "",
        supplierWeb: ""
      },
      dataList: [],
      rules: {
        supplierCode: [
          { required: true, message: "请输入", trigger: "blur" }
        ],
        supplierAddress: [
          { required: true, message: "请输入", trigger: "blur" }
        ],
        supplierWeb: [{ required: true, message: "请输入", trigger: "blur" }],
        prohibit: [{ required: true, message: "请输入", trigger: "blur" }],
        supplierPhone: [{ required: true, message: "请输入", trigger: "blur" }],
        supplierName: [{ required: true, message: "请输入", trigger: "blur" }]
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
     //分页
    pageFlag: function(data) {
      this.theQuery.pageNum = data.pageNo;
      this.theQuery.pageSize = data.pageSize;
      this.getList();
    },
    updateB() {
      this.dialogVisibleDetail = false;
    },
    updateBtn(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.updateData, "121");
          axios
            .put(supplierUpdate + "?id=" + this.updateData.id, this.updateData)
            .then(data => {
              this.$message.success("修改成功");
              this.dialogVisibleDetail = false;
              this.getList();
            });
        }
      });
    },
    deleteBtn(row) {
      axios.delete(supplierDelete + "?id=" + row.id).then(data => {
        this.$message.success("删除成功");
        this.getList();
      });
    },
    getList() {
      axios.post(supplierSelect, this.theQuery).then(data => {
        console.log(data);
        this.dataList = data.content;
        this.pageNum=data.totalElements;
      });
    },
    postB() {
      this.dialogVisibleAdd = false;
    },
    //提交
    postBtn(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios.post(supplierINsert, this.postData).then(data => {
            this.$message.success("新增成功");
            this.getList();
            this.dialogVisibleAdd = false;
            this.postData = {
              supplierAddress: "",
              supplierEvaluate: "",
              supplierName: "",
              supplierPhone: "",
              supplierWeb: ""
            };
          });
        }
      });
    },
    //新增
    AddnewBtn() {
      this.dialogVisibleAdd = true;
    },
    //详情
    detailBtn(row) {
      this.updateData = row;
      this.dialogVisibleDetail = true;
    }
  }
};
</script>
<style lang="less">
.addBtn {
  margin: 10px 0px;
}
.dialogBtnBox {
  text-align: center;
}
</style>
