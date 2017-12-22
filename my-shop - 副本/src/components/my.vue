<template>
    <div class='ismy'>
        <div class='myheader'>我的</div>
        <div class='myimg'>
            <img src="/static/img/name.jpg" alt="">
            <p class='myname'>WangXJ</p>
        </div>
        <div class='myorder' @click='enter()'>
            <i class='iconfont icon-74wodedingdan'></i>
            <p>我的订单</p>
        </div>
        <div class='myrelation'>
            <i class='iconfont icon-zuozhe'></i>
            <p>联系我</p>
        </div>
    </div>
</template>
<script>
    import {mapMutations,mapGetters,mapState} from 'vuex'
    export default{
        data(){
            return{
                
            }
        },
        methods:{
            enter(){
                this.$router.push('/order')
            }
        }
    }
</script>
<style scoped>
    .ismy{width: 100%;height: auto;overflow: hidden;background: white;}
    .myheader{height:1.1rem ;padding-left:0.22rem ;line-height: 1.1rem;font-size: 0.28rem;box-shadow: 0 0 10px #cecece;margin-bottom: 0.2rem;}
    .myimg,.myorder,.myrelation{width:100%;box-sizing: border-box;border-bottom: 1px solid #cccccc;overflow: hidden; }
    .myimg img{display: block;float: left;width: 1.2rem;height: 1.2rem; margin-left: 0.2rem;padding: 0.14rem;}
    .myimg p{float: left;height: 100%;line-height: 1.4rem; }
    .myorder,.myrelation{height: 1.12rem;line-height: 1.12rem;padding-left: 0.34rem;font-size: 0.3rem;}
    .myorder i,.myrelation i{display: block;float: left;}
    .myorder p,.myrelation p{display: block;float: left;margin-left: 0.2rem;}
</style>