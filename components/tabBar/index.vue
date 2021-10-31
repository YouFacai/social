<template>
  <view>
    <view class="u-page">
      <!-- 所有内容的容器 -->
    </view>
    <!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
    <u-tabbar
      @change="changePath"
      v-model="current"
      :list="tableList"
      :mid-button="true"
    ></u-tabbar>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tableList: [],
      current:0
    };
  },
  created() {
    let { current, tableList } = this.$store.state.tableBarData;
    this.current = current;
    this.tableList = tableList;
  },
  methods: {
    changePath(e) {
      switch (e) {
        case 0:
          uni.redirectTo({
            url: "/pages/index/index",
          });
          this.$store.commit("tableBarData/setFoce", 0);
          break;
        case 1:
          uni.redirectTo({
            url: "/pages/square/square",
          });
          this.$store.commit("tableBarData/setFoce", 1);
          break;
        case 3:
          uni.redirectTo({
            url: "/pages/chat/chat",
          });
          this.$store.commit("tableBarData/setFoce", 3);
          break;
        case 4:
          uni.redirectTo({
            url: "/pages/my/my",
          });
          this.$store.commit("tableBarData/setFoce", 4);
          break;
      }
    },
  },
};
</script>
