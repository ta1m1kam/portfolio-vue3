<template>
  <div class="work-card">
    <el-button @click="showModal(index)">
      <img :src="imgSrc" class="card-img">

      <h3>{{ title }}</h3>
      <p>{{ date }}</p>
      <ul>
        <li v-for="tag in tags" :key="tag" class="tag-logo">
          {{ tag }}
        </li>
      </ul>
    </el-button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'WorkCard',
    props: ['title', 'imgSrc', 'tags', 'date', 'index'],
    methods: {
      ...mapActions({
        showModal: 'showModal',
        hideModal: 'hideModal'
      })
    }
  }
</script>

<style scoped>
  .container {
  }

  .work-card {
    /*width: 350px !important;*/
    /*flex: 1 1 370px;*/
  }

  .card-img {
    width: 100%;
    height: auto;
  }
  button {
    padding: 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 11px;
  }

  .tag-logo {
    margin: 0 5px;
    padding: 0.3em 1em;
    text-decoration: none;
    color: gray;
    border: solid 1px gray;
    border-radius: 3px;
    transition: .4s;
  }

  .tag-logo:hover {
    background: gray;
    color: white;
  }
</style>
