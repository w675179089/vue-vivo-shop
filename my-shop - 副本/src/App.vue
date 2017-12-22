<template>
  <div id="app">
     
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
    import rem from './rem/rem.js'
    import footer from './components/footer'
export default {
  name: 'app',
    components:{
        'my-footer':footer
    },
    data(){
      return{
          bol:true
      }  
    },
    mounted:function(){
//        到底是通过判断是否传参控制底部nav显示还是通过路由名字 待定
//        var id = this.$route.query.id;
//       if(!id){
//           console.log(1)
//           return this.bol=true;
//       }else{
//            console.log(2)
//            return this.bol=false;
//       }
    }
}
</script>

<style>

body{
/*  padding-bottom:1.56rem; */
  font-family: '微软雅黑';
  background: #F4F4F4;;
}
</style>
