<template>
    <div class="pizzas" v-if="pizzas.length > 0">
        <transition-group name="pizzas-list">
            <post-item
            v-for="pizza in pizzas"
            :pizza="pizza"
            :key="pizza.id"
            @newReview="newReview"
        />
        </transition-group>
    </div>
    <h2 v-else style="color:red;">
        Пицц нет(
    </h2>
</template>

<script>
import PostItem from "@/components/PostItem"
    export default {
        components: {
            PostItem,
        },
        props: {
            pizzas: {
                type: Array,
                required: true, 
            }
        },
        methods: {
            newReview(Rev, id) {
                this.$emit("Rev", Rev, id)
            }
        }
    }
</script>

<style scoped>
    .pizzas {
        /* display: grid;
        grid-template-columns: auto auto auto auto auto;
        justify-content: space-between; */
        display: flex;
        flex-wrap: wrap;
        gap: 30px;

    }
    .pizzas-list-move {
        transition: transform .5s;
    }
</style>