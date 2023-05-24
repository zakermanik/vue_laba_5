<template>
    <div class="navbar">
        <h1 @click="$router.push('/')">Динис Пицца</h1>
        <div class="navbar__btns">
            <my-button @click="$router.push('/animals')">Животные</my-button>
            <my-button style="margin-left: 5px;" @click="$router.push('/pizzas')">Пиццы</my-button>
            <my-button style="margin-left: 5px;" @click="$router.push('/contacts')">Контакты</my-button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .navbar {
        height: 50px;
        background-color: rgb(255, 255, 255);
        border: 2px solid rgb(255, 105, 0);
        /* box-shadow: 0 0 10px 0 rgb(255, 105, 0, .5); */
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }
</style>