<template>
    <div class='choose'>
         <div  class="chooseHeader"><a href="javascripe:void(0);" @click='back' class="back"><i   class="iconfont icon-552cc14536532"></i></a>选购手机
        </div>
         <div class='tab-box'>
                <mt-navbar v-model='selected'>
                    <mt-tab-item id='tab1'>全部</mt-tab-item>
                    <mt-tab-item id='tab2'>Xplay系列</mt-tab-item>
                    <mt-tab-item id='tab3'>X系列</mt-tab-item>
                    <mt-tab-item id='tab4'>Y系列</mt-tab-item>
                </mt-navbar>
                <mt-tab-container v-model='selected' swipeable>
                    <mt-tab-container-item id='tab1'>
                         <ul>
                             <li v-for='(item,index) in all' :id='item.id' @click='enter(item.id)' :class='[item.id%2!=0?"border":""]'>
                                 <div class='img'><img :src="item.ImageOne" alt=""></div>
                                 <div class='name'>{{item.name}}</div>
                                 <div class='msg'>{{item.nametwo}}</div>
                                 <div class='price'>￥ {{item.Price}}</div>
                             </li>
                         </ul>
                    </mt-tab-container-item>
                    <mt-tab-container-item id='tab2'>
                        <ul>
                             <li v-for='(item,index) in Xplay' :id='item.id' @click='enter(item.id)' :class='[item.id%2!=0?"border":""]'>
                                 <div class='img'><img :src="item.ImageOne" alt=""></div>
                                 <div class='name'>{{item.name}}</div>
                                 <div class='msg'>{{item.nametwo}}</div>
                                 <div class='price'>￥ {{item.Price}}</div>
                             </li>
                         </ul>
                    </mt-tab-container-item>
                    <mt-tab-container-item id='tab3'>
                        <ul>
                             <li v-for='(item,index) in x' :id='item.id' @click='enter(item.id)' :class='[item.id%2!=0?"border":""]'>
                                 <div class='img'><img :src="item.ImageOne" alt=""></div>
                                 <div class='name'>{{item.name}}</div>
                                 <div class='msg'>{{item.nametwo}}</div>
                                 <div class='price'>￥ {{item.Price}}</div>
                             </li>
                         </ul>
                    </mt-tab-container-item>
                    <mt-tab-container-item id='tab4'>
                        <ul>
                             <li v-for='(item,index) in y' :id='item.id' @click='enter(item.id)' :class='[item.id%2!=0?"border":""]'>
                                 <div class='img'><img :src="item.ImageOne" alt=""></div>
                                 <div class='name'>{{item.name}}</div>
                                 <div class='msg'>{{item.nametwo}}</div>
                                 <div class='price'>￥ {{item.Price}}</div>
                             </li>
                         </ul>
                    </mt-tab-container-item>
                </mt-tab-container>
        </div>
    </div>
</template>


<script>
//import { MessageBox } from 'mint-ui';
//import { Toast } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';  
import { TabContainer, TabContainerItem } from 'mint-ui';
  export default{
      name:'choose',
      data(){
          return {
              selected:'tab1',
              all:[],
              Xplay:[],
              x:[],
              y:[],
              border:"border"
          }
      },
      methods:{
          back(){
              this.$router.go(-1)
          },
          enter(id){
              this.$router.push({path:'Detail',query:{id:id}})
          }
      },
      mounted:function(){
          var _this = this; 
          this.$http.get("/static/choose.json").then(res=>{
             var len1 = res.body.chooses;
             var len2 = res.body.motos;
             var len3 = res.body.MotoZs;
             var len4 = res.body.z2s;
              console.log(res)
              for(var i=0;i<len1.length;i++){
                  _this.all.push(len1[i])
              }
              for(var j=0;j<len2.length;j++){
                  _this.Xplay.push(len2[j])
              }
              for(var k=0;k<len3.length;k++){
                  _this.x.push(len3[k])
              }
              for(var l=0;l<len4.length;l++){
                  _this.y.push(len4[l])
              };
          })
      }
  }
</script>


<style scoped>
    .choose{width: 100%;height: auto;overflow: hidden; position: relative;background: white;}
    .chooseHeader{width: 100%;height:1rem ;text-align: center;line-height: 1rem;font-size: 0.30rem;box-shadow: 0 0 10px #cecece;position: fixed;z-index: 2;background: WHITE;}
    .back{position: absolute;display: block;float: left;height: 1rem;line-height: 1rem;color: black;margin-left: 0.23rem;}
    .back i{font-size: 0.48rem;}
    .tab-box{margin-top: 1rem;overflow: hidden;width: 100%;height: auto;}
    .mint-navbar .mint-tab-item.is-selected{     margin-bottom:0 !important; }
    .tab-box ul{width: 100%;height: auto;overflow: hidden;}
    .tab-box ul li{width: 49.8%;height: auto;overflow: hidden;float: left;list-style: none;text-align: center;border-bottom: 1px solid #F4F4F4;}
    .border{border-right: 1px solid #F4F4F4;}
    .tab-box ul li .img{width:2.3rem ;height: 2.22rem;overflow: hidden; list-style: none;margin: 0.46rem auto 0.52rem;}
    .tab-box ul li .img img{width:100%;height:100%;}
    .name{font-size: 0.24rem;}
    .msg{margin-bottom:0.34rem;margin-top:0.13rem;font-size: 0.22rem;}
    .price{color:red;margin-bottom: 0.4rem;}
</style>