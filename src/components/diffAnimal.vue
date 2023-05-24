<template>
    <div class="model-page">
        <h2>{{ kind.title }}</h2>
        <div class="model-pic">
            <img :src="require(`@/images/${kind.photo}`)" alt="">
        </div>
        <div class="model-content">
            <p>{{ kind.info }}</p>
        </div>
        <my-button><router-link :to="'/animals/' + animal.title">Вернуться на страницу {{ animal.title }}</router-link></my-button>
    </div>
</template>
  
<script>
import data from "@/data.js";

export default {
    name: "diffAnimal",
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    computed: {
        kind() {
            let result;
            data.forEach(animal => {
                animal.kinds.forEach(kind => {
                    if (kind.title === this.id) {
                        result = kind;
                    }
                });
            });
            return result;
        },
        animal() {
            let result;
            data.forEach(animal => {
                animal.kinds.forEach(kind => {
                    if (kind.title === this.id) {
                        result = animal;
                    }
                });
            });
            return result;
        }
    }
};
</script>