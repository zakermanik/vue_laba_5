<template>
    <div class="pizza" 
        @click="$router.push(`/pizzas/${pizza.title}`)">
        <div>
            <img :src="pizza.src" alt="">
        </div>
        <div class="pizza__info">
            <div class="pizza__title"><b>{{ pizza.title }}<span v-show="pizza.vegan">🍀</span></b><span>★{{ pizza.rating }}</span></div>
		    <div class="pizza__body">{{ pizza.body }}</div>
        </div>
        <div class="pizza__footer" >
            <b>{{ pizza.price }} ₽</b>
            <my-button
                class="btn"
                @click="addReview"
            >
            Оставить отзыв
            </my-button>
        </div>
        <my-input
            placeholder="Как вам пицца?"
            v-model="newReview"
        ></my-input>
        <div class="pizza__review">{{ pizza.review }}</div>
	</div>
</template>

<script>
    export default {
        props: {
            pizza: {
                type: Object,
                required: true,
            }
        },
        data() {
            return {
                newReview: '',
            }
        },
        methods: {
            addReview() {
                this.$emit("newReview", this.newReview, this.pizza.id);
                this.newReview = '';

            }
        }
    }
</script>

<style scoped>
    .pizza {
        background-color: rgba(255, 255, 255, .9);
        width: 350px;
        height: 700px;
		padding: 30px;
		border: 2px solid rgb(255, 105, 0);
		border-radius: 10px;
        box-shadow: 0 0 15px 0 rgba(0, 0, 0, .1);
		margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
	}
    .pizza > div {
        margin-bottom: 10px;
    }
    .pizza__info {
        min-height: 120px;
    }
    img {
        width: 280px;
    }
    .pizza__title {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    .pizza__body {
        font-size: 16px;
        font-weight: 300;
    }
    .pizza__footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    .pizza__review {
        width: 100%;
        height: 100px;
        margin-top: 10px;
        font-size: 14px;
        word-wrap: break-word;
        overflow: hidden;
    }
</style>