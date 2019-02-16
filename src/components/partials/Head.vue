<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/about">About</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/works">Works</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/award">Award</router-link>
    </el-menu-item>
    <el-menu-item index="5">
      <router-link to="/contact">Contact</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'Head'
  }
</script>
