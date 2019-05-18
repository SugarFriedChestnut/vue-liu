<template>
  <div class="classification tropical">
    <div v-if="articles">
      <div class="head">
        <div class="Categories_top">
          <h1>商品分类</h1>
        </div>
      </div>
      <div class="Commodity">
        <div class="Commodity_left" v-if="articles">
          <div class="Categories">
            <div
              class="Categories_left"
              @click="Categories_(index)"
              v-for="(item, index) in articles.category"
              :key="index"
            >
              <span class="category">{{ item.mallCategoryName }}</span>
            </div>
          </div>
        </div>
        <div class="Commodity_right" v-if="navigation">
          <van-tabs v-model="active" swipeable @click="clickItem">
            <van-tab
              v-for="(item, index) in navigation.bxMallSubDto"
              :key="index"
              :title="item.mallSubName"
            >
              <div>
                <div
                  @click="product_details(item)"
                  class="fruit_image"
                  v-for="(item, index) in dataList"
                  :key="index"
                >
                  <div class="fruit_left">
                    <img :src="item.image" />
                  </div>
                  <div class="fruit_ring">
                    <div class="Fruit_price">
                      <span>{{ item.name }}</span>
                      <div class="price_ing">
                        <span>￥{{ item.present_price }}</span>
                        <span>{{ item.orl_price }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Classification",
  components: {},
  props: {},
  data() {
    return {
      active: 0, //默认显示第几条数据
      navigation: {}, //导航栏
      Fruit: [], //左内容
      id: "", //根据数据ID请求数据
      indexA: 0, //首页传过来的下标
      dataList: [], //右内容
      idA: "" //内容详情的ID
    };
  },
  methods: {
    Categories_(index) { // 点击请求左边内容
      this.navigation = this.articles.category[index];
      this.$axios
        .req(`/api/v1//classification?mallSubId=${this.id}`)
        .then(res => {
          this.Fruit = res.dataList;
        });
      this.clickItem(index)
    },
    clickItem(index) { //点击请求右边内容
      this.idA = this.navigation.bxMallSubDto[index].mallSubId
      this.$axios
        .req(`/api/v1//classification?mallSubId=${this.idA}`)
        .then(fruit => {
          console.log(this.dataList);
          this.dataList = fruit.dataList;
        });
    },
    DefaultRequest() { //一进来默认请求的数据
      this.$axios
        .req(`/api/v1//classification?mallSubId=${this.id}`)
        .then(fruit => {
          this.dataList = fruit.dataList;
        });
    },
    product_details(item) { //商品详情
      this.$router.push({ name: "productDetails", query: { id: item.id }
      })
    }
  },
  mounted() {
    //给默认的请求ID
    if (this.$route.params.id === undefined) {
      this.id = "2c9f6c946016ea9b016016f79c8e0000"
    } else {
      this.id = this.$route.params.id;
      this.indexA = this.$route.params.index;
    }
    this.navigation = this.articles.category[this.indexA];
    this.DefaultRequest()
  },
  created() {},
  filters: {},
  computed: {
    articles() {
      return this.$store.state.articles;
    },
    datalist() {
      return this.$store.state.articles.category;
    }
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.classification {
  background-color: #ffffff;
}
.Categories_top {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f6f6f6;
  h1 {
    font-size: 30px;
  }
}
.Categories {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .Categories_left {
    width: 100%;
    border-bottom: 1px solid #efefef;
    text-align: center;
  }
}
.category {
  display: block;
  font-size: 30px;
  color: #666666;
  padding: 25px 0;
}
.fruit_image {
  display: flex;
  padding: 20px;
  .Fruit_price {
    padding: 10px 0 0 30px;
    > span {
      font-size: 30px;
      color: #ff0000;
    }
    .price_ing {
      margin-top: 50px;
      span:nth-child(1) {
        font-weight: 900;
        color: #ff0000;
      }
      span:nth-child(2) {
        margin-left: 20px;
        text-decoration: line-through;
      }
    }
  }
}
.Commodity_left {
  width: 25%;
  padding-top: 80px;
  float: left;
}
.Commodity_right{
  width: 75%;
  padding-top: 80px;
  float: left;
}
.fruit_left {
  width: 30%;
  border: 1px solid #eeeeee;
}
.fruit_ring {
  width: 70%;
}
.van-col--6 {
  background-color: #f1f8ff;
}
.head{
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  background-color: #FFF;
}
.Commodity :after{
  content: "";
  height: 0;
  display: block;
  clear: both;
}
</style>
