<template>
    <div 
        class="bg-gray-300 pt-2 pb-2 mb-2"
        v-for="list in listData"
        :key="list.id"
    >
        <!-- 授業1つ目 -->
        <div class="m-2 p-2 rounded-lg" 
            :style="{ backgroundColor: list[1].bgColor }">
            <div :style="{ color: list[1].color }">
                <h3 class="text-xl font-bold">
                    {{ list[1].name }}
                </h3>
                {{ list[1].time.start + '~' + list[1].time.end + "　教室：" + list[1].room }}
                
            </div>
        </div>
        <!-- 授業2つ目 -->
        <div class="m-2 p-2 rounded-lg" 
            v-if="list[2]"
            :style="{ backgroundColor: list[2].bgColor }">
            <div :style="{ color: list[2].color }">
                <h3 class="text-xl font-bold">
                    {{ list[2].name }}
                </h3>
                {{ list[2].time.start + '~' + list[2].time.end + "　教室：" + list[2].room }}
            </div>
        </div>
    </div>
    <div class="mb-10"></div>
</template>

<style scoped>

</style>

<script setup>
    //ライブラリ読み込み
    import { ref, onMounted, watch } from 'vue'

    //変数定義
    const listData = ref()
    
    //propsの定義
    const props = defineProps({
        day: {
            type: String,
            require: true,
        }
    })

    //modelの定義
    const isChanged = defineModel({}) 

    //時間割を取得
    const getTimeTable = async () => {
        try {
            let data = await window.timeTableAPI.getTimeTable()
            data = data.filter(item => item[1].day === props.day)
            return data
        } catch(err) {
            console.log(err)
        }
    }

    //開いたときに表示
    onMounted( async () => {
        listData.value = await getTimeTable()
    })

    //更新を検知
    watch(isChanged, async () => {
        listData.value = await getTimeTable()
    })
</script>