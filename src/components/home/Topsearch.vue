<template>
  <div>
    <div class="search_for">
      <van-row>
        <van-col span="4">
          <div class="city">
            <span>重庆</span>
          </div>
        </van-col>
        <van-col span="20">
          <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            background="#f2f2f2"
            @focus="onFocus"
          >
            <div slot="action" v-if="isShow === false">搜索</div>
            <div slot="action" v-else @click="on">取消</div>
          </van-search>
        </van-col>
      </van-row>
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
      value: "",
      isShow: false,
      timing: "", //清楚搜索的延时器
      // searchFor: {} //搜索 参数： value：搜索关键词
    };
  },
  methods: {
    onFocus() {
      this.isShow = true;
      this.$emit("show", this.isShow);
    },
    on() {
      this.isShow = false;
      this.$emit("show", this.isShow);
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {
    value(val) {
      clearInterval(this.timing)
      this.timing = setTimeout(() =>{
        this.$axios
          .req(`/api/v1//search`, {
            value: val
          })
          .then(res => {
            // this.searchFor = res.data
            this.$emit("searchFor", res.data)
          });
      }, 500);
    }
  },
  directives: {}
};
</script>

<style scoped lang="scss">
.search_for {
  padding: 10px;
  background-color: #f2f2f2;
}
.city {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.van-search__content--round {
  border-radius: 0 !important;
}

.van-field__control {
  padding: 6px !important;
}
.van-cell {
  padding: 0 !important;
}
.van-search{
  padding: 0 !important;
}

</style>
