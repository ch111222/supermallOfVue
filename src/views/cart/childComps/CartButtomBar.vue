<template>
    <div class="buttom-bar">
        <div class="check-content">
        <check-button :is-checked="isSelectedAll" class="check-button" @click.native="checkClick"></check-button>
        <span>全选</span>
        </div>
        <div class="price">
            合计:{{totalPrice}}
        </div>
        <div class="calculate" @click="calcClick">
            去计算({{checkLength}})
        </div>
    </div>
</template>

<script>
    import CheckButton from 'components/content/checkButton/CheckButton'
    export default {
        name: "CartButtomBar",
        components:{
            CheckButton
        },
        computed:{
          totalPrice(){
              return '￥'+this.$store.state.cartList.filter(item=>{
                  return item.checked
              }).reduce((preValue,item)=>{
                  return preValue+item.price*item.count
              },0).toFixed(2)
          },
            checkLength(){
              return this.$store.state.cartList.filter(item=>item.checked).length
            },
            isSelectedAll(){
              if(this.$store.state.cartList.length===0) return false
                //1.使用find函数
               return  !this.$store.state.cartList.find(item=>!item.checked)
               //2.使用filter函数
                // return !(this.$store.state.cartList.filter(item=>!item.checked).length)
              //3.普通遍历
            /*    for(let item of this.$store.state.cartList){
                  if(!item.checked){
                      return false
                  }
                }
              return true*/
            }
        },
        methods:{
            checkClick(){
                if(this.isSelectedAll){//全部选中
                    this.$store.state.cartList.forEach(item=>item.checked=false)
                }else{//部分或全部不选中
                    this.$store.state.cartList.forEach(item=>item.checked=true)
                }
            },
            calcClick(){
                if(!this.isSelectedAll){
                    this.$toast.show('请选择购买的商品',2000)
                }
            }
        }
    }
</script>

<style scoped>
.buttom-bar{
    height:40px;
    background-color:#eee;
    position:relative;
    line-height:40px;
    bottom:-519px;
    display:flex;
    font-size:14px;
}
    .check-button{
        width:20px;
        height:20px;
        line-height:20px;
        margin-right:5px;
    }
    .check-content{
        display:flex;
        align-items:center;
        margin-left:10px;
        width:90px;
    }
    .price{
        margin-left:30px;
        flex:1;
    }
    .calculate{
        width:90px;
        background:red;
        color:#fff;
        text-align:center;
    }
</style>