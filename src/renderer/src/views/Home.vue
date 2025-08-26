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
            <input type="submit" value="表示" @click="modal = !modal" />
        </div>
    </div>
    <BigModal v-model="modal">
        <h2>ほげげ</h2>
        <p>桐藤ナギサのガチャ寝落ちで引けずばにたす</p>
    </BigModal>
    <!-- フッター -->
    <Footer onPage="1"/>
</template>

<script setup>
    //ライブラリ読み込み
    import { onMounted, ref } from 'vue';
    import { format } from 'date-fns'

    //コンポーネント読み込み
    import Footer from '../components/Footer.vue'
    import BigModal from '../components/parts/BigModal.vue';
    import Watch from '../components/Pages/Home/Watch.vue'
    import Timeline from '../components/Pages/Home/Timeline.vue'

    //変数定義
    const modal = ref(false)

</script>