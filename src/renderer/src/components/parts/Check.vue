<template>
    <div class="flex items-center">
        <input 
            type="checkbox" 
            id="check" 
            :checked="isChecked"
            v-model="check" />
        <label for="check" class="ml-1">
            <slot></slot>
        </label>
    </div>
</template>

<style scoped>
    input[type="checkbox"] {
        appearance: none;
        width: 25px;
        height: 25px;
        transition: 0.3s;
        border: solid 2px crimson;
    }

    input[type="checkbox"]:checked {
        transition: 0.3s;
        background-color: crimson;
    }

    input[type="checkbox"]:checked::after {
        content: url("@renderer/assets/icons/check_white.svg");
    }
</style>

<script setup>
    //propsを設定
    defineProps({
        isChecked: {
            type: Boolean,
            required: false,
            default: false,
        }
    })

    //modelを設定
    const check = defineModel({})
</script>