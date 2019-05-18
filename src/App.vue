<template>
  <div id="app">
    <van-row style="background-color: #F2F2F2;">
      <van-col span="24" class="van-bottom_img">
       <bottom-navigation v-if="this.$route.meta.hide"></bottom-navigation>
      </van-col>
      <van-col span="24">
          <router-view />
      </van-col>
    </van-row>
  </div>
</template>
<script>
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
export default {
  name: "app",
  components: {
    BottomNavigation
  },
  mounted() {
    this.$store.dispatch("getData")
  }

};
</script>

<style lang="scss">
@import "./style/common";
</style>
