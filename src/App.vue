<template>
  <div id="app">
    <div class="background"></div>
    <NavBar/>
    <div class="full-width">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  #app {
    padding: 200px $unit $unit_xxxl;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0; right: 0;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-image: url('~@/assets/images/geel.jpg');
    z-index: -1;
  }

  nav {
    position: absolute;
    top: 0;
    left: 0; right: 0;
  }

  .page {
    padding: $unit_xxl $unit_xxxl $unit_xxxl;
    background-color: #fffdfe;

    h1 {
      margin-bottom: $unit_xl;
    }

    .back-button {
      margin-bottom: $unit_l;
    }
  }
</style>

<script>
import NavBar from '@/sections/NavBar.vue'

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>