<template>

  Welcome home
  <!-- <div id="app">

    <div v-for="meal in meals" :key="meal.id">
      {{ meal }}

    </div>

  </div> -->
</template>

<script>

import axios from 'axios';

export default {
  name: 'App',
  // data() {
  //   return {
  //     meals: []
  //   };
  // },

  // async created() {
  //   try {
  //     const res = await axios.get("http://localhost:3000/meals");
  //     this.meals = res.data;

  //   } catch (e) {
  //     console.error(e);
  //   }
  // }
};




</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
