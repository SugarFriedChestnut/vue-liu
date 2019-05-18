<template>
  <div>
    <div class="van-cell_value_box">
      <div class="sky">
        <div class="clouds_one"></div>
        <div class="clouds_two"></div>
        <div class="clouds_three"></div>
      </div>
      <div class="log_inBox">
        <div class="log_Register">
          <div class="Login_box">
            <van-cell-group>
              <div class="box">
                <van-field
                  v-model="username"
                  clearable
                  size="large"
                  label="用户名："
                  label-width="65"
                  label-align="center"
                  placeholder=" USERNAME"
                  @click-right-icon="$toast('question')"
                />
              </div>
              <div class="box">
                <van-field
                  v-model="password"
                  size="large"
                  label="密码："
                  label-width="65"
                  label-align="center"
                  type="password"
                  placeholder="PASSWORD"
                />
              </div>
              <div>
                <van-field
                  v-model="phone"
                  label="验证码"
                  label-width="65"
                  placeholder="请输入验证码"
                />
                <div class="verification" @click="LnAn" v-html="verificationA"></div>
              </div>
              <div class="log_bottom">
                <van-button size="small" type="primary" @click="logIn">登录</van-button>
              </div>
            </van-cell-group>
          </div>
        </div>
        <div  class="registered">
          <div class="forget">忘记密码？</div>
          <div class="forget" @click="registered">马上注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logInRegister",
  components: {},
  props: {},
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      verificationA: {} //验证码
    };
  },
  methods: {
    LnAn() { //验证码
      this.$axios.req(`/api/v1//verify`)
          .then(res => {
        this.verificationA = res
      })
    },
    registered() {
      this.$router.push({ name: "Registered"})
    },
    logIn() {
      this.$axios.req(`/api/v1//login`,{
          nickname: this.username,
          password: this.password,
          verify: this.phone
        }).then(res => {
          if (res.code === 200) {
            this.$store.state.user = res.userInfo //数据存在VUX
            localStorage.setItem("key", res.userInfo) //数据存在本地
            console.log(res.userInfo);
            this.$router.push({ name: "Mine" }) //登录成功去我的主页
          } else {
            this.$toast.fail(res.msg)
          }
        })
    }
  },
  mounted() {
    this.LnAn()
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.forget{
  font-size: 30px;
  color: #8698B2;
}
.registered{
  padding-top: 80px;
  display: flex;
  justify-content: space-around;
}
.van-button--small {
  padding: 0 8px;
  height: 90px !important;
  min-width: 500px !important;
  font-size: 28px !important;
  line-height: 28px !important;
  border-radius: 40px !important;
}
.log_inBox {
  /*background: url("../assets/denlu.jpg") fixed;*/
  width: 100%;
  /*min-height: 100vh;*/
  position: absolute;
  z-index: 999;
  top: 25%;
}
.log_Register {
  width: 100%;
  border-radius: 10px;
}
.Login_box{
  padding-top: 40px;
}
.box{
  margin: 25px 0;
}
.log_bottom{
  text-align: center;
}
.van-cell-group{
  background-color: transparent;
}
.verification{
  position: relative;
  bottom: 110px;
  left: 520px;
  width: 200px;
}
.van-cell{
  background-color: transparent !important;
}
[class*=van-hairline]::after{
  border-color: transparent !important;
}
.van-cell:not(:last-child)::after{
  border-color: transparent !important;
}
.sky {
  background: #007fd5;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  -webkit-animation: sky_background 50s ease-out infinite;
  -moz-animation: sky_background 50s ease-out infinite;
  -o-animation: sky_background 50s ease-out infinite;
  animation: sky_background 50s ease-out infinite;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.sky .clouds_one {
  background: url("../assets/cloud_one.png");
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  -webkit-animation: cloud_one 50s linear infinite;
  -moz-animation: cloud_one 50s linear infinite;
  -o-animation: cloud_one 50s linear infinite;
  animation: cloud_one 50s linear infinite;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.sky .clouds_two {
  background: url("../assets/cloud_two.png");
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  -webkit-animation: cloud_two 75s linear infinite;
  -moz-animation: cloud_two 75s linear infinite;
  -o-animation: cloud_two 75s linear infinite;
  animation: cloud_two 75s linear infinite;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.sky .clouds_three {
  background: url("../assets/cloud_three.png");
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  -webkit-animation: cloud_three 100s linear infinite;
  -moz-animation: cloud_three 100s linear infinite;
  -o-animation: cloud_three 100s linear infinite;
  animation: cloud_three 100s linear infinite;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

@-webkit-keyframes sky_background {
  0% {
    background: #007fd5;
    color: #007fd5
  }
  50% {
    background: #000;
    color: #a3d9ff
  }
  100% {
    background: #007fd5;
    color: #007fd5
  }
}
@-moz-keyframes sky_background {
  0% {
    background: #007fd5;
    color: #007fd5
  }
  50% {
    background: #000;
    color: #a3d9ff
  }
  100% {
    background: #007fd5;
    color: #007fd5
  }
}
@keyframes sky_background {
  0% {
    background: #007fd5;
    color: #007fd5
  }
  50% {
    background: #000;
    color: #a3d9ff
  }
  100% {
    background: #007fd5;
    color: #007fd5
  }
}

@-webkit-keyframes cloud_one {
  0% {
    left: 0
  }
  100% {
    left: -200%
  }
}
@-moz-keyframes cloud_one {
  0% {
    left: 0
  }
  100% {
    left: -200%
  }
}
@keyframes cloud_one {
  0% {
    left: 0
  }
  100% {
    left: -200%
  }
}

@-webkit-keyframes cloud_two {
  0% {
    left: 0
  }
  100% {
    left: -200%
  }
}
@-moz-keyframes cloud_two {
  0% {
    left: 0
  }
  100% {
    left: -200%
  }
}
@keyframes cloud_two {
  0% {
    left: 0
  }
  100% {
    left: -200%
  }
}

@-webkit-keyframes cloud_three {
  0% {
    left: 0
  }
  100% {
    left: -200%
  }
}
@-moz-keyframes cloud_three {
  0% {
    left: 0
  }
  100% {
    left: -200%
  }
}
@keyframes cloud_three {
  0% {
    left: 0
  }
  100% {
    left: -200%
  }
}
</style>
