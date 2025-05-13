<template>
    <input :type=" isTime ? 'datetime-local':'date'" 
        class="m-1 p-2 min-w-36 border-solid border-1 border-gray-300 rounded-lg focus:outline-0" 
        v-model="model"
    />
</template>

<script setup>
    //v-modelの設定
    const model = defineModel()
    //propsの設定
    defineProps({
        isTime: {
            type: Boolean,
            defalut: false,
        }
    })
</script>
