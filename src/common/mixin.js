import {debounce} from './utils';
import BackTop from 'components/content/backTop/BackTop';
import TabControl from "components/content/tabControl/TabControl";
import {POP, SELL, NEW} from "./const";
export const itemListenerMixin={
    data(){
      return{
          itemImgListener:null,
          newRefresh:null
      }
    },
    mounted(){
        this.newRefresh=debounce(this.$refs.scroll.refresh,50)
        this.itemImgListener=()=>{
            this.newRefresh()
        }
        this.$bus.$on('itemImageLoad', this.itemImgListener)
        console.log('我是混入中的内容');
    }
    }
    export const backTopMixin={
    components:{
        BackTop
    },
    data(){
        return{
            isShowBackTop:false
        }
    },
        methods:{
            backClick(){
                this.$refs.scroll.scrollTo(0,0)
            }
        }
    }
export const tabControlMixin = {
    components: {
        TabControl
    },
    data: function () {
        return {
            currentType: POP
        }
    },
    methods: {
        //1、监听tabControl的点击
        tabClick(index) {
            //调用此方法来保持两个tabControl的选项一致
            this._tabClick(index);

            switch (index) {
                case 0:
                    //如果当前页面不是正在显示的就滚动到所点击标签的起始位置
                    if (this.currentType != POP && this.isTabFixed) {
                        this.$refs.scroll && this.$refs.scroll.scrollTo(0, (-this.tabOffsetTop), 0);
                    }
                    this.currentType = POP;
                    break;

                case 1:
                    if (this.currentType != NEW && this.isTabFixed) {
                        this.$refs.scroll && this.$refs.scroll.scrollTo(0, (-this.tabOffsetTop), 0);
                    }
                    this.currentType = NEW;
                    break;

                case 2:
                    if (this.currentType != SELL && this.isTabFixed) {
                        this.$refs.scroll && this.$refs.scroll.scrollTo(0, (-this.tabOffsetTop), 0);
                    }
                    this.currentType = SELL;
                    break;
            }
        }
    }
}
