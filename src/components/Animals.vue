<template>
    <div class="home-page">
        <ul>
            <li v-for="animal in animals" :key="animal.id">
                <router-link :to="'/animals/' + animal.title">{{ animal.title }}</router-link>
            </li>
        </ul>
    </div>
</template>
  
<script>
import data from '@/data.js'

export default {
    name: "Animals",
    data() {
        return {
            animals: data
        };
    }
};
</script>