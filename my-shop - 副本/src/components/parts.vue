<template>
    <div class='parts'>
         <div  class="partsHeader"><a href="javascripe:void(0);" @click='back' class="back"><i class="iconfont icon-552cc14536532"></i></a>选购手机
        </div>
        <div class='tab-box'>
            <mt-navbar v-model = 'selected'>
                <mt-tab-item id='tab1'>全部</mt-tab-item>
                <mt-tab-item id='tab2'>充电器</mt-tab-item>
                <mt-tab-item id='tab3'>保护膜</mt-tab-item>
                <mt-tab-item id='tab4'>耳机音响</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model='selected' swipeable>
                <mt-tab-container-item id='tab1'>
                    <ul>
                        <li v-for = '(item,index) in all' :class='[item.id%2==0?"border":""]' @click='enter(item.id)'>
                            <div class='img'><img :src="item.image" alt=""></div>
                            <div class='name'>{{item.name}}</div>
                            <div class='msg'>{{item.nametwo}}</div>
                            <div class='price'>￥ {{item.price}}</div>
                        </li>
                    </ul>
                </mt-tab-container-item>
                <mt-tab-container-item id='tab2'>
                    <ul>
                        <li v-for = '(item,index) in charger' :class='[item.id%2==0?"border":""]' @click='enter(item.id)'>
                            <div class='img'><img :src="item.image" alt=""></div>
                            <div class='name'>{{item.name}}</div>
                            <div class='msg'>{{item.nametwo}}</div>
                            <div class='price'>￥ {{item.price}}</div>
                        </li>
                    </ul>
                </mt-tab-container-item>
                <mt-tab-container-item id='tab3'>
                    <ul>
                        <li v-for = '(item,index) in protect' :class='[item.id%2==0?"border":""]' @click='enter(item.id)'>
                            <div class='img'><img :src="item.image" alt=""></div>
                            <div class='name'>{{item.name}}</div>
                            <div class='msg'>{{item.nametwo}}</div>
                            <div class='price'>￥ {{item.price}}</div>
                        </li>
                    </ul>
                </mt-tab-container-item>
                <mt-tab-container-item id='tab4'>
                    <ul>
                        <li v-for = '(item,index) in headset' :class='[item.id%2==0?"border":""]' @click='enter(item.id)'>
                            <div class='img'><img :src="item.image" alt=""></div>
                            <div class='name'>{{item.name}}</div>
                            <div class='msg'>{{item.nametwo}}</div>
                            <div class='price'>￥ {{item.price}}</div>
                        </li>
                    </ul>
                </mt-tab-container-item>
                 
            </mt-tab-container>
        </div>
    </div>
</template>


<script>
    import { Navbar, TabItem } from 'mint-ui';  
import { TabContainer, TabContainerItem } from 'mint-ui';
    export default{
        data(){
            return{
                selected:"tab1",
                all:[],
                charger:[],
                protect:[],
                headset:[],
                border:"border"
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            },
            enter(id){
                this.$router.push({path:"Detail",query:{id:id}})
            }
        },
        mounted:function(){
            var _this = this;
            this.$http.get('/static/parts.json').then(res=>{
                console.log(res)
                var len1 = res.body.list;
                var len2 = res.body.charger;
                var len3 = res.body.protect;
                var len4 = res.body.headset;
                for(var i = 0;i<len1.length;i++){
                    _this.all.push(len1[i])
                }
                for(var k = 0;k<len2.length;k++){
                    _this.charger.push(len2[k])
                }
                for(var l = 0;l<len3.length;l++){
                    _this.protect.push(len1[l])
                }
                for(var m = 0;m<len4.length;m++){
                    _this.headset.push(len4[m])
                }
            })
        }
    }
</script>


<style scoped>
/*    .parts{width: 100%;height: auto;overflow: hidden;background: white;}*/
    .parts{width: 100%;height: auto;overflow: hidden; position: relative;background: white;}
    .partsHeader{width: 100%;height:1rem ;text-align: center;line-height: 1rem;font-size: 0.30rem;box-shadow: 0 0 10px #cecece;position: fixed;z-index: 2;background: WHITE;}
    .back{position: absolute;display: block;float: left;height: 1rem;line-height: 1rem;color: black;margin-left: 0.23rem;}
    .back i{font-size: 0.48rem;}
    .tab-box{width: 100%;background: white;height: auto;overflow: hidden;margin-top: 1rem;text-align: center;vertical-align: middle;}
    .mint-navbar .mint-tab-item.is-selected{margin-bottom: 0 !important;}
    .tab-box ul{width: 100%;height: auto;overflow: hidden}
    .tab-box ul li{width: 49.8%;height: auto;overflow: hidden;float: left;border-bottom: 1px solid #F4F4F4}
    .tab-box ul li .img{width:3rem;height: 2.7rem;overflow: hidden;margin: 0.92rem auto 0.2rem;}
    .tab-box ul li .img img{width:100%;height:100%;}
    .border{border-right: 1px solid #F4F4F4}
    .name{width: 90%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-weight: 700;font-size: 0.3rem;margin: auto;}
    .msg{width: 80%;margin: 0.28rem auto 0.3rem;height: 0.9rem;overflow: hidden;line-height: 0.4rem;}
    .price{color: red;margin-bottom: 0.64rem;}
</style>