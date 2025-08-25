<template>
    <div class="w-full h-full flex" id="wrapper">
        <div class="w-3/4" id="left">
            <!-- 時計 -->
             <Watch />
        </div>
        <div class="w-1/4 box-border" id="right">
            <Timeline color="white" time="11:45~12:35">
                プロNβ
            </Timeline>
            <Timeline color="white" time="11:45~12:35">
                プロNβ
            </Timeline>
            <div class="flex w-full justify-center">
                <Timeline color="white" time="13:15~14:05">
                    Hoge
                </Timeline>
                <Timeline color="white" time="13:15~14:05">
                    Piyo
                </Timeline>
            </div>
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
    import Watch from '../components/Pages/Home/Watch.vue'
    import Timeline from '../components/Pages/Home/Timeline.vue'

</script>