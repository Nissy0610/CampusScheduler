<template>
    <input
        type="color"
        class="h-8 w-8"
        id="color"
        :disabled="isable"
        v-model="model"
    />
    <label for="color" class="text-sm">
        {{ label }}
    </label>
</template>

<style scoped>
    input:disabled {
        display: none;
    }
</style>
<script setup>
    //ライブラリ読み込み
    import { ref } from 'vue'

    //変数を設定
    const defColor = ref("#cccccc")

    //propsを設定
    defineProps({
        label: {
            type: String,
            required: false,
            default: '色を選択'
        },
        isable: {
            type: Boolean,
            required: false,
            default: false
        }
    })

    //modelを設定
    const model = defineModel({})
</script>