<template>

    <el-container>

      <!--头部-->
      <el-header class="header1" style="height: 60px;"> <index2-tab></index2-tab></el-header>

     <!--下面的整个部分-->
      <el-container class="centrecontainer">

        <!--左边导航栏-->
        <el-scrollbar>
        <el-aside class="aside" style="width: 220px;">
          <left-menu class="asidegva">
          </left-menu>
        </el-aside>
        </el-scrollbar>
      <!--下面的右边部分-->
        <el-container class="rightcontainer">
          <el-header class="header2" style="height: 18px;margin-top: 5px;">  <index-tab></index-tab></el-header>
          <el-scrollbar>
         <el-main class="main">  <router-view></router-view></el-main>
          </el-scrollbar>
        </el-container>
      </el-container>
    </el-container>
</template>

<script>
import leftMenu from "../components/leftMenu.vue";
import indexTab from "../components/indexTab.vue";
import index2Tab from '../components/index2Tab.vue'
export default {
  data() {
    return {};
  },
  components: {
    leftMenu,
    indexTab,
    index2Tab,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*最上面的头部*/
  .header1{
   /* border: 1px solid red;*/
  }
  /*下面的整个部分*/
  .centrecontainer{
    /* border: 1px solid goldenrod; */
    height: 100%;

  }
  /*下面的右边部分*/
  .rightcontainer{
   /* border: 1px solid green;*/
  }
  .header2{
    /*border: 1px solid blueviolet;*/
    height: 100%;
  }
  /*左边导航栏*/
  .aside{

    /*border: 2px solid black;*/
  }
  .asidegva{

  }
  /*主要显示部分*/
  .main{
    /*border: 2px solid royalblue;*/
  }
  .el-container{
    height: 100%;
  }
  .el-aside{
    height: 100%;
  }
.el-scrollbar__view{
  height: 100%!important;
}


</style>
