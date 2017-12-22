import Vue from 'vue'
import Vuex, { Store } from 'Vuex'
import { MessageBox } from 'mint-ui';

Vue.use(Vuex);
var state = {
    carts:window.localStorage['carts']?JSON.parse(window.localStorage['carts']):[],
    orders:window.localStorage['orders']?JSON.parse(window.localStorage['orders']):[]
    
};
var mutations = {
    //    点击立即购买过后加入订单
    addorder:function(state,data){
//          state.orders = [];
        state.orders.push(data);
        window.localStorage.setItem('orders',JSON.stringify(state.orders));
      
    },

    //点击加入购物车
    addcarts:function(state,data){
        state.carts.push(data);
        console.log(state.carts)
        window.localStorage.setItem('carts',JSON.stringify(state.carts))
    },
    //清空购物车
    deleteCartAll:function(state){
        state.carts = [];
        window.localStorage.setItem('carts',JSON.stringify(state.carts))
    },
    //删除购物车中指定商品
    deleteCartThis:function(state,index){
        console.log(state,index);
        MessageBox.confirm('确定删除该商品么').then(function(action){
            state.carts.splice(index,1);
            window.localStorage.setItem('carts',JSON.stringify(state.carts))
        })
        
    },
    //删除指定订单
    deleteOrderThis:function(state,index){
        MessageBox.confirm('确定删除该订单么').then(function(action){
            state.orders.splice(index,1);
            window.localStorage.setItem('orders',JSON.stringify(state.orders))
        })
    },
    //购物车页面中的商品加减
    add:function(state,index){
        state.carts[index].value ++;
    },
    jian:function(state,index){
        if(state.carts[index].value == 1){
            state.carts[index].value == 1
        }else{
            state.carts[index].value--;
        }
    }
}
var getters = {
    //购物车页面点击加减数量过后的求和
    sum:function(state){
        var sum=0
        for(var i=0;i<state.carts.length;i++){
            sum += state.carts[i].value*state.carts[i].price;
        }
        return sum;
    }
}

var store = new Vuex.Store({
    state:state,
    mutations:mutations,
    getters:getters
});
export default store
