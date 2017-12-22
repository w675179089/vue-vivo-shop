<template>
    <div class='news'>
        <div  class="newsHeader"><a href="javascripe:void(0);" @click='back' class="back"><i   class="iconfont icon-552cc14536532"></i></a>新闻详情
        </div>
        <div class='newsMain' v-for = 'item in items'>
            <div class='newbox' v-for = 'infoitem in item.boxs'><p>{{infoitem.p}}</p><img :src="infoitem.img" alt=""></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'news',
        data() {
            return {
                items: []
            }
        },
        methods: {
            back(){
                this.$router.go(-1)
            }
        },
        mounted: function() {
            var _this = this
            var id = this.$route.query.id
            this.$http.get("/static/Info.json").then(function(res) {
                console.log(res);
                for (var i in res.body.list) {
                    if(id ==res.body.list[i].id ){
                         _this.items.push(res.body.list[i])
                    }
                   
                }
                console.log(_this.items[0].boxs)
                    //                _this.items =res.body.items
            })
        }
    }
//    { "id": 1, "title": " vivo杀出重围成为黑马销量迅速上升", "time": "2017-11-15 11:00:10", "boxs": [ { "p": "　　【中国 新闻】11月4日，京东实时竞速榜第四天，各类数码商品销售格局发生细微变化，在品牌、产品、店铺、单品的的排名中皆出现黑马，品牌争霸团战激烈可见一斑。" }, { "img": "http://img.cnmo-img.com.cn/1498_600x1000/1497189.png" }, { "p": "　　手机产品榜单由于iPhone X的上市京东作为iPhone X最大的线上销售渠道，苹果在榜单内排名一直居高不下，而令我们以外的是，榜单上一改前两日荣耀与小米的拉锯战，另一国产手机品牌vivo惊艳逆袭，强势突围杀入榜单第二名，vivo X20在单品排名榜单上也短时间内登顶成功，成为手机榜单第三日最大黑马，截止至当日晚些时候vivo官方旗舰店的销售总额成为当日最大赢家。除此之外诺基亚手机在当天也再次入榜，这位久违的老朋友入榜让我们看到额此次京东双11活动对手机市场所带来的巨大影响。另外值得我们注意的是三星galaxy也出现在我们的榜单中，对这款手机未来的表现值得我们继续期待。" }, { "img": "http://img.cnmo-img.com.cn/1498_600x1000/1497188.png" }, { "p": "　　PC方面一反前几日联想一家独大形势，戴尔厚积薄发顺利折桂，联想屈居第二。华硕也因戴尔的异军突起屈居第三，但是依旧超越了ThinkPad和苹果。小米超越宏碁、惠普屈居第六，短短几天局势便如此扑朔迷离，不知在接下来的几天里PC榜单还会为我们带来多少惊喜，让我们更加期待最后的赢家是谁" }, { "p": "　　根据小编了解的消息，手机榜单上的黑马vivo在同一天因为未知的原因在苏宁促销活动中下架，反观京东方面vivo却一跃成为最强黑马，这其间原有我们并不知晓，但那时可以看出不同电商品牌在销售预期上还是有很大差别的，所以最终的结果，不管是数码产品品牌之间，还是在电商之间，都还有着巨大的不可确定因素，我们也将继续关注双11各大电商品牌以及数码产品的销售情况，希望大家继续关注。" } ] }
</script>


<style scoped>
    .news{width: 100%;height: auto;overflow: hidden; position: relative;background: white;}
    .newsHeader{width: 100%;height:1rem ;text-align: center;line-height: 1rem;font-size: 0.30rem;box-shadow: 0 0 10px #cecece;position: fixed;z-index: 2;background: WHITE;}
    .back{position: absolute;display: block;float: left;height: 1rem;line-height: 1rem;color: black;margin-left: 0.23rem;}
    .back i{font-size: 0.48rem;}
    .newsMain{margin-top: 1rem;width: 100%;height: auto;padding-top: 0.1rem;}
    .newbox p{margin: auto;width:80%;font-size: 0.3rem;line-height: 0.5rem;text-align: justify;}
    .newbox img{width: 100%;}
</style>