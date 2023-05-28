<template>
    <div class="animal-page">
        <h2>{{ animal.title }}</h2>
        <div class="animal-content">
            <img :src="require(`@/images/${animal.picture}`)" alt="">
            <span>{{ animal.content }}</span>
        </div>
        <div class="animal-kind">
            <h3>Виды</h3>
            <div class="kinds">
                <div class="kindsPic" 
                    v-for="kind in animal.kinds" 
                    :key="kind.name"
                >
                    <router-link :to="{name:'diffAnimal', params: {kindname:kind.name}}">
                        <img :src="require(`@/images/${kind.photo}`)" alt="">
                    </router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
        <my-button><router-link to='/'>На главную</router-link></my-button>
    </div>
</template>
  
<script>
import data from "@/data.js";

export default {
    name: "animalsList",
    props: {
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        animal() {
            return data.pages.find(animal => animal.name === this.name);
        }
    }
};
</script>
<style scoped>
    .animal-page {
        display: block;
        border: 5px solid orange;
        border-radius: 20px;
        padding: 20px;
    }
    .animal-page * {
        margin-top: 10px;
    }
    .animal-content {
        display: flex;
        align-items: center;
        gap: 30px;
    }
    .kinds {
        margin: 0 auto;
        display: flex;
        gap: 30px;
    }
    img {
        width: 200px;
    }
</style>