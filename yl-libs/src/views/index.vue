<template>
  <yl-layout>
    <template slot="side-header">
      <div class="sys-name">融媒体云前端组件库</div>
    </template>
    <template slot="side-nav">
      <side-nav></side-nav>
    </template>
    <template slot="page-header">
      <div class="page-title" v-text="pageTitle"></div>
    </template>
    <template slot="page-main">
      <router-view :key="$route.fullPath"></router-view>
    </template>
  </yl-layout>
</template>
<script>
import sideNav from "../components/sideNav";
import { GetMenu } from "../assets/data/config.js";
export default {
  data() {
    return {};
  },
  computed: {
    pageTitle() {
      return GetMenu({ path: this.$route.name }).name;
    }
  },
  components: {
    sideNav
  }
};
</script>
<style lang="scss">
.sys-name {
  color: #409eff;
}
.yl-nav-title {
  background-color: #545c64;
}
.page-title {
  padding-left: 24px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}
.yl-nav-content {
  background-color: #545c64;
  .el-menu {
    border-right: none;
  }
}
.yl-layout__page-bread-crumb {
  background-color: #545c64 !important;
}
</style>
