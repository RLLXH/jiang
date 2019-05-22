export default{
    namespaced: true,
    state:{
        user:JSON.parse(sessionStorage.getItem('user')) || {}
    },
    getters:{},
    mutations:{},
    actions:{}
}