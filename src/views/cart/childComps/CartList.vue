<template>
       <scroll class="cart-list" >
          <cart-list-item v-for="(item,index) in cartList"
                          :item-info="item"
                          :key="index"/>
       </scroll>
</template>

<script>
    import Scroll from 'components/common/scroll/Scroll'
    import CartListItem from './CartListItem'
    import {mapGetters} from 'vuex'
    export default {
        name: "CartList",
        components:{
            Scroll,
            CartListItem,
        },
        computed:{
            ...mapGetters(['cartList'])
        },
        activated(){
            console.log('+++')
            // this.$refs.scroll.refresh()
        },
    }
</script>

<style scoped>
    .cart-list{
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 49px;
        /*height:(100%-44px-49px-40px);*/
    }
</style>