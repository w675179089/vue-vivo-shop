<template>
    <div class="footer" >
       <ul>
           <router-link v-for = '(item,index) in nav'  :to='item.url' tag='li' class='nav-item' exact><i class='iconfont iconstyle' :class='item.icon'></i><p style='font-size:0.22rem;' class=''>{{item.name}}</p></router-link>
       </ul>
    </div>
</template>

<script>
//    import {mapMutations} from 'vuex'
export default {
//    name:"footer",
    data(){
        return {
            nav:[
                {name:"首页",url:"Home",icon:"icon-shouye",id:0},
                {name:"资讯",url:"info",icon:"icon-xinwen3",id:1},
                {name:"购物车",url:"cart",icon:"icon-gouwuche",id:2},
                {name:"我的",url:"my",icon:"icon-wode2",id:3}
            ]
        }
    },
    methods:{
//        clickthis(index,id){
//            if(index == id){
//                console.log('zheshi')
//            }else{
//                console.log('no')
//            }
//        }
    },
    computed:{
        carts(){
            return this.$store.state.carts
        }
    }
}
</script>

<style>


 * {
  margin: 0;
  padding: 0;
  text-decoration:none;
  list-style: none;
}
    .footer{position: fixed;left: 0;bottom: 0;width:100%;height: 1.1rem;background: white;z-index: 100;}
    .footer ul {width:100%;box-sizing: border-box; height: auto;}
    .footer ul li{float: left;width: 25%;text-align: center;height: 1.1rem;}
    .iconstyle{font-size: 0.42rem;margin-top: 0.1rem;display: block;}
     .router-link:hover, .router-link-active {
        color: red;
    }
</style>

