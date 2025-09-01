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
                <input type="submit" class="block m-auto font-bold" :style="{ color: list[1].color }" value="変更" @click="customSchedule(list[1].id, 1)" />
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
                <input type="submit" class="block m-auto font-bold" :style="{ color: list[2].color }" value="変更" @click="customSchedule(list[1].id, 2)" />
            </div>
        </div>
    </div>
    <div class="mb-10"></div>
</template>

<style scoped>
    input[type="submit"]:hover {
        border-bottom: solid 1px white;
    }
</style>

<script setup>
    //ライブラリ読み込み
    import { ref, onMounted, watch } from 'vue'
    import { compareAsc, parse } from 'date-fns'

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
            data = data.filter(item => item["isDelete"] === false)
            data.sort((a, b) => compareAsc(parse(a[1].time.start, 'HH:mm', new Date()), parse(b[1].time.start, 'HH:mm', new Date())))
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

    //設定変更のemitを定義
    const emit = defineEmits(['customSchedule'])

    const customSchedule = (id, no) => {
        emit('customSchedule', id, no)
    }
</script>