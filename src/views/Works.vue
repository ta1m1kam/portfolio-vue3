<template>
  <div class="container">
    <h1>Works</h1>
    <div class="works-list">
      <div v-for="(work, index) in works" :key="work.id"  class="card-container fadeInUp">
        <WorkCard @click="showModal(index)" :title="work.title" :imgSrc="work.imgSrc" :tags="work.tags" :index="index"></WorkCard>
      </div>
      <WorkModal @close="hideModal" v-if="isShow"></WorkModal>
    </div>
  </div>
</template>

<script>
  import WorkCard from '@/components/partials/WorkCard'
  import WorkModal from '@/components/partials/WorkModal'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Works',
    computed: mapGetters({
      works: 'getWorks',
      isShow: 'getModalShow'
    }),
    methods: {
      ...mapActions({
        showModal: 'showModal',
        hideModal: 'hideModal'
      })
    },
    components: {
      WorkCard,
      WorkModal
    }
  }
</script>

<style>
  .container {
    width: 100%;
    position: relative;
  }

  h1{
    text-align: center;
  }
  .works-list {
    text-align: center;
    align-content: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;


  }

  .card-container {
    width: 350px !important;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 20px;
  }

</style>
