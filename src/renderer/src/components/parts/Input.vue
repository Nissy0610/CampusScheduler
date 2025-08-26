<template>
    <input 
        type="text"
        v-model="model"
        class="m-1 p-2 border-solid border-1 border-gray-300 rounded-lg focus:outline-0" 
        :class="width"
        :placeholder="pl"
    />
</template>

<script setup>
    const model = defineModel()

    defineProps({
        pl: {
            type: String,
            default: "入力"
        },
        width: {
            type: String,
            default: 'md'
        }
    })
</script>

<style scoped>
    input {
        min-width: 200px;
    }

    /*.md {
        width: 200px;
    }

    .full {
        width: 100%;
    }*/
</style>