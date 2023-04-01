<template>
    <div v-for="meal of meals" :key="meal.idMeal">

        <img :src=meal.strMealThumb  class="img-thumbnail">

    </div>
</template>
  
<script setup>

/* eslint-disable */
import axios from 'axios'
import { ref, onMounted } from 'vue'


const meals = ref('')
var api_url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
var api_url2 = 'https://www.themealdb.com/api/json/v1/1/random.php'

///Async , await
onMounted(async () => {
    const response = await axios.get(api_url2)
    meals.value = response.data.meals
})


</script>
  