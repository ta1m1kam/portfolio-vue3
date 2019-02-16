<template>
  <div id="app">
    <Head></Head>
    <router-view/>
  </div>
</template>

<script>
  import '@fortawesome/fontawesome-free/js/fontawesome'
  import '@fortawesome/fontawesome-free/js/solid'
  import '@fortawesome/fontawesome-free/js/regular'
  import '@fortawesome/fontawesome-free/js/brands'
  import Head from '@/components/partials/Head'

  export default {
    name: 'App',
    components: {
      Head
    }
  }
</script>

<style>
  .el-row {
    text-align: center;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  ul {
    list-style: none;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  .fadeInUp {
    animation-name: fadeInUp;
    animation-delay: 0.5s;
    animation-duration: 1s;
    animation-fill-mode: both;
  }
</style>
