<template>
    <form @submit.prevent>
		<h4>Создание поста</h4>
		<my-input
			v-focus
			v-model="pizza.title"
			type="text" 
			placeholder="Название"/>
		<my-input 
			v-model="pizza.src"
			type="text" 
			placeholder="Ссылка на картинку"/>
		<my-input 
			v-model="pizza.body" 
			type="text" 
			placeholder="Описание"/>
		<my-input 
			v-model="pizza.rating" 
			type="text" 
			placeholder="Рейтинг"/>
		<my-input 
			v-model="pizza.price" 
			type="text" 
			placeholder="Цена"/>
		<my-button 
            style="align-self: flex-end; margin-top: 10px;"
            @click="createPost">
			Добавить
        </my-button>
	</form>
</template>

<script>
    export default {
        data() {
            return {
                pizza: {
                    title: '',
                    body: '',
                }
            }
        },
        methods: {
            createPost() {
                this.pizza.id = Date.now();
                this.$emit('create', this.pizza)
				this.pizza = {
                    title: '',
				    body: '',
                }
            }
        },
    }
</script>

<style>
	form {
		display: flex;
		flex-direction: column;
	}
</style>