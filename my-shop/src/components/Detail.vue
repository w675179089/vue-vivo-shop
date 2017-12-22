<template>
<div class='detail'>
    <div class='detailHeader'>
        <a href="javascripe:void(0);" @click='back' class='back'><i class='iconfont icon-552cc14536532'></i></a>商品详情
    </div>
    <div class='detaillist'>
        <div v-for='(item,index) in DetailsList' :key='item.id'>
            <div class='swipe'>
                <mt-swipe :auto='4000'>
                    <mt-swipe-item> <img :src="item.imgone" alt=""></mt-swipe-item>
                    <mt-swipe-item> <img :src="item.imgtwo" alt=""></mt-swipe-item>
                    <mt-swipe-item> <img :src="item.imgThree" alt=""></mt-swipe-item>
                </mt-swipe>
            </div>
            <div class='priceBox'>
                <p class='detailMsg'>{{item.name}}</p>
                <p class='detailPrice'>￥ {{item.price}}</p>
            </div>
            <div class='valueBox'>
                <p class='value'>购买数量：</p>
                <p class='jiajian'><a class='jian' href='javascript:;' @click = 'jian(index)'>-</a><input readonly='readonly' type="text" v-model = 'item.value' class='value-inp'><a href='javascript:;' class='jia' @click = 'jia(index)' ref='bg'>+</a></p>
            </div>
            <div class='tab-box'>
                <mt-navbar v-model='selected'>
                    <mt-tab-item id='tab1'>图文配置</mt-tab-item>
                    <mt-tab-item id='tab2'>商品配置</mt-tab-item>
                </mt-navbar>
                <mt-tab-container v-model='selected' swipeable>
                    <mt-tab-container-item id='tab1'>
                        <div class='detailsImg'>
                            <p v-for='img in DetailsList[index].Images'><img :src="img.one" alt=""></p>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id='tab2'>
                        <div class='detailsTable'>
                            <table>
                                <tbody>
                                    <tr v-for='td in DetailsList[index].Peizhis'>
                                        <td class='td1'>{{td.left}}</td>
                                        <td class='td2'>{{td.right}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
            <div class='detailsFooter'>
                <a href="javascript:void(0);" class='add' @click='add(index)'>加入购物车</a>
                <a href="javascript:void(0);" class='pay' @click='pay(index)'>立即购买</a>
            </div>
        </div>
    </div>
    

</div>
</template>
<script>
    import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';  
import { TabContainer, TabContainerItem } from 'mint-ui';
    export default{
        name:"detail",
        data(){
            return{
                DetailsList:[],
                init:1,
                bg:"bg",
                selected:"tab1"
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            },
            jia(index){
                this.DetailsList[index].value++;
                console.log(this.DetailsList)
            },
            jian(index){
                
                if(this.DetailsList[index].value == 1){
                     this.DetailsList[index].value = 1;
                }else{
                    this.DetailsList[index].value--;
                }
            },
            pay(index){
                Toast({message:`成功支付了${this.pays}元`,iconClass:'iconfont icon-goumaichenggong',duration:750});
                var thisData = {
                    id:this.DetailsList[index].id,
                    number:this.DetailsList[index].number,
                    name:this.DetailsList[index].name,
                    color:this.DetailsList[index].color,
                    price:this.DetailsList[index].price,
                    imgone:this.DetailsList[index].imgone,
                    value:this.DetailsList[index].value
                };
                this.$store.commit('addorder',thisData);
            },
            add(index){
                //购物车存在就不添加
                var _this = this;
                var isBe = this.$store.state.carts.find(function(item){
                    return _this.DetailsList[index].id == item.id;
                });
                if(!isBe){
                    var thisData = {
                        id:this.DetailsList[index].id,
                        number:this.DetailsList[index].number,
                        name:this.DetailsList[index].name,
                        color:this.DetailsList[index].color,
                        price:this.DetailsList[index].price,
                        imgone:this.DetailsList[index].imgone,
                        value:this.DetailsList[index].value
                    };
                    this.$store.commit('addcarts',thisData)
                    Toast({message:`添加成功!`,iconClass:'iconfont icon-goumaichenggong',duration:1000});
                }else{
                    MessageBox('提示','该商品已存在于购物车');
                }
            }
        },
        computed:{
            pays:function(){
                var total = 0;
                for(var i in this.DetailsList){
                     total= this.DetailsList[i].value*this.DetailsList[i].price;
//                console.log(total)
                }
                return total;
            }
        },
        mounted:function(){
            var _this = this;
            var id = this.$route.query.id;
            console.log(id);
            this.$http.get("/static/Detail.json").then(function(res){
//                console.log(res);
                var len = res.body.Details.length
                for(var i = 0;i<len;i++){
                    if(id == res.body.Details[i].id){
                        _this.DetailsList.push(res.body.Details[i]);
                        
                    }
                }
            })
        }
    };
</script>

<style scoped>
    .detail{width: 100%;height: auto;overflow: hidden; position: relative;background: white;}
    .detailHeader{width: 100%;height:1rem ;text-align: center;line-height: 1rem;font-size: 0.30rem;box-shadow: 0 0 10px #cecece;position: fixed;z-index: 2;background: WHITE;}
    .back{position: absolute;display: block;float: left;height: 1rem;line-height: 1rem;color: black;margin-left: 0.23rem;}
    .back i{font-size: 0.48rem;}
    .detaillist{width: 100%;height: auto;margin-top: 1rem;}
    .swipe{width: 100%;height: 7.3rem;}
    .swipe img{width: 5.25rem;height: 5.25rem;margin: 0.8rem auto;display: block;}
    .priceBox,.valueBox{width: 100%;height:auto;border-top: 1px solid #ccc; box-sizing: border-box;padding:0.37rem 0.32rem 0.32rem;overflow: hidden;}
    .detailMsg{color: black;font-weight: 800;font-size: 0.3rem;}
    .detailPrice{color: red;font-size: 0.28rem;margin-top: 2px;}
    .value{float: left;font-size: 0.22rem;height: 0.64rem;line-height: 0.64rem;}
    .jiajian{float: left;margin-left: 0.3rem;border: 1px solid #b2b2b2;}
    .value-inp{background:none;outline:none; border:0px; border-radius: 0;-webkit-appearance : none ;border-left: 1px solid #b2b2b2;border-right: 1px solid #b2b2b2;}
    .jian,.jia,.value-inp{width: 0.77rem;height: 0.64rem;display:block;float: left;line-height: 0.64rem;text-align: center;font-size: 0.24rem;color:black;}
    .tab-box{border-top:1px solid #ccc;}
    .detailsImg img{width: 100%;height: auto;display: block;}
    .mint-navbar .mint-tab-item.is-selected{margin-bottom: 0 !important;}
    .detailsImg,.detailsTable{margin-top: 1px;}
    table{border:1px solid #ccc;width: 100%;border-collapse: collapse;text-align: center;}
    .td1{width: 20%;height: 1rem;border: 1px solid #ccc;}
    .td2{width: 80%;height: 1rem;border: 1px solid #ccc;}
    .detailsFooter{text-align: center;position: fixed;left: 0;bottom: 0;width: 100%;height: 1.1rem;background: white;z-index: 101;}
    .detailsFooter a{width: 50%;height: 100%;float: left;color:white;line-height: 1rem;font-size: 0.26rem;}
    .add{background: #FF9800;}
    .pay{background: #E3211E;}
</style>