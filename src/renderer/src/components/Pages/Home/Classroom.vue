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
    import { ref } from 'vue'

    //変数の定義
    const showSetting = ref([false, false])

    //propsの定義
    const props = defineProps({
        data: {
            require: true,
        }
    })

    //emitの設定
    const emit = defineEmits(['HomeTimeTableSetting'])

    const openHomeScheSetting = (id, no, data) => {
        emit('HomeTimeTableSetting', id, no, data)
    }

</script>