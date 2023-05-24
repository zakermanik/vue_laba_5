<template>
	<div>
		<h1>Сортировка 
			<span v-show="selectedSort == 'price'">по цене</span>
			<span v-show="selectedSort == 'rating'">по рейтингу</span>
			<span v-show="selectedSort == 'vegan'">для вегетарианцев</span>
		</h1>
		<div class="sorts">
			<my-button
				@click="selectedSort = 'price'"
			>По цене</my-button>
			<my-button
				@click="selectedSort = 'rating'"
			>По рейтингу</my-button>
			<my-button
				@click="selectedSort = 'vegan'" 
			>Для вегетарианцев</my-button>
		</div>
		<my-input
			v-model="searchQuery"
			placeholder="Поиск..."
		></my-input>
		<my-dialog v-model:show="dialogVisible">
			<post-form
			@create="createPost"/>
		</my-dialog>
		<h1 style="font-weight: bold; font-size: 30px; margin-top: 20px;">Пицца</h1>
		<my-button
			@click="showDialog"
			>
			Добавить пиццу
		</my-button>
		<post-list 
			:pizzas="sortedAndSearchedPosts"
			@Rev="addReview"
		/>
	</div>
</template>

<script>
	import PostForm from "@/components/PostForm";
	import PostList from "@/components/PostList"; 
	export default {
		components: {
			PostForm, PostList
		},
		data() {
			return {
				pizzas: [
					{id: 1, src: require('@/images/pepa.webp'), price: '419', rating: '5,0', review: '', vegan: false, title: 'Пепперони', body: 'Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус' },
					{id: 2, src: require('@/images/diablo.webp'), price: '519', rating: '4,7', review: '', vegan: false, title: 'Диабло', body: 'Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, фирменный томатный соус' },
					{id: 3, src: require('@/images/bbq.webp'), price: '419', rating: '4,8', review: '', vegan: false, title: 'Колбаски барбекю', body: 'Острая чоризо, соус барбекю, томаты, красный лук, моцарелла, фирменный томатный соус' },
					{id: 4, src: require('@/images/chief.webp'), price: '639', rating: '4,8', review: '', vegan: false, title: 'Пицца от шефа', body: 'Пастрами из мраморной говядины, сладкий перец, томаты, красный лук, чеснок, соус ткемали, моцарелла, фирменный томатный соус' },
					{id: 5, src: require('@/images/havai.webp'), price: '419', rating: '4,4', review: '', vegan: true, title: 'Гавайская с альфредо', body: 'Фирменный соус альфредо, цыпленок, моцарелла, ананасы' },
					{id: 6, src: require('@/images/chorizo.webp'), price: '289', rating: '4,5', review: '', vegan: false, title: 'Чоризо фреш', body: 'Фирменный томатный соус, моцарелла, острая чоризо, сладкий перец' },
					{id: 7, src: require('@/images/4cheese.webp'), price: '469', rating: '4,3', review: '', vegan: true, title: 'Четыре сыра', body: 'Сыр блю чиз, смесь сыров чеддер и пармезан, моцарелла, фирменный соус альфредо' },
					{id: 8, src: require('@/images/margo.webp'), price: '369', rating: '4,4', review: '', vegan: true, title: 'Маргарита', body: 'Увеличенная порция моцареллы, томаты, итальянские травы, фирменный томатный соус' },
					{id: 9, src: require('@/images/veget.webp'), price: '419', rating: '4,6', review: '', vegan: true, title: 'Овощи и грибы', body: 'Увеличенная порция моцареллы, томаты, итальянские травы, фирменный томатный соус' },
				],
				dialogVisible: false,
				selectedSort: '',
				searchQuery: '',
			}
		},
		methods: {
			createPost(pizza) {
				this.pizzas.push(pizza);
				this.dialogVisible = false;
			},
			removePost(pizza) {
				this.pizzas = this.pizzas.filter(p => p.id !== pizza.id);
			},
			addReview(Rev, id) {
            	const pizza = this.pizzas.find((p) => p.id === id);
            	if (pizza) {
					console.log(Rev);
            		pizza.review = Rev;
				}
			},
			showDialog() {
				this.dialogVisible = true;
			}
		},
		computed : {
			sortedPosts() {
				if (this.selectedSort != 'vegan') {
					return [...this.pizzas].sort((post1, post2) => {
						return post2[this.selectedSort]?.localeCompare(post1[this.selectedSort])
					})
				} else {
					return [...this.pizzas].filter(post => post.vegan == true);
				}
			},
			sortedAndSearchedPosts() {
				return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
			}
		},
  	}
</script>

<style>
	
	.app > h1 > span {
		color: rgb(255, 105, 0);
	}
	.sorts {
		margin: 10px 0;
	}
	.sorts > * {
		margin-right: 10px;
	}
</style>