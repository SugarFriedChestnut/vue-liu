<template>
  <div class="Product_desciption">
    <div class="go_back_ing" @click="goBack">
      <div class="go_back">
        <img src="../assets/tui.svg" alt="" />
      </div>
    </div>
    <div class="goods Comment_details Shop">
      <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item @click="isShow">
          <img :src="productDetails.image" />
        </van-swipe-item>
        <van-swipe-item @click="isShow">
          <img :src="productDetails.image_path" />
        </van-swipe-item>
      </van-swipe>
      <van-image-preview
        v-model="show"
        :images="[productDetails.image, productDetails.image_path]"
      >
      </van-image-preview>
      <van-cell-group>
        <van-cell>
          <div class="goods-title">{{ productDetails.name }}</div>
          <div class="goods-price">
            {{ formatPrice(productDetails.present_price) }}
          </div>
        </van-cell>
        <van-cell class="goods-express goods-center">
          <van-col span="8" class="goods-size"
            >运费：{{ productDetails.__v }}</van-col
          >
          <van-col span="8" class="goods-size"
            >剩余：{{ productDetails.amount }}</van-col
          >
          <van-col span="8">
            <div class="goods-box">
              <span
                class="btn"
                :class="{ isActive: isChange === index }"
                @click="clickBtn(index)"
                >点击收藏</span
              >
            </div>
          </van-col>
        </van-cell>
      </van-cell-group>
      <van-cell-group class="goods-cell-group">
        <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
          <template slot="title">
            <span class="van-cell-text">有赞的店</span>
            <van-tag class="goods-tag" type="danger">官方</van-tag>
          </template>
        </van-cell>
        <!--        <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />-->
      </van-cell-group>

      <!--      <van-cell-group class="goods-cell-group">-->
      <!--        <van-cell title="查看商品详情" is-link @click="sorry" />-->
      <!--      </van-cell-group>-->
      <div>
        <van-tabs v-model="active">
          <van-tab title="商品详情">
            <div style="margin-top: 10px" v-html="productDetails.detail"></div>
          </van-tab>
          <van-tab title="商品评论">
            <div style="font-size: 14px">该商品暂时还没有评论哟！</div>
          </van-tab>
        </van-tabs>
      </div>
      <van-goods-action>
        <van-goods-action-mini-btn icon="chat-o" @click="sorry">
          客服
        </van-goods-action-mini-btn>
        <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">
          购物车
        </van-goods-action-mini-btn>
        <van-goods-action-big-btn @click="sorry">
          加入购物车
        </van-goods-action-big-btn>
        <van-goods-action-big-btn primary @click="sorry">
          立即购买
        </van-goods-action-big-btn>
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from "vant";
export default {
  name: "productDetails",
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },
  props: {},
  data() {
    return {
      el: ".btnBox",
      isChange: -1,
      index: "",
      isSelected: false,
      show: false,
      active: 0,
      id: "", //数据请求的ID
      comment: [], //评论数
      productDetails: [] //当前的商品数据
    };
  },
  methods: {
    clickBtn(index) {
      //发送收藏请求
      if (localStorage.getItem("key") && this.$store.state.user) {
        if (index !== this.isChange) {
          this.isChange = index;
          let goods = this.productDetails;
          axios.post("api/v1/collection", goods).then(response => {
            if (response.code === 200) {
              Toast("收藏成功");
            }
          });
        } else {
          this.isChange = -1;
          //取消收藏
          axios
            .post("api/v1/cancelCollection", {
              id: this.productDetails.id
            })
            .then(response => {
              if (response.code === 200) {
                Toast("已取消");
              }
            });
        }
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
    },
    formatPrice() {
      return "¥" + this.productDetails.present_price;
    },
    onClickCart() {
      //去购物车
      this.$router.push("ShoppingCart");
    },
    sorry() {
      //加入购物车
      this.$axios
        .req(`/api/v1/addShop`, {
          id: this.productDetails.id
        })
        .then(res => {
          if (res.code === 200) {
            Toast("加入购物车成功");
          }
        });
    },
    isShow() {
      this.show = true;
    },
    goBack() {
      // 回退
      this.$router.back(-1);
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.$axios.req(`/api/v1/goods/one?id=${this.id}`).then(res => {
      this.productDetails = res.goods.goodsOne;
      this.comment = res.goods.comment;
      console.log(this.productDetails);
    });
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-box {
    display: flex;
    justify-content: center;
  }
  &-titleA {
    width: 50px;
  }
  &-size {
    line-height: 55px;
    color: #b399a6;
  }
  &-title {
    font-size: 30px;
    margin: 20px 0;
  }
  &-price {
    font-size: 26px;
  }
  &-priceB {
    width: 50px;
    top: 0;
    left: 0;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-center {
    display: flex;
    align-items: center;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #333333;
      line-height: 45px;
      font-size: 28px;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
.van-icon {
  font-size: 40px !important;
  margin-top: 10px !important;
}
.Product_desciption {
  background-color: white;
}
.go_back {
  padding: 10px;
  width: 60px;
  background-color: #7f7f7f;
  border-radius: 50%;
}
.go_back_ing {
  z-index: 999;
  position: absolute;
  top: 30px;
  left: 30px;
}
.van-goods-action {
  z-index: 999 !important;
}
.btn {
  display: block;
  text-align: center;
  width: 120px;
  height: 50px;
  background: #d0d0d0;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
}
.isActive {
  background: #ff4444;
}
</style>
