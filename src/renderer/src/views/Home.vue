<template>
    <div class="w-full h-full flex" id="wrapper">
        <div class="w-3/4" id="left">
            <!-- 時計 -->
             <Watch />
        </div>
        <div class="w-1/4 box-border" id="right">
            <TimeTable />
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
    import BigModal from '../components/parts/BigModal.vue';
    import Watch from '../components/Pages/Home/Watch.vue'
    import TimeTable from '../components/Pages/Home/TimeTable.vue';
    import Timeline from '../components/Pages/Home/Timeline.vue'

    //変数定義
    const modal = ref(false)

</script>