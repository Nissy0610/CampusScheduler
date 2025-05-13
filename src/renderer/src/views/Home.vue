<template>
    <div class="w-full" id="wrapper">
        <div class="w-3/4" id="watch">
            <h2 class="text-[4vw] text-center">
                {{ date }}
            </h2>
            <h1 class="text-[8vw] text-center">
                {{ time }}
            </h1>
        </div>
    </div>
    <!-- フッター -->
    <Footer onPage="1"/>
</template>

<script setup>
    //ライブラリ読み込み
    import { onMounted, ref } from 'vue';
    import { format } from 'date-fns'

    //コンポーネント読み込み
    import Footer from '../components/Footer.vue'

    //変数の設定
    const date = ref('')
    const time = ref('')
    
    //日付計算
    const Dates = () => {
        return format(new Date(), 'yyyy年MM月dd日')
    }

    //時間部分の計算
    const Times = () => {
        return format(new Date(), 'HH時mm分ss秒')
    }

    onMounted(() => {
        setInterval(() => {
            date.value = Dates()
            time.value = Times()
        }, 100)
    })
</script>