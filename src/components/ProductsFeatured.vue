<template>
  <div>
    <div class="commodity">
      <h4>商品推荐</h4>
    </div>
    <div class="commodity_recommend">
      <div
        v-if="index < 6"
        v-for="(item, index) in articles.recommend"
        :key="item.goodsId"
        class="commodity_box"
      >
        <img v-lazy="item.image" class="commodity_img" />
        <div style="padding: 5px">
          <p class="product_name">{{ item.goodsName }}</p>
          <div class="price">
            <span>￥{{ item.price }}</span>
            <span>￥{{ item.mallPrice }}</span>
            <div class="Details_box">
              <div class="Details" @click="Join(item)">
                <img class="gou" src="../assets/gouwu.svg" alt="" />
              </div>
              <div class="DetailsA" @click="ViewProduct(item)">
                <span>查看详情</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsFeatured",
  components: {},
  props: {},
  data() {
    return {
      box: []
    };
  },
  methods: {
    ViewProduct(item) {
      this.$router.push({
        name: "productDetails",
        query: { id: item.goodsId }
      });
    },
    Join(item) {
      this.box = localStorage.getItem("key");
      if (localStorage.getItem("key") && this.$store.state.user) {
        this.$axios
          .req(`/api/v1/addShop`, {
            id: item.goodsId
          })
          .then(res => {
            if (res.code === 200) {
              this.$toast("加入成功");
            }
          });
      } else {
        this.$dialog
          .confirm({
            message: "请先登录"
          })
          .then(() => {
            this.$router.replace({ name: "logInRegister" });
          })
          .catch(() => {
            // on cancel
          });
      }
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {
    articles() {
      return this.$store.state.articles;
    }
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.commodity {
  padding: 20px;
  background-color: white;
  border-bottom: solid 1px #f5f5f5;
}
.commodity h4 {
  font-size: 30px;
}
.commodity_img {
  width: 250px;
  padding: 20px;
}
.commodity_recommend {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  justify-content: space-between;
}
.product_name {
  width: 260px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.commodity_box {
  width: 33.33%;
  border-right: solid 1px #f5f5f5;
  border-top: solid 1px #f5f5f5;
}
.price {
  padding: 10px;
}
.price span:nth-child(1) {
  font-size: 30px;
}
.price span:nth-child(2) {
  margin-left: 10px;
  font-size: 20px;
  color: #838383;
  text-decoration: line-through;
}
.gou {
  width: 40px;
}
.Details {
  width: 30%;
  background-color: #fbcb3b;
  justify-content: center;
  display: flex;
  align-items: center;
}
.DetailsA {
  width: 70%;
  background-color: #fb4b34;
  text-align: center;
}
.DetailsA span {
  font-size: 24px !important;
  color: #ffebe0;
  line-height: 60px;
}
.Details_box {
  margin-top: 20px;
  border: 1px solid #fff3ed;
  display: flex;
  border-radius: 13px;
  overflow: hidden;
}
</style>
