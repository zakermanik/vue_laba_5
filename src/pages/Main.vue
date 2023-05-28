<template>
    <h1>Добро пожаловать!</h1>
    <div class="main">
        <div class="page" v-for="page in pages"
            :key="page.name"    
        >
            <router-link 
                :to="{name:'animal', params:{name:page.name}}"
            >
                <h2>{{ page.title }}</h2>
                <img :src="require(`@/images/${page.picture}`)" alt="">
            </router-link> 
        </div>
    </div>
</template>

<script>
import data from "@/data.js"

export default {
    name: 'main',
    data() {
        return {
            pages:data.pages
        }
    }
}
</script>

<style scoped>
    h1 {
        text-align: center;
        margin-bottom: 30px;
    }
    .main {
        display: flex;
        justify-content: space-around;
        border: 1px solid black;
        border-radius: 20px;
        box-shadow: 0 0 10px 0 rgba(0, 0,0, .5);
    }
    img {
        width: 300px;
    }
</style>