<template>
	<navbar></navbar>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import Navbar from '@/components/UI/Navbar.vue';
	export default {
		name: 'App',
		components: {
			Navbar
		}
		
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-size: 20px;
		text-decoration: none;
		list-style: none;
	}
	.app {
		background-color: rgb(255, 255, 255);
		font-family: 'Roboto';
		padding: 30px;
	}
</style>