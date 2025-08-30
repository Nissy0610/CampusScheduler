<template>
    <select class="m-1 p-2 border-solid border-1 border-gray-300 rounded-lg focus:outline-0" v-model="model">
        <slot></slot>
    </select>
</template>

<style scoped>
    select {
        min-width: 200px;
    }

    select:disabled {
        background-color: #ccc;
    }
</style>

<script setup>
    //modelの設定
    const model = defineModel({})
</script>