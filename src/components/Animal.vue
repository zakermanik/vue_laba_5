<template>
    <div class="animal-page">
        <h2>{{ animal.title }}</h2>
        <div class="animal-pic">
            <img :src="require(`@/images/${animal.picture}`)" alt="">
        </div>
        <div class="animal-content">
            <p>{{ animal.content }}</p>
        </div>
        <div class="animal-kind">
            <h3>Виды</h3>
            <ul>
                <li v-for="animal in animal.kinds" :key="animal.title">
                    <router-link :to="'kind/' + animal.title">{{ animal.title }}</router-link>
                </li>
            </ul>
        </div>
        <my-button><router-link to='/'>На главную</router-link></my-button>
    </div>
</template>
  
<script>
import data from "@/data.js";

export default {
    name: "animalsList",
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    computed: {
        animal() {
            return data.find(animal => animal.title === this.id);
        }
    }
};
</script>
<style scoped>
    .animal-page {
        display: block;
    }
    .animal-page * {
        margin-top: 10px;
    }
</style>