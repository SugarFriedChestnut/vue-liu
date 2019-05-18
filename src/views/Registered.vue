<template>
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
                label-width="70"
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
                label-width="70"
                label-align="center"
                type="password"
                placeholder="PASSWORD"
              />
            </div>
            <div class="box">
              <van-field
                label-width="70"
                label="手机号："
                placeholder="请输入手机号"
              />
            </div>
            <div class="box">
              <van-field
                v-model="sms"
                center
                clearable
                label-width="85"
                label="短信验证码："
                placeholder="请输入短信验证码"
              >
                <van-button slot="button" size="small" type="info"
                  >发送验证码</van-button
                >
              </van-field>
            </div>
            <div class="box">
              <div>
                <van-field
                  name="user-o"
                  v-model="phone"
                  label="验证码"
                  label-width="70"
                  placeholder="请输入验证码"
                />
                <div class="verification">
                  <div @click="verification" v-html="verificationA"></div>
                </div>
              </div>
            </div>
            <div class="log_bottom">
              <van-button type="primary" @click="registeredA">注册</van-button>
            </div>
            <div class="registered" @click="logIng">已又账号登陆</div>
          </van-cell-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registered",
  components: {},
  props: {},
  data() {
    return {
      password: "",
      username: "",
      phone: "",
      sms: "",
      verificationA: {} //验证码
    };
  },
  methods: {
    logIng() {
      this.$router.push({ name: "logInRegister" });
    },
    verification() {
      this.$axios.req(`/api/v1//verify`).then(res => {
        this.verificationA = res;
      });
    },
    registeredA() {
      this.$axios
        .req(`/api/v1//register`, {
          nickname: this.password,
          password: this.username,
          verify: this.phone
          // sms: this.sms
        })
        .then(res => {
          if (res.code === 200) {
            console.log(res);
          } else {
            this.$toast.fail(res.msg);
          }
        });
    }
  },
  mounted() {
    this.verification();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.van-button--normal {
  padding: 0 200px !important;
  border-radius: 50px !important;
  font-size: 30px !important;
}
.verification {
  position: relative;
  bottom: 110px;
  left: 520px;
  width: 200px;
}
[class*="van-hairline"]::after {
  border-color: transparent !important;
}
.van-cell:not(:last-child)::after {
  border-color: transparent !important;
}
.van-cell {
  background-color: transparent !important;
}
.van-cell-group {
  background-color: transparent !important;
}
.log_inBox {
  width: 100%;
  /*min-height: 100vh;*/
  position: absolute;
  z-index: 999;
  top: 10%;
}
.log_Register {
  width: 100%;
  border-radius: 10px;
}
.Login_box {
  padding-top: 40px;
}
.box {
  margin: 25px 0;
}
.log_bottom {
  padding-top: 100px;
  text-align: center;
}
.registered {
  padding-top: 20px;
  text-align: center;
  font-size: 30px;
  color: #8698b2;
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
    color: #007fd5;
  }
  50% {
    background: #000;
    color: #a3d9ff;
  }
  100% {
    background: #007fd5;
    color: #007fd5;
  }
}
@-moz-keyframes sky_background {
  0% {
    background: #007fd5;
    color: #007fd5;
  }
  50% {
    background: #000;
    color: #a3d9ff;
  }
  100% {
    background: #007fd5;
    color: #007fd5;
  }
}
@keyframes sky_background {
  0% {
    background: #007fd5;
    color: #007fd5;
  }
  50% {
    background: #000;
    color: #a3d9ff;
  }
  100% {
    background: #007fd5;
    color: #007fd5;
  }
}

@-webkit-keyframes cloud_one {
  0% {
    left: 0;
  }
  100% {
    left: -200%;
  }
}
@-moz-keyframes cloud_one {
  0% {
    left: 0;
  }
  100% {
    left: -200%;
  }
}
@keyframes cloud_one {
  0% {
    left: 0;
  }
  100% {
    left: -200%;
  }
}

@-webkit-keyframes cloud_two {
  0% {
    left: 0;
  }
  100% {
    left: -200%;
  }
}
@-moz-keyframes cloud_two {
  0% {
    left: 0;
  }
  100% {
    left: -200%;
  }
}
@keyframes cloud_two {
  0% {
    left: 0;
  }
  100% {
    left: -200%;
  }
}

@-webkit-keyframes cloud_three {
  0% {
    left: 0;
  }
  100% {
    left: -200%;
  }
}
@-moz-keyframes cloud_three {
  0% {
    left: 0;
  }
  100% {
    left: -200%;
  }
}
@keyframes cloud_three {
  0% {
    left: 0;
  }
  100% {
    left: -200%;
  }
}
</style>
