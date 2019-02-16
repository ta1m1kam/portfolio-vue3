<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="16">
        <h1 class="title">{{ title }}</h1>
        <img :src="myProfileImage">
        <h2>Taiga Mikami</h2>
        <h3>Chiba University</h3>
        <h3>創成工学部 修士1年</h3>
        <h2>AROUND THE WEB</h2>
        <ul class="accountWrapper">
          <li v-for="item in accounts" :key="item.id">
            <a :href="item.url" target="_blank" :class="item.stackClass">
              <div v-for="iconClass in item.iconClasses" v-bind:key="iconClass.id">
                <i :class="iconClass"></i>
              </div>
            </a>
          </li>
        </ul>
      </el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Home',
    computed: mapGetters({
      title: 'getTitle',
      myProfileImage: 'getMyProfileImage',
      accounts: 'getAccounts'
    }),
  }
</script>

<style>

  .accountWrapper {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  .accountWrapper > li + li {
    margin-left: 16px;
  }
</style>
