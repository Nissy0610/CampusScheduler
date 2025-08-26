<template>
    <div class="z-1 fixed top-0 left-0 w-full h-full flex justify-center items-center" id="overlay" v-show="isBigModal">
        <div class="w-3/4 h-6/7 bg-white rounded-md" id="big_modal">
            <div class="p-2 border-b-1 border-gray-300 flex" id="header">
                <h3 class="font-bold">
                    {{ title }}
                </h3>
                <span class="ml-auto" id="close" @click="isBigModal = false">
                    <img src="@renderer/assets/icons/close.svg" />
                </span>
            </div>
            <div class="p-2" id="main">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #overlay {
        background-color: rgba(128, 128, 128, 0.5);
    }

    #big_modal {
        box-sizing: 0 6px 6px 0 #111;
    }
</style>

<script setup>
    //ライブラリ読み込み
    import { ref } from 'vue'

    //onoff設定
    const isBigModal = defineModel()

    //props定義
    defineProps({
        title: {
            type: String,
            required: false,
            default: '設定'
        }
    })
</script>