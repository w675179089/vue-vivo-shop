<template>
    <div class='myorder'>
        <div  class="myorderHeader"><router-link to='/my' class=''><i class="iconfont icon-552cc14536532 pad"></i></router-link>
        我的订单
        </div>
        <div class='noorder' v-if='!orders.length'>
            <img src="/static/img/dingdan.png" alt="订单">
            <p>您暂无订单</p>
        </div>
        <div class='orderlist'>
            <ul>
                <li v-for ='(item,index) in orders'>
                    <div class='ordershop'>
                        <div class='vivo'><i class='iconfont icon-qijiandian'></i>vivo官方旗舰店</div>
                        <div class='success'>交易成功</div>
                    </div>
                    <div class='orderdetail'>
                        <div class='leftimg'><img :src="item.imgone" alt=""></div>
                        <div class='rightbox'>
                            <div class='oneline' style='overflow:hidden;font-size:0.25rem;'>
                                <p class='name'>{{item.name}}</p>
                                <p class='num'>x{{item.value}}</p>
                            </div>
                            <div class='color'>颜色:{{item.color}}</div>
                            <div class='price'>￥ {{item.price}}</div>
                             
                        </div>
                    </div>
                    <div class='total'>
                        <p class='totalnum'><span>共</span><span class='value'>{{item.value}}</span><span>件商品 总计:</span><span class='totalprice'>￥ {{item.value*item.price}}</span></p>
                        <p class='deletethis' @click='deleteOrderThis(index)'>删除订单</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {mapState,mapMutations,mapGetters} from 'vuex'
    export default{
        data(){
            return{
                
            }
        },
        methods:{
            ...mapMutations(['deleteOrderThis'])
        },
        computed:{
            orders(){
                return this.$store.state.orders;
            }
        },
        mounted(){
            console.log(this.$store.state.orders)
        }
    }
</script>
<style scoped>
    .myorder{width: 100%;height:auto;overflow: hidden;}
    .myorderHeader{width: 100%;height:1rem ;line-height: 1rem;font-size: 0.30rem;box-shadow: 0 0 10px #cecece;position: fixed;z-index: 2;background: WHITE;text-align: center;}
    .myorderHeader .pad{margin-left: 0.4rem;font-size: 0.5rem; display:block;height: 1rem;width: 0.6rem;float: left;}
    .orderlist{width: 100%;height: auto;margin-top: 1rem;overflow: hidden;margin-bottom: 1.1rem;}
    .orderlist ul{width: 100%;height: auto;}
    .orderlist ul li{width: 100%;height: auto;overflow: hidden;margin-top: 0.3rem;background: white;}
    .orderlist ul li .ordershop{width: 100%;height: auto;overflow: hidden}
    .ordershop{height: 0.8rem;line-height: 0.8rem;font-size: 0.24rem;}
    .vivo{float: left;color:rgb(102, 102, 102)}
    .vivo i{float: left;display: block;margin-left: 0.2rem;margin-right: 0.1rem;}
    .success{float: right;display: block;margin-right: 0.2rem;color:rgb(0, 172, 255);font-weight: 500;}
    .orderdetail{width: 100%;height: auto;overflow: hidden;border-bottom: 1px solid #cccccc;border-top:1px solid #cccccc; }
    .leftimg{margin: 0.29rem 0.2rem 0.29rem 0.45rem;float: left;overflow: hidden;width: 25%}
    .leftimg img{width: 1.87rem;}
    .rightbox{float: left;margin-top: 0.4rem;width: 61%;}
    .name{width: 90%;float: left;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .num{float: right;color:#888;}
    .color{color: #888;margin-top: 0.16rem;font-size: 0.24rem;}
    .price{margin-top:0.26rem;color: red;}
    .total{width:100%;height: 1.28rem;overflow: hidden;font-size: 0.24rem;}
    .totalnum{width: 48%;float: right;text-align: left;margin-top: 0.3rem;}
    .value,.totalprice{color: red;}
    .deletethis{clear: both;text-align: right;box-sizing:border-box;padding-right: 0.2rem;color:#888;margin-top: 0.2rem;}
    .noorder{width: 2.25rem;height: 2.25rem;margin:3.75rem auto 0; }
    .noorder img{width: 1.75rem;display: block;margin: 0 auto;}
    .noorder p {margin-top: 0.2rem;text-align: center;color: #ccc;font-size: 0.3rem;}
</style>