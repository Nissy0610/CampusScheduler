<template>
    <div class="w-full h-2/3 flex flex-col justify-center items-center" id="watch">
        <h2 class="text-[4vw] text-center">
            {{ date }}
        </h2>
        <h1 class="text-[10vw] text-center font-black leading-none">
            {{ time }}
        </h1>
    </div>
</template>

<script setup>
    //ライブラリの読み込み
    import { ref, onMounted } from 'vue'
    import { format } from 'date-fns'
    import { ja } from 'date-fns/locale'

    //変数の設定
    const date = ref('')
    const time = ref('')
    
    //日付計算
    const Dates = () => {
        return format(new Date(), 'yyyy年MM月dd日(E曜日)', {locale: ja})
    }

    //時間部分の計算
    const Times = () => {
        return format(new Date(), 'HH：mm：ss')
    }

    //0.1秒ごとに時間を計算
    onMounted(() => {
        setInterval(() => {
            date.value = Dates()
            time.value = Times()
        }, 100)
    })
</script>