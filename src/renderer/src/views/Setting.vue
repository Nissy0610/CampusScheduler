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

    //const fontColor = ref("")
    //設定を取得

    onMounted( async () => {
        //font_color.value = await window.configAPI.getConfig('fontColor')
        const fontColor = ref("")
        fontColor.value = await window.configAPI.getConfig('fontColor')
        
    })

    console.log(fontColor.value)
</script>
