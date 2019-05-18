<template>
  <div>
    <div>
      <div class="member">
        <h1>会员中心</h1>
      </div>
      <div class="Setting">
        <img src="../assets/shezhi.svg" alt="">
      </div>
      <div class="member_Avatar">
        <div class="login_information">
          <div class="Avatar">
            <img :src="user.avatar" alt="">
          </div>
          <div class="Click_to_Login" @click="logIn" v-if="status === true">请登录</div>
          <div v-if="status === false">
            <div class="welcome">欢迎您：{{ user.nickname }}</div>
            <div class="drop_out" @click="dropOut">退出登录</div>
          </div>
        </div>
      </div>
<!--      <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">-->
      <van-row class="user-links">
        <van-col span="4">
          <van-icon name="pending-payment" />
          <span class="information">待付款</span>
        </van-col>
        <van-col span="4">
          <van-icon name="tosend" />
          <span class="information">待发货</span>
        </van-col>
        <van-col span="4">
          <van-icon name="logistics" />
          <span class="information">待收货</span>
        </van-col>
        <van-col span="4">
          <van-icon name="records" />
          <span class="information">评价</span>
        </van-col>
        <van-col span="4">
          <van-icon name="points" />
          <span class="information">已完成</span>
        </van-col>
      </van-row>
      <van-cell-group class="user-group">
        <van-cell icon="records" title="全部订单" is-link />
      </van-cell-group>
      <van-cell-group>
        <van-cell icon="star-o" title="收藏商品" is-link />
        <van-cell icon="location-o" title="地址管理" is-link />
        <van-cell icon="search" title="最近预览" is-link />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';

export default {
  name: "Mine",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  props: {},
  data() {
    return {
      status: false
    }
  },
  methods: {
    logIn() { //去注册
      this.$router.replace({ name: "logInRegister" })
    },
    dropOut() { // 清空储存的个人信息
      localStorage.removeItem("key");
      this.$store.state.user = ""
      this.status = true
    }
  },
  mounted() {

  },
  created() {

  },
  filters: {},
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  watch: {},
  directives: {}
}
</script>

<style scoped lang="scss">
.van-cell__left-icon, .van-cell__right-icon{
 font-size: 40px !important;
}
.information{
  display: block;
  font-size: 28px;
  padding-top: 10px;
}
.user-links[data-v-4e42760d] {
  display: flex;
  justify-content: space-between;
}
.user-links .van-icon[data-v-4e42760d] {
  font-size: 60px !important;
}
.user-links[data-v-4e42760d]{
  padding: 30px 0;
}
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.member{
  display: flex;
  justify-content: center;
  align-items: center;
  h1{
    font-size: 28px;
    padding: 25px 0;
  }
}
.Setting{
  width: 50px;
  position: absolute;
  z-index: 999;
  top: 100px;
  right: 30px;
}
.member_Avatar{
  width: 100%;
  background-color: #E30C7B;
  display: flex;
  justify-content: center;
  padding: 80px 0;
}
.Avatar{
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 50%;
  margin: 0 auto;
  overflow: hidden;
}
.welcome{
  padding: 30px 0;
  font-size: 35px;
  font-weight: 900;
  color: #FFFFFF;
}
.drop_out{
  font-size: 28px;
  color: white;
}
.login_information{
  text-align: center;
}
.Click_to_Login{
  font-size: 28px;
  color: white;
  padding-top: 40px;
}
</style>