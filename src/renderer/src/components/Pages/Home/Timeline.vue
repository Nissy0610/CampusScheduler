<template>
    <div class="m-2 mb-5 min-w-4/9 h-20 rounded-xl text-center text-white z-10" id="timeline" @click="menu_show = !menu_show">
        <h2 class="text-2xl">
            <slot></slot>
        </h2>
        {{ time }}
        <transition name="hidden-menu">
            <div class="h-10 bg-gray-400 rounded-b-xl" id="hidden_menu" v-show="menu_show" @click="show_menu()">
                <div class="leading-10 flex justify-center" style="color: #333;" id="to_menu" >
                    <img src="@renderer/assets/icons/setting_dates.svg" />
                    時間割の変更
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
    //ライブラリ読み込み
    import { ref } from 'vue'

    //変数定義
    const menu_show = ref(false)

    //props定義
    defineProps({
        bgcolor: {
            type: String,
            required: false,
            default: 'crimson'
        },
        color: {
            type: String,
            required: false,
            default: '#333'
        },
        time: {
            type: String,
            required: true,
        }
    })

    //メニュー表示
    const show_menu = () => {
        alert("fuck")
    }

</script>

<style scoped>
    #timeline {
        background-color: v-bind(bgcolor);
        color: v-bind(color);
    }

    .hidden-menu-enter-active,
    .hidden-menu-leave-active {
        transition: all 0.5s ease;
        z-index: 1;
        margin-bottom: 20px;
    }

    .hidden-menu-enter-from,
    .hidden-menu-leave-to {
        transform: translateY(-20px);
    }
</style>
