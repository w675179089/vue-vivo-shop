<template>
    <div class='Info'>
        <div class='infoHeader'><span>新闻信息</span></div>
        <div class='infoMain'>
              <ul>
                    <li v-for = '(item,index) in items' :id="item.id" @click='enter(item.id)'>
                        <h3 class='title'>{{item.title}}</h3>
                        <p class='time'>{{item.time}}</p>
                        <div class='infoImg'><img :src="item.img" alt=""></div>
                        <a  href='javascript:void(0)' class='allread' @click='enter(item.id)'>阅读全文</a>
                    </li>
              </ul>
        </div>
    </div>
</template>

<script>
  export default{
      name:'Info',
      data(){
          return{
              items:[]
          }
      },
      methods:{
          enter(id){
              console.log(id);
              this.$router.push({path:'news',query:{id:id}})
          }
      },
      mounted:function(){
            var _this = this
              this.$http.get("/static/Info.json").then(function(res){
                console.log(res);
                  for(var i in res.body.informations){
                      _this.items.push(res.body.informations[i])
                  }
                  console.log(_this.items)
//                _this.items =res.body.items
            }) 
      }
  }
</script>

<style scoped>
    .Info{width: 100%;height: auto;overflow: hidden;background: white;}
    .infoHeader{    width: 100%; height: 1rem;padding-left: 0.16rem; line-height: 1rem;font-size: 0.30rem;-webkit-box-shadow: 0 0 10px #cecece;box-shadow: 0 0 10px #cecece;position: fixed;z-index: 2;background: white;}
    .infoMain{margin-top: 1rem;width: 100%;height: auto;}
    .infoMain ul li{padding-top: 0.33rem;width: 100%;background: white;overflow: hidden;}
    .title,.time{width: 80%;margin: 0 auto;}
    .title{font-size: 0.3rem;font-weight: 700;margin-bottom: 0.16rem;}
    .time{font-size: 0.18rem;}
    .infoImg{margin-top: 0.14rem;width: 100%;height: auto;}
    .infoImg img{width: 100%;height: 3.52rem;}
    .allread{color: black;display: block;float: right;margin-right:0.56rem ;margin-top: 0.1rem;}
</style>