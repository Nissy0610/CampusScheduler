<template>
    <div v-for="list in classroom" :key="list.key">
        <Classroom :data="list" @HomeTimeTableSetting="openSetting" />
    </div>
    <!-- 時間割を変更 -->
    <BigModal v-model="form">
        <div class="w-full pl-2 pt-8" id="timetable">
            <!-- 授業名 -->
            <div class="block h-16">
                <label for="classname" class="inline-block w-1/6">
                    授業名
                </label>
                <Input pl="授業名" width="full" class="w-2/3" id="classname" v-model="classData['name']" />
            </div>
            <!-- 開始時刻 -->
            <div class="block h-16">
                <label for="start_time" class="inline-block w-1/6">
                    開始時刻
                </label>
                <TimeInput id="start_time" v-model="classData.time['start']"  />
            </div>
            <!-- 終了時刻 -->
            <div class="block h-16">
                <label for="end_time" class="inline-block w-1/6">
                    終了時刻
                </label>
                <TimeInput id="end_time" v-model="classData.time['end']" />
            </div>
            <!-- 背景色を選択 -->
            <div class="block h-16">
                <label for="first_bgcolor" class="inline-block w-1/6">
                    背景色
                </label>
                <ColorPicker id="first_bgcolor" v-model="classData['bgColor']" />
                <Button size="sm" color="indigo" @click="classData['bgColor'] = randomColorCode()">ランダム</Button>
            </div>
            <!-- 文字色 -->                    
            <div class="block h-16">
                <label for="first_color" class="inline-block w-1/6">
                    文字色
                </label>
                <Select id="first_color" v-model="classData['color']">
                    <option value="white">白</option>
                    <option value="black">黒</option>
                </Select>
            </div>
            <div class="block h-16">
                <label for="first_classroom" class="inline-block w-1/6">
                    教室
                </label>
                <Input pl="教室名" width="full" class="w-2/3" id="first_classroom" v-model="classData['room']" />
            </div>
        </div>
        <div class="text-center">
            <Button size="lg" @click="ChangeTimeTable(formId[0], formId[1])">
                変更
            </Button>
        </div>
    </BigModal>
</template>

<style scoped>

</style>

<script setup>
    //ライブラリ読み込み
    import { ref, onMounted, watch } from 'vue'
    import { compareAsc, parse } from 'date-fns'

    //コンポーネント読み込み
    import Button from '../../parts/Button.vue'
    import Input from '../../parts/Input.vue'
    import TimeInput from '../../parts/TimeInput.vue'
    import ColorPicker from '../../parts/ColorPicker.vue'
    import Select from '../../parts/Select.vue' 
    import Classroom from './Classroom.vue'
    import BigModal from '../../parts/BigModal.vue'

    //変数の設定
    const classroom = ref()
    const isChanged = ref(false)
    const form = ref(false)
    const classData = ref({ "name": "", "time": { "start": "", "end": ""}, "bgColor": "", "color": "", "room": ""})
    const formId = ref([])

    //データ読み込み
    const TimeTable = async () => {
        try {
            const data = await window.timeTableAPI.getHomeTimeTable()
            return data
        } catch(err) {
            console.log(err)
        }
    }
    
    //設定画面を開く
    const openSetting = (id, no, data) => {
        //モーダルを開く
        form.value = true
        //データを入力
        classData.value = data
        //idを入力
        formId.value[0] = id
        formId.value[1] = no
    }

    //時間割を変更
    const ChangeTimeTable = async (id, no) => {
        //全データ
        let data = await TimeTable()
        //更新用データ
        let obj = {
            "name": classData.value['name'],
            "day": classData.value['day'],
            "time": {
                "start": classData.value.time['start'],
                "end": classData.value.time['end']
            },
            "bgColor": classData.value['bgColor'],
            "color": classData.value['color'],
            "room": classData.value['room']
        }
        //no=1ならidを入力
        no == 1 ? obj.id = id : obj
        
        //noでどこを書き換えるか分岐
        if(no == 1) {
            data[id][1] = obj
        } else {
            data[id][2] = obj
        }

        //書き込み
        try {
            await window.timeTableAPI.setHomeTimeTable(data)
        } catch(err) {
            console.log(err)
        }

        //モーダルを閉じる
        form.value = false

        //更新を通知
        isChanged.value = !isChanged.value
    }

    //ランダムなカラーコード生成
    const randomColorCode = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16)
        return "#" + n.slice(0, 6)
    }

    //データの代入と更新
    onMounted( async () => {
        classroom.value = await TimeTable()
        classroom.value.sort((a, b) => compareAsc(parse(a[1].time.start, 'HH:mm', new Date()), parse(b[1].time.start, 'HH:mm', new Date())))
    })

    watch(isChanged, async () => {
        classroom.value = await TimeTable()
        classroom.value.sort((a, b) => compareAsc(parse(a[1].time.start, 'HH:mm', new Date()), parse(b[1].time.start, 'HH:mm', new Date())))
        console.log("change")
    })
</script>