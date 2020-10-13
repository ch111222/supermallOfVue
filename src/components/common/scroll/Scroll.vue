<template>
<!--ref/children ->-->
    <div class="wrapper" ref="wrapper">
        <div class="content">
        <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        props:{
            probeType:{
                type:Number,
                default:0
            },
            click:{
                type:Boolean,
                default:true
            },
            pullUpLoad:{
                type:Boolean,
                default:false
            },
            data:{
              type:Array,
                default(){
                  return[]
                }
            }
        },
        data(){
            return{
              scroll:{}
            }
        },
        mounted(){
           // 1.创建BScroll对象
           this.scroll=new BScroll(this.$refs.wrapper,{
               click:this.click,
               probeType:this.probeType,
               pullUpLoad:this.pullUpLoad
           })
           //2.监听滚动的位置
            this.scroll.on('scroll',(position)=>{
                   this.$emit('scroll',position)
            })
           //3.监听scroll滚动到底部
           if(this.pullUpLoad){
               this.scroll.on('pullingUp',()=>{
                   this.$emit('pullingUp')
               })
           }
        },
        methods:{
            scrollTo(x,y,time=100){
                this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
            },
            finishPullUp(){
                this.scroll&&this.scroll.finishPullUp()
            },
            refresh(){
                console.log('-----');
                this.scroll&&this.scroll.refresh()
            },
            finishPullUp(){
                this.scroll&&this.scroll&&this.scroll.finishPullUp()
            },
            getScrollY(){
                return this.scroll ? this.scroll.y:0
            }
        }
    }
</script>

<style scoped>
.wrapper{
    overflow:hidden;
}
</style>