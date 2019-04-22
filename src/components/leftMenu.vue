<template>
    <div class="all">
      <!--router 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转-->
        <el-menu router default-active="1" class="el-menu-vertical-demo">

          <el-submenu index="1">
            <template slot="title">
              <!-- <i class="el-icon-setting"></i> -->
              <span>基本信息管理</span>
            </template>
            <el-menu-item-group>
              <!--<template slot="title">分组一</template>-->
              <el-menu-item index='/Index/userManangement'>商品管理</el-menu-item>
              <el-menu-item index='/Index/userManangement'>厂商管理</el-menu-item>
              <el-menu-item index='/Index/userManangement'>分类管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="7">
          <template slot="title">
            <!-- <i class="el-icon-rank"></i> -->
            <span>库存管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index='/Index/supplier'>采购单管理</el-menu-item>
            <el-menu-item>销售单管理</el-menu-item>
            <el-menu-item>查看库存</el-menu-item>

          </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
          <template slot="title">
            <!-- <i class="el-icon-rank"></i> -->
            <span>系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index='/Index/supplier'>用户管理</el-menu-item>
            <el-menu-item index='/Index/supplier'>权限管理</el-menu-item>
          </el-menu-item-group>
          </el-submenu>
<!-- 
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index='/Index/goods'>商品管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->


          <!-- <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>分类管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index='/Index/categories'>分类管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->

<!-- 
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-sold-out"></i>
              <span>进出货管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index='/Index/purchase'>进货管理</el-menu-item>
              <el-menu-item>出货管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>查看报表</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item>查看报表</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
          <br><br><br><br><br>
        </el-menu>
     


    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.all{
  height: 100%;
}
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .el-menu-vertical-demo{
    height: 100%;
  }
  .el-menu{
  height: 100%;
}
</style>
