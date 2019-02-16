<template>
  <transition name="modal">
    <div class="modal-mask"  @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">

          <h3>{{ modalInfo.title }}</h3>
          <div class="modal-header">
            <img :src="modalInfo.imgSrc" class="modal-image">
          </div>

          <h3>詳細画面</h3>
          <div v-for="subImgSrc in modalInfo.subImgSrcs">
            <img :src="subImgSrc" class="modal-image">
          </div>

          <div class="modal-body">
            <slot name="body">

            </slot>
            <p>{{ modalInfo.text }}</p>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <i class="fas fa-link"></i>
              <a :href="modalInfo.url" target="”_blank”">{{modalInfo.urlTitle}}</a>
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Modal',
    // props: ['modalTitle', 'modalText', 'modalImgSrc'],
    computed: {
      ...mapGetters({
        'modalInfo': 'getModalInfo'
      })
    }
  }
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: flex table;
    overflow-y: scroll;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    margin-top: 30px;
    margin-bottom: 30px;
    vertical-align: middle;
  }

  .modal-container {
    width: 400px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .modal-image {
    width: 400px;
  }

  p {
    font-size: 12px;
  }

  .modal {


  }
</style>
