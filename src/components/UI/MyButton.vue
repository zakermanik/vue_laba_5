<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style scoped>
    .btn {
        font-size: 16px;
		padding: 10px 15px;
		background-color: rgb(255, 105, 0);
        color: white;
		border: 0px;
		border-radius: 20px;
        
        transition: all linear .1s;
	}
    .btn:hover {
        background-color: rgb(255, 153, 0);
        color: white;
    }
</style>