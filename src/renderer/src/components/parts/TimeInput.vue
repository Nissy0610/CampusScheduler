<template>
    <input type="time" 
        class="m-1 p-2 min-w-36 border-solid border-1 border-gray-300 rounded-lg focus:outline-0" 
        v-model="model"
    />
</template>

<style scoped>
    input:disabled {
        background-color: #ccc;
    }
</style>

<script setup>
    //v-modelの設定
    const model = defineModel()
    
</script>
