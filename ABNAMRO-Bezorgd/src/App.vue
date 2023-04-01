<template>



<SearchMeal/>


<p>Random Meals:</p>
<RandomMeal/>
<RandomMeal/>

</template>


<script>
/* eslint-disable */ 
import RandomMeal from "./components/RandomMeal.vue"
import SearchMeal from "./components/SearchMeal.vue"

export default{

name: "App",
components:{
SearchMeal,
RandomMeal,

}
}



</script>

<!-- 
<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}
</style> -->
