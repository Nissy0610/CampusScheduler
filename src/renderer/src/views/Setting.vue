<template>
    <div class="text-center m-4 pb-2 border-b-1 border-gray-300" id="header">
        <h2 class="text-2xl font-semibold">
            設定
        </h2>
        <h3 class="text-xl">
            Setting
        </h3>
    </div>
    <main class="w-1/2 m-auto">
        <div class="" id="color">
            <div class="w-100 text-right" id="fontColor">
                <label for="fontColor" class="">
                    文字色
                </label>
                <Input name="fontColor" placeholder="文字色"/>
            </div>
        </div>
    </main>
    <Footer onPage="3" />
</template>

<script setup>
    //ライブラリ読み込み
    import { onMounted, ref } from 'vue'

    //コンポーネント読み込み
    import Footer from '../components/Footer.vue'
    import Input from '../components/parts/Input.vue'

    //変数を定義
    let fontColor 

    //設定を取得
    const getConfig = async ( config ) => {
        return await window.configAPI.getConfig(config)
    }

    
</script>
