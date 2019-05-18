<template>
  <div>
    <div>
      <div class="Snack_foods">
        <div class="Leisure">
          <span>3F</span>
          <h2>营养奶品</h2>
        </div>
      </div>
      <div class="snack_img" >
        <div class="Snack_foods_img" @click="productD(item)" v-for="(item,index) in articles.floor3" :key="item.goodsId">
          <img :src="item.image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NutritionalMilk",
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {
    productD(item) {
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
.Leisure span{
  text-align: center;
  line-height: 45px;
  display: block;
  width: 40px;
  height: 40px;
  background-color: #DF2E26;
  border-radius: 50%;
  font-weight: bold;
  color: #FFE4CD;
}
.Snack_foods{
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.Snack_foods_img{
  float: left;
  width: 50%;
}
.snack_img:after{
  content: "";
  height: 0;
  display: block;
  clear: both;
  zoom: 1;
  visibility: hidden;
}
</style>