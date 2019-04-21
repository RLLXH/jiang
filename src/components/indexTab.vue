<template>
  <div>
    <span>
      <el-breadcrumb>
        <el-breadcrumb-item> 当前位置：{{bread}}</el-breadcrumb-item>
      </el-breadcrumb>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bread: ""
    };
  },
  watch: {
    $route: "breadCrumbChange"
  },
  created() {
    sessionStorage.setItem("name", this.$route.name);
    this.bread = sessionStorage.getItem("name");
  },
  methods: {
        //  面包屑
    breadCrumbChange() {
      sessionStorage.setItem("name", this.$route.name);
      this.bread = sessionStorage.getItem("name");
    }
  },
};
</script>
