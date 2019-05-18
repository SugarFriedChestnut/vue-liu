<template>
  <div>
    <van-tabbar
            v-model="active"
            active-color="#E0322B"
    >
      <van-tabbar-item icon="home-o" @click="Mall">商城</van-tabbar-item>
      <van-tabbar-item icon="wap-nav" @click="Categories">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" @click="shopping">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" @click="Mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "BottomNavigation",
  components: {},
  props: {},
  data() {
    return {
      active: 0
    }
  },
  methods: {
    Mall() {
      this.$router.push({ name: "home" })
    },
    Categories() {
      this.$router.push({ name: "Classification" })
    },
    shopping() {
      this.$router.push({ name: "ShoppingCart" })
    },
    Mine() {
      this.$router.push({ name: "Mine" })
    }
  },
  mounted() {

  },
  created() {

  },
  filters: {},
  computed: {},
  watch: {},
  directives: {}
}
</script>

<style scoped lang="scss">
.van-tabbar{
  height: 100px;
  background-color: #DEDEDE;
}
</style>