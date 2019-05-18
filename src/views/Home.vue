<template>
  <div class="input__control van-iconA">
    <van-row>
      <van-col span="24">
        <Topsearch @show="isShow" @searchFor="SearchValue"></Topsearch> <!--顶部搜索框-->
      </van-col>
      <div v-if="hide === false ">
        <van-col span="24">
          <Carouselmap></Carouselmap> <!--轮播图-->
        </van-col>
        <van-col span="24">
          <Products-featured></Products-featured> <!--商品推荐-->
        </van-col>
        <van-col span="24">
          <Snack-foods></Snack-foods><!--休闲食品-->
        </van-col>
        <van-col span="24">
          <Fresh-fruits></Fresh-fruits><!--新鲜水果-->
        </van-col>
        <van-col span="24">
          <Nutritional-milk></Nutritional-milk><!--营养奶品-->
        </van-col>
        <van-col span="24">
          <Hot-goods></Hot-goods><!--热销商品-->
        </van-col>
      </div>
      <div>
        <van-col span="24">
          <div v-for="(item,index) in SearchData" :key="item.id">
            <span>{{item.name}}</span>
          </div>
        </van-col>
      </div>
    </van-row>
    <div class="hide" v-if="hide === true"></div>
  </div>
</template>

<script>
import Topsearch from "../components/home/Topsearch";
import Carouselmap from "../components/Carouselmap";
import ProductsFeatured from "../components/ProductsFeatured";
import SnackFoods from "../components/SnackFoods";
import FreshFruits from "../components/FreshFruits";
import NutritionalMilk from "../components/NutritionalMilk";
import HotGoods from "../components/HotGoods";
export default {
  name: "Home",
  components: {
    Topsearch,
    Carouselmap,
    ProductsFeatured,
    SnackFoods,
    FreshFruits,
    NutritionalMilk,
    HotGoods
  },
  props: {},
  data() {
    return {
      hide: false,
      SearchData: [] // 子组件搜索传过来的数据
    }
  },
  methods: {
    isShow(data) {
      this.hide = data
    },
    SearchValue(data) {
      this.SearchData = data.list
      console.log(this.SearchData);
    }
  },
  mounted() {

  },
  created() {

  },
  filters: {},
  computed: {

  },
  watch: {

  },
  directives: {}
}
</script>

<style scoped lang="scss">
.hide{
  height: 100px;
  width: 100%;
  background-color: white;
  position: absolute;
  z-index: 999;
  bottom: 0;
}
</style>