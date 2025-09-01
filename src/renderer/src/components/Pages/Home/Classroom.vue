<template>
    <div class="flex justify-center" id="main">
        <div class="p-3 m-2 text-center font-bold text-2xl rounded-xl block" 
            :class="props.data[2] == null ? 'w-full' : 'w-4/9'"
            id="first"
            :style="{backgroundColor: props.data[1].bgColor, color: props.data[1].color}"
            @click="showSetting[1] = !showSetting[1]">
            {{ props.data[1].name }}
            <div class="font-normal text-base">
                {{ props.data[1].time.start + "~" + props.data[1].time.end }} <br />
                {{ props.data[1].room }}
            </div>
            <div class="text-base" v-show="showSetting[1]">
                <input type="submit" value="設定🔨" @click="openHomeScheSetting(props.data[1].id, 1, props.data[1])" />
            </div>
        </div>
        <div class="p-3 m-2 text-center font-bold text-2xl rounded-xl block w-4/9" 
            id="second"
            v-if="props.data[2] !== null"
            :style="{backgroundColor: props.data[2].bgColor, color: props.data[2].color}"
            @click="showSetting[2] = !showSetting[2]">
            {{ props.data[2].name }}
            <div class="font-normal text-base">
                {{ props.data[2].time.start + "~" + props.data[2].time.end }} <br />
                {{ props.data[2].room }}
            </div>
            <div class="text-base" v-show="showSetting[2]">
                <input type="submit" value="設定🔨" @click="openHomeScheSetting(props.data[1].id, 2, props.data[2])" />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

<script setup>
    //ライブラリ読み込み
    import { ref, onMounted, watch } from 'vue'
    import { format, parse, subMinutes } from 'date-fns'

    //ファイル読み込み
    import Chime from '../../../assets/sound/chime.wav'

    //変数の定義
    const showSetting = ref([false, false])
    const timeFlag = ref([])

    //propsの定義
    const props = defineProps({
        data: {
            require: true,
        }
    })

    //時間チェック
    const timeCheck = (clock) => {
        const now = format(new Date(), 'HH:mm')
        if(now == clock) {
            return true
        } else {
            return false
        }
    }

    //チャイム
    const chime = () => {
        const audio = new Audio(Chime)
        audio.play()
    }

    //onMountedでsetInterval
    onMounted(() => {
        setInterval(() => {
            timeFlag.value[0] = timeCheck(format(subMinutes(parse(props.data[1].time.start, 'HH:mm', new Date()), 2), 'HH:mm'))
            timeFlag.value[1] = timeCheck(props.data[1].time.start)
            timeFlag.value[2] = timeCheck(props.data[1].time.end)
        }, 1000)
        //console.log(format(subMinutes(parse(props.data[1].time.start, 'HH:mm', new Date()), 2), 'HH:mm'))
    })

    //watchでチャイム鳴らす
    watch(timeFlag, (flag) => {
        if(flag[0] == true || flag[1] == true || flag[2] == true) {
            chime()
        }
    }, { deep: true })

    //emitの設定
    const emit = defineEmits(['HomeTimeTableSetting'])

    const openHomeScheSetting = (id, no, data) => {
        emit('HomeTimeTableSetting', id, no, data)
    }

</script>