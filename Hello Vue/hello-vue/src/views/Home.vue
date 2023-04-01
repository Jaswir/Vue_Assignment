

<template>

    <div v-for = "meal in meals" :key="meal.idMeal" >
        {{meal.strMeal}}

    </div>

    <!-- <div v-for= "item in data" :key="item.id">
        {{ item.Price}}
    </div> -->

</template>

<script>

import {ref, computed, onMounted } from 'vue'





// import store from '../store'
// import axiosClient from  "../axiosClient.js"

// const meals = ref([]);

// onMounted(async () => {

//     const response = await axiosClient.get('/search.php?f=a') 
//     meals.value = response.data

// })

</script>
