<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/about">About</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <el-dropdown>
      <span class="el-dropdown-link">
        <router-link to="/works">Works</router-link><i class="el-icon-arrow-down"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><router-link to="/works">Works</router-link></el-dropdown-item>
          <el-dropdown-item><router-link to="/award_skill">Skill & Award</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/contact">Contact</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'Head'
  }
</script>
