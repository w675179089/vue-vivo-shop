<template>
    <div class='Home' style='overflow:hidden;'>
        <div class='Home-header'><i class="iconfont icon-VIVO"></i></div>
        <div class='header-nav'><img src="/static/img/official.png" alt=""></div>
        <div class='swipe'>
            <mt-swipe :auto='4000'>
                <mt-swipe-item><router-link to='Detail?id=4'><img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20171113/20171113232814110405_original.jpg" alt=""></router-link></mt-swipe-item>
                <mt-swipe-item><router-link to='choose'><img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20171122/20171122174336166279_original.jpg" alt=""></router-link></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class='HomeList'>
            <ul>
                <router-link :to ='list.link' tag='li' v-for = "(list,index) in lists"><img :src="list.img" alt=""></router-link>
            </ul>
        </div>
        <div class='content'>
            <p class='con-title'>爆款产品</p>
            <div class='box' style='overflow:hidden;margin-bottom:1.1rem;'>
                <ul>
                    <li v-for = '(item,index) in items' :class="[item.id %2 ==0 ? '' : 'activeClass']" :id="item.id" @click='enter(item.id)'>
                        <div class='picture'><img :src="item.img" alt=""></div>
                        <div class='picture-name'>{{item.name}}</div>
                        <div class='msg'>{{item.msg}}</div>
                        <div class='price'>{{item.price}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
import { mapState,mapMutations,mapGetters  } from 'vuex';
import { Swipe, SwipeItem } from 'mint-ui';
import { MessageBox } from 'mint-ui';
    export default {
        name:'Home',
        data(){
            return {
                lists:[{name:'选购手机',img:'/static/img/xuangou.jpg',link:'choose'},
                       {name:'选购配件',img:'/static/img/peijian.jpg',link:'parts'},
                       {name:'选购碎屏宝',img:'/static/img/pingbao.jpg',link:'suiping'},
                       {name:'定制手机',img:'/static/img/dingzhi.jpg',link:'dingzhi'}
                      ],
                items:[],
                activeClass:'activeClass'
            }   
        },
        mounted:function(){
            var _this = this
              this.$http.get("/static/Home.json").then(function(res){
//                console.log();
                _this.items =res.body.items
            }) 
        },
        methods:{
            enter(id){
               this.$router.push({path:'Detail',query:{id:id}})
            }
        },
//        computed:{
//            borderClass:function(index){
//                return index
//            }
//        }
    }
</script>
<style>
    *{margin: 0;padding: 0;}
    .Home-header{width: 100%;box-sizing: border-box;height: 0.98rem;line-height: 0.98rem;position: fixed;top: 0;left: 0;padding-left: 0.22rem;z-index: 1;background: white;font-size: 0.42rem;}
    .header-nav{width: 100%;margin-top: 0.98rem;border-top: 1px solid rgb(244,244,244);height: 0.6rem;line-height: 0.6rem;background: white;}
    .header-nav img{width: 100%;}
    .swipe{width: 100%;height: 4.87rem;}
    .swipe img{width: 100%;height: 100%;}
    .HomeList{width: 100%;height: 1.9rem;border-bottom: 1px solid #ccc;background: white;}
    .HomeList li{width: 25%;height: 100%;float: left;list-style: none;text-align: center;line-height: 1.9rem;}
    .HomeList img{width: 1.28rem;height: 1.26rem;vertical-align: middle;}
    .con-title{width: 100%;height:0.99rem;box-sizing: border-box;padding-left:0.24rem;line-height: 0.99rem;border-bottom: 1px solid #ccc;font-size: 0.26rem;background: white;font-weight: 500;}
    .box{width: 100%;height: auto;box-sizing: border-box;text-align: center;}
    .picture{height: 3.05rem;text-align: center;}
    .box li {width: 49.8%;float: left;background: white;list-style: none;border-bottom: 1px solid #ccc;}
    .box img{height: 2.48rem;margin: auto;width: 2.62rem;margin-top: 0.67rem;}
    .activeClass{border-right: 1px solid #F4F4F4;}
    .picture-name{font-size: 0.26rem;margin-top: 0.62rem;font-weight: 600;}
    .msg{margin-top: 0.11rem;font-size: 0.24rem;}
    .price{margin-top: 0.36rem;font-size: 0.26rem;color:red;margin-bottom: 0.36rem;}
</style>