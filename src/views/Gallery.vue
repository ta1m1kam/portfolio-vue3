<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="2"><div class="grid-content"></div></el-col>
      <el-col :span="20">
        <h1>Gallery</h1>
        <div v-for="gallery in galleries" :key="gallery.id" class="gallery">
          <img :src="gallery.img" class="gallery-img">
          <h3>{{ gallery.title }}</h3>
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Gallery',
    computed: mapGetters({
      galleries: 'getGalleries'
    })
  }
</script>

<style scoped>
  .gallery-img {
    width: 90%;
  }

  .gallery img {
    border: solid 10px #F5BB7D;
    box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.3);
  }
</style>
