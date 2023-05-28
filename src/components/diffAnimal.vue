<template>
    <div class="model-page">
        <h2>{{ kind.title }}</h2>
        <div class="model-pic">
            <img :src="require(`@/images/${kind.photo}`)" alt="">
            <p>{{ kind.info }}</p>
        </div>
    </div>
</template>
  
<script>
import data from "@/data.js";

export default {
    name: "diffAnimal",
    props: {
        name: {
            type: String,
            required: true
        },
        kindname: {
            type: String,
            required: true,
        }
    },
    computed: {
        animal() {
            return data.pages.find(page => page.name === this.name);;
        },
        kind() {
            return this.animal.kinds.find(kind => kind.name==this.kindname)
        },
    }
};
</script>
<style scoped>
    img {
        width: 300px;
    }
    
</style>