<template>
  <el-menu
    :default-active="menuDefault"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="selectMenu"
  >
    <template v-for="item in menu">
      <el-submenu v-if="item.subMenu&&item.subMenu.length !== 0" :index="item.id" :key="item.id">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span v-text="item.name"></span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="sub in item.subMenu" :index="sub.id" :key="sub.id" v-text="sub.name"></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item v-else :key="item.id" :index="item.id">
        <i class="el-icon-menu"></i>
        <span slot="title" v-text="item.name"></span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import { config, GetMenu } from "../assets/data/config.js";
export default {
  name: "SideNav",
  data() {
    return {
      menu: config.menu
    };
  },
  computed: {
    menuDefault() {
      return GetMenu({ path: this.$route.name }).id;
    }
  },
  mounted() {},
  methods: {
    selectMenu(id) {
      console.log(GetMenu({ id: id }).route);
      this.$router.push({ path: GetMenu({ id: id }).route });
    }
  }
};
</script>
