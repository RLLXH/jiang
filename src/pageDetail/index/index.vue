<template>
    <div>
       <h1>首页</h1>
      <el-button @click="get()">获取</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
      login:function(){
        this.$axios({
          method:'POST',
          url:'http://127.0.0.1:8888/userInfo/login',
          xhrFields:{
            withCredentials:true
          },
          crossDomain: true,
          contentType: 'application/json',
          cookie:"x13k96A509",
          data:this.qs.stringify({    //这里是发送给后台的数据
            password:123456,
            username:'admin1',
          })
        }).then((response) =>{
          console.log("开始打印！")//这里使用了ES6的语法
          console.log(response)       //请求成功返回的数据
          let allCookies = document.cookie
          console.log(allCookies)
        }).catch((error) =>{
          console.log(error)       //请求失败返回的数据
        })

      },
      get(){
        this.$axios({
          method:'GET',
          url:'http://127.0.0.1:8888/bigCategory/selectAll',
          xhrFields:{
            withCredentials:true
          },
          crossDomain: true,
          contentType: 'application/json',
          data:this.qs.stringify({    //这里是发送给后台的数据

          })
        }).then((response) =>{
          console.log("开始打印！")//这里使用了ES6的语法
          console.log(response)       //请求成功返回的数据

        }).catch((error) =>{
          console.log(error)       //请求失败返回的数据
        })


      }
    },
  mounted:function(){
    console.log("开始执行！")
    this.login();
  },
  created () {
  }
}
</script>
