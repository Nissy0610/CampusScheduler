<template>
    <div id="overlay" class="z-1 fixed top-0 left-0 w-full h-full flex justify-center items-center" v-show="isModal">
        <div id="modal_content" class="bg-white z-2 w-2/5 min-h-40 flex flex-col rounded-xl">
            <h3 class="p-2 font-semibold text-2xl text-center">
                {{ title }}
            </h3>
            <p class="p-2">
                <slot></slot>
            </p>
            <div id="ok" class="p-2 text-center mt-auto shadow-xl">
                <Button size="sm" color="blue" @click="isModal = false">
                    {{ button }}
                </Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #overlay {
        background-color: rgba(128, 128, 128, 0.5);
    }
</style>

<script setup>
    //ライブラリとか
    import { ref } from 'vue';
    //消すボタンの読み込み
    import Button from './Button.vue';

    //props設定
    defineProps({
        title: {
            type: String,
            default: "警告"
        },
        button: {
            type: String,
            default: "OK"
        }
    })

    //onoff設定
    const isModal = defineModel()
    
</script>