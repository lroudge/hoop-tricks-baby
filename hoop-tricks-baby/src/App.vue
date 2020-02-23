<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TricksGenerator msg="Welcome to Hoop Tricks Baby!"/>
  </div>
</template>

<script>
import TricksGenerator from './components/TricksGenerator.vue'

export default {
  name: 'App',
  components: {
    TricksGenerator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  height: 100%;
}
</style>
