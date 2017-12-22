import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Info from '@/components/Info'
import news from '@/components/news'
import choose from '@/components/choose'
import parts from '@/components/parts'
import cart from '@/components/cart'
import my from '@/components/my'
import order from '@/components/order'

Vue.use(Router)

export default new Router({
//  base:'/vivo-shop',
//  mode:'history',
  routes: [
    {path: '/',name: 'Home',component: Home},
    {path: '/Home',name: 'Home',component: Home},
    {path: '/Detail',name: 'Detail',component: Detail},
    {path: '/Info',name: 'Info',component: Info},
    {path: '/news',name: 'news',component: news},
    {path: '/choose',name: 'choose',component: choose},
    {path: '/parts',name: 'parts',component: parts},
    {path: '/cart',name: 'cart',component: cart},
    {path: '/my',name: 'my',component: my},
    {path: '/order',name: 'order',component: order}
  ]
})
