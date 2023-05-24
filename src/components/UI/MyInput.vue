<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text"/>
</template>

<script>
    export default {
        name: 'my-input',
        props: {
            modelValue  : [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value);
            }
        }
    }
</script>

<style scoped>
    .input {
		padding: 10px 15px;
		width: 100%;
		border: 2px solid rgb(255, 162, 0);
		border-radius: 10px;
		margin-top: 15px;
        width: 300px;
	}
	.input::placeholder {
		font-size: 16px;
	}
</style>