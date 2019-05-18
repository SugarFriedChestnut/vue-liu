<template>
  <div>
    <van-row >
      <van-col span="24">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in articles.slides" :key="index">
            <img v-lazy="image.image" />
          </van-swipe-item>
        </van-swipe>
      </van-col>
    </van-row>
    <div class="fruit" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <div class="fruitA">
        <div v-for="(item,index) in articles.category" :key="item.key" class="fruit_img" @click="fruit(item,index)">
          <img v-lazy="item.image">
          <span>{{item.mallCategoryName}}</span>
        </div>
      </div>
    </div>
    <div class="Inside_img">
      <img src="http://images.baixingliangfan.cn/advertesPicture/20180404/20180404085441_850.gif" >
    </div>
  </div>
</template>

<script>
export default {
  name: "Carouselmap",
  components: {},
  props: {},
  data() {
    return {

    }
  },
  methods: {
    fruit(item, index) {
      this.$router.push({ name: "Classification", params: { id: item.bxMallSubDto[0].mallSubId ,index: index}
      })
    },
    touchstart (e) {
      // console.log(e.touches[0].clientX)
    },
    touchmove (e) {
      // console.log(e.touches[0].clientX)
    },
    touchend (e) {
      // console.log(e.touches[0].clientX)
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
.fruit {
  width: 95%;
  margin: 0 auto;
  padding: 20px 0;
}
.fruitA {
  border: 1px solid #EBEBEB;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;
}
.fruitA img {
  width: 130px;
  height: 130px;
  padding: 15px;
}
.fruit_img {
  text-align: center;
}
.fruit_img span{
  font-size: 28px;
  margin-bottom: 10px;
  display: block;
}
.Inside_img{
  padding-bottom: 40px;
}
</style>