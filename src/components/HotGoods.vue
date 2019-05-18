<template>
  <div>
    <div class="Snack_foods">
      <div class="Leisure">
        <h2>热销商品</h2>
      </div>
    </div>
    <div class="Hot_goods_box">
      <div class="Hot_goods" @click="productC(item)" v-for="(item,index) in articles.hotGoods" :key="item.index">
        <div>
          <img v-lazy="item.image" alt="">
        </div>
        <div class="Commodity_price">
          <p class="product_name">{{item.name}}</p>
          <div class="priceA">
            <div>￥<span class="Current_price">{{item.mallPrice}}</span></div>
            <span>{{item.price}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotGoods",
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {
    productC(item) {
      this.$router.push({ name: "productDetails", query: { id: item.goodsId }
      })
    }
  },
  mounted() {

  },
  created() {

  },
  filters: {},
  computed: {
    articles() {
      return this.$store.state.articles
    }
  },
  watch: {},
  directives: {}
}
</script>

<style scoped lang="scss">
.Leisure{
  display: flex;
}
.Leisure h2{
  line-height: 40px;
  font-size: 30px;
  color: #B0494A;
}
.Snack_foods{
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.Hot_goods{
  width: 50%;
  border: 1px solid #F1F1F1;
}
.Hot_goods_box{
  display: flex;
  flex-wrap: wrap;
  background-color: white;
}
.product_name{
  width: 95%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 26px;
  color: #AF4047;
  padding-left: 20px;
}
.Commodity_price{
  text-align: center;
}
.priceA{
  display: flex;
  justify-content: center;
  padding-top: 15px;
}
.priceA span:nth-child(2){
  text-decoration:line-through;
  line-height: 33px;
  margin-left: 10px;
  color: #999B98;
}
.Current_price{
  font-size: 30px;
  color: #A44B45;
  font-weight: 700;
}
</style>