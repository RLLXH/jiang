import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Index/index'
    },
    {
      path: '/Index',
      name: 'Index',
      component: resolve => require(['@/components/index.vue'], resolve),
      children:[
        {
        path:'index',
        name:'首页',
          component: resolve => require(['@/pageDetail/index/index.vue'], resolve),
      },
        {
          path:'supplier',
          name:'厂商管理',
          component: resolve => require(['@/pageDetail/supplierManagement/supplier.vue'], resolve)
        },
        {
          path:'categories',
          name:'分类管理',
          component: resolve => require(['@/pageDetail/classifiedManagement/categories.vue'], resolve)
        },
        {
          path:'goods',
          name:'商品管理',
          component: resolve => require(['@/pageDetail/goodsManagement/goodsDetails.vue'], resolve)
        },
        {
          path:'purchase',
          name:'进货管理',
          component: resolve => require(['@/pageDetail/purchaseControl/purchase.vue'], resolve)
        },
        {
          path:'userManangement',
          name:'用户管理',
          component: resolve => require(['@/pageDetail/systemManagement/user-management.vue'], resolve)
        },

      ]
    }
  ]
})
