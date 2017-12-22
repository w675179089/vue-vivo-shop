<template>
    <div class='cart'>
       
        <div  class="cartHeader"><router-link to='/' class=''><i class="iconfont icon-552cc14536532 pad"></i></router-link>
        购物车
        </div>
        <div class='cartlist'>
            <ul>
                <li v-for ='(cart,index) in carts'>
                    <div class='leftimg'><img :src="cart.imgone" alt=""></div>
                    <div class='rightbox'>
                        <div class='oneline' style='overflow:hidden;'><p>{{cart.name}}</p><i class="iconfont icon-huishouzhan7"  @click="deleteCartThis(index)"></i></div>
                        <div class='price'>￥ {{cart.price}}</div>
                        <div class='jiajian'><a class='jian' href='javascript:;' @click = 'jian(index)'>-</a><input readonly='readonly' type="text" v-model = 'cart.value' class='value-inp'><a href='javascript:;' class='jia' @click = 'add(index)' ref='bg'>+</a></div>
                    </div>
                </li>
            </ul>
        </div>
        <div class='cartimg' v-if='!carts.length'>
            <img src="/static/img/gouwuche.png" alt="">
            <p>购物车是空的哦，快去购物吧</p>
            <router-link :to='{name:"Home"}'>逛一逛</router-link>
        </div>
        <div class='cartfooter' v-if='carts.length'>
            <div class='total'>合计：<span>￥{{sum}}</span></div>
            <div class='paybox'>
                <a href="javascript:void(0);" class='goon' @click='enter'>继续购物</a>
                <a href="javascript:void(0);" class='deleteall' @click='deleteCartAll'>清空购物车</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters} from 'vuex';
//    import {Tost}
  export default{
      data(){
          return{
              
          }
      },
      computed:{
         carts(){
//             this.$store.state.carts = [];
              return this.$store.state.carts;
         },
          ...mapGetters(['sum'])
      },
      methods:{
          ...mapMutations(['deleteCartAll','deleteCartThis','add','jian']),
          enter(){
            this.$router.push('/Home')  
        }
      },
      mounted(){
          console.log(this.$store.state.carts)
      }
  }
</script>


<style scoped>
    .cart{width: 100%;height: auto;overflow: hidden; position: relative;}
    .cartHeader{width: 100%;height:1rem ;line-height: 1rem;font-size: 0.30rem;box-shadow: 0 0 10px #cecece;position: fixed;z-index: 2;background: WHITE;}
    .cartHeader a{text-decoration: none;color:black;width: 30%;line-height: 1rem;height: 1rem; }
    .pad{margin-left: 0.4rem;font-size: 0.5rem; display:block;height: 1rem;width: 0.6rem;float: left;}
    .cartlist{margin-top: 1rem;width: 100%;height: auto;overflow: hidden;margin-bottom: 1.1rem;}
    .cartlist ul{width: 100%;height: auto;overflow: hidden;}
    .cartlist ul li{list-style: none;overflow: hidden;border-bottom: 1px solid #ccc;background: white;}
    .leftimg{float: left;height: 2.1rem;width:26%;margin:0.44rem 0.6rem 0.62rem;box-sizing: border-box;}
    .leftimg img{width: 100%;height: 100%;}
    .rightbox{float: left;margin-top: 0.44rem;width: 55%;}
    .rightbox p{float: left;font-size: 0.26rem;width: 90%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
    .rightbox i{float: left;display: block;float: right;font-size: 0.4rem;}
    .price{margin-top: 0.25rem;color: red;font-size: 0.3rem;}
    .jiajian{border: 1px solid #b2b2b2;overflow: hidden;float: left;margin-top: 0.25rem;}
    .value-inp{background:none;outline:none; border:0px; border-radius: 0;-webkit-appearance : none ;border-left: 1px solid #b2b2b2;border-right: 1px solid #b2b2b2;}
    .jian,.jia,.value-inp{width: 0.77rem;height: 0.64rem;display:block;float: left;line-height: 0.64rem;text-align: center;font-size: 0.24rem;color:black;}
    .cartfooter{width: 100%;height: 1.1rem;overflow: hidden;position: fixed;bottom: 0;left: 0;z-index: 101;}
    .total{float: left;width: 37%;height: 1.1rem;background: white;line-height: 1.1rem;font-size: 0.3rem;}
    .total span{ color: red;font-size: 0.38rem;}
    .paybox{width: 63%;float: left;overflow: hidden;height: 1.1rem;}
    .paybox a{display: block;height: 100%;width: 50%;float: left;color: white;line-height: 1.1rem;text-align: center;font-size: 0.3rem;}
    .goon{background:#E3211E ;}
    .deleteall{background:#FF9800 ;}
    .cartimg{width: 100%;height: 100%;overflow: hidden;text-align: center;}
    .cartimg img{width: 3.3rem;height: 3.9rem;margin: 1.12rem auto 0;display: block;}
    .cartimg p{margin-top: 0.38rem;font-size:0.45rem;color: #959595;font-weight: 600; }
    .cartimg a{color:white;display: block;margin:0.6rem auto 0 ;width: 2.2rem;height:0.74rem;background:#e0524b;line-height: 0.74rem;font-size: 0.4rem;border-radius: 2px;font-weight: 700;}
</style>