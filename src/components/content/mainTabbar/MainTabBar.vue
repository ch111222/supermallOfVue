<template>
  <tab-bar>
    <tab-bar-item path="/home" >
      <img  slot="item-icon" src="~assets/img/img/tabbar/home.svg" alt="">
      <img  slot="item-icon-active" src="~assets/img/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category"  >
      <img  slot="item-icon" src="~assets/img/img/tabbar/category.svg" alt="">
      <img  slot="item-icon-active" src="~assets/img/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="cart"  >
      <img  slot="item-icon" src="~assets/img/img/tabbar/shopcart.svg" alt="">
      <img  slot="item-icon-active" src="~assets/img/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile"  >
      <img  slot="item-icon" src="~assets/img/img/tabbar/profile.svg" alt="">
      <img  slot="item-icon-active" src="~assets/img/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
    export default {
        name: "MainTabBar",
      components:{
          TabBar,
        TabBarItem
      }
    }
    import TabBar from 'components/common/tabbar/TabBar'
    import TabBarItem from 'components/common/tabbar/TabBarItem'
</script>

<style scoped>

</style>
