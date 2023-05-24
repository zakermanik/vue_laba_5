<template>
    <div class="main">
        <h1>Добро пожаловать!</h1>
        <router-link to="/pizzas">Пиццы</router-link> 
        <router-link to="/contacts">Контакты</router-link>
        <router-link to="/animals">Животные</router-link> 
    </div>
</template>

<script>

</script>

<style scoped>
    .main {
        display: flex;
        justify-content: space-around;
    }
</style>