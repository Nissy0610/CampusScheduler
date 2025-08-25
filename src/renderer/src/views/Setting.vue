<template>
    <div class="text-center m-4 pb-2 border-b-1 border-gray-300" id="header">
        <h2 class="text-2xl font-semibold">
            設定
        </h2>
        <h3 class="text-xl">
            Setting
        </h3>
    </div>
    <main class="w-1/2 h-full m-auto">
        <!--設定リスト-->
        <div class="" id="setting_list">
            <div class="w-100 text-right" id="fontColor">
                <label for="fontColor" class="">
                    文字色
                </label>
                <Input name="fontColor" placeholder="文字色" :value="fontColor"/>
            </div>
        </div>
        <!--設定ボタン-->
        <div class="text-center " id="setting_button">
            <Button color="blue">
                設定
            </Button>
        </div>
    </main>
    <Footer onPage="4" />
</template>

<script setup>
    //ライブラリ読み込み
    import { onMounted, ref } from 'vue'

    //コンポーネント読み込み
    import Footer from '../components/Footer.vue'
    import Input from '../components/parts/Input.vue'
    import Button from '../components/parts/Button.vue'

    //変数を定義
    const fontColor = ref()

    //設定を取得
    const getConfig = async ( config ) => {
        try {
            const data = await window.configAPI.getConfig(config)
            return data
        } catch(err) {
            console.log(err)
        }
    }

    onMounted( async () => {
        fontColor.value = await getConfig('fontColor')
    })
</script>
