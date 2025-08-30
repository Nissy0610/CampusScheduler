<template>
    <!-- ヘッダー -->
    <header>
        <h1 class="m-8 text-5xl font-bold">
            時間割
        </h1>
    </header>
    <!-- メイン -->
     <main class="h-full">
        <div class="h-full flex" id="time_table">
            <!-- 時間割表 -->
            <div class="min-w-1/5 h-full border-r-1 border-gray-300 text-center" id="time_table_item">
                <h3 class="border-b-1 border-gray-300 text-xl text-center">
                    月曜日
                </h3>
                <Button class="w-10/11" @click="openAddWindow(1)">
                    追加
                </Button>
            </div>
            <div class="min-w-1/5 h-full border-r-1 border-gray-300" id="time_table_item">
                <h3 class="border-b-1 border-gray-300 text-xl text-center">
                    火曜日
                </h3>
            </div>
            <div class="min-w-1/5 h-full border-r-1 border-gray-300" id="time_table_item">
                <h3 class="border-b-1 border-gray-300 text-xl text-center">
                    水曜日
                </h3>
            </div>
            <div class="min-w-1/5 h-full border-r-1 border-gray-300" id="time_table_item">
                <h3 class="border-b-1 border-gray-300 text-xl text-center">
                    木曜日
                </h3>
            </div>
            <div class="min-w-1/5 h-full border-r-1 border-gray-300" id="time_table_item">
                <h3 class="border-b-1 border-gray-300 text-xl text-center">
                    金曜日
                </h3>
            </div>
            <div class="min-w-1/5 h-full border-r-1 border-gray-300" id="time_table_item">
                <h3 class="border-b-1 border-gray-300 text-xl text-center">
                    土曜日
                </h3>
            </div>
            <div class="min-w-1/5 h-full border-r-1 border-gray-300" id="time_table_item">
                <h3 class="border-b-1 border-gray-300 text-xl text-center">
                    日曜日
                </h3>
            </div>
        </div>
        <!-- 時間割の追加画面 -->
        <BigModal v-model="view_add" title="時間割追加">
            <div class="w-full h-10">
                <h2 class="text-2xl text-center">
                    {{ week }}
                </h2>
            </div>
            <div class="w-full flex">
                <!-- 一つ目の授業 -->
                <div class="w-1/2 pl-2 pt-8" id="first_timetable">
                    <!-- 授業名 -->
                    <div class="block h-16">
                        <label for="first_classname" class="inline-block w-1/6">
                            授業名
                        </label>
                        <Input pl="授業名" width="full" class="w-2/3" id="first_classname" v-model="firstData[0]" required />
                    </div>
                    <!-- 開始時刻 -->
                    <div class="block h-16">
                        <label for="start_time" class="inline-block w-1/6">
                            開始時刻
                        </label>
                        <TimeInput id="start_time" v-model="firstData[1]" required />
                    </div>
                    <!-- 終了時刻 -->
                    <div class="block h-16">
                        <label for="end_time" class="inline-block w-1/6">
                            終了時刻
                        </label>
                        <TimeInput id="end_time" v-model="firstData[2]" required />
                    </div>
                    <!-- 背景色を選択 -->
                    <div class="block h-16">
                        <label for="first_bgcolor" class="inline-block w-1/6">
                            背景色
                        </label>
                        <ColorPicker id="first_bgcolor" v-model="firstData[3]" />
                        <Button size="sm" color="indigo" @click="firstData[3] = randomColorCode()">ランダム</Button>
                    </div>
                    <!-- 文字色 -->                    
                    <div class="block h-16">
                        <label for="first_color" class="inline-block w-1/6">
                            文字色
                        </label>
                        <Select id="first_color" v-model="firstData[4]">
                            <option value="setting">設定通り</option>
                            <option value="white">白</option>
                            <option value="black">黒</option>
                        </Select>
                    </div>
                    <div class="block h-16">
                        <label for="first_classroom" class="inline-block w-1/6">
                            教室
                        </label>
                        <Input pl="教室名" width="full" class="w-2/3" id="first_classroom" v-model="firstData[5]" required />
                    </div>
                </div>
                <!-- 二つ目の授業 -->
                <div class="w-1/2 pl-2 border-l-1 border-gray-300" id="second_timetable">
                    <div class="w-full h-8">
                        <!-- 並行する授業があるかどうか -->
                        <Check v-model="isAbleAddSecond">
                            並行する授業を設定
                        </Check>
                        <!-- 授業名 -->
                        <div class="block h-16">
                            <label for="second_classname" class="inline-block w-1/6">
                                授業名
                            </label>
                            <Input pl="授業名" width="full" class="w-2/3" id="second_classname" v-model="secondData[0]" :disabled="!isAbleAddSecond" />
                        </div>
                        <!-- 開始時刻 -->
                        <div class="block h-16">
                            <label for="start_time" class="inline-block w-1/6">
                                開始時刻
                            </label>
                            <TimeInput id="start_time" v-model="secondData[1]" :disabled="!isAbleAddSecond" />
                        </div>
                        <!-- 終了時刻 -->
                        <div class="block h-16">
                            <label for="end_time" class="inline-block w-1/6">
                                終了時刻
                            </label>
                            <TimeInput id="end_time" v-model="secondData[2]" :disabled="!isAbleAddSecond" />
                        </div>
                        <!-- 背景色を選択 -->
                        <div class="block h-16">
                            <label for="second_bgcolor" class="inline-block w-1/6">
                                背景色
                            </label>
                            <ColorPicker id="second_bgcolor" v-model="secondData[3]" :isable="!isAbleAddSecond" />
                            <Button size="sm" color="indigo" @click="secondData[3] = randomColorCode()" :disabled="!isAbleAddSecond" >ランダム</Button>
                        </div>
                        <!-- 文字色 -->                    
                        <div class="block h-16">
                            <label for="first_color" class="inline-block w-1/6">
                                文字色
                            </label>
                            <Select id="first_color" v-model="secondData[4]" :disabled="!isAbleAddSecond" >
                                <option value="setting">設定通り</option>
                                <option value="white">白</option>
                                <option value="black">黒</option>
                            </Select>
                        </div>
                        <div class="block h-16">
                            <label for="second_classroom" class="inline-block w-1/6">
                                教室
                            </label>
                            <Input pl="教室名" width="full" class="w-2/3" id="second_classroom" v-model="secondData[5]" :disabled="!isAbleAddSecond" required />
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-full flex justify-center pt-7">
                <Button size="lg" @click="addTimeTable()" :disabled="!isFormValid">
                    設定
                </Button>
            </div>
        </BigModal>
     </main>
    <Footer onPage="3" />
</template>

<script setup>
    //ライブラリ読み込み
    import { computed, ref } from 'vue'

    //コンポーネント読み込み
    import Footer from '../components/Footer.vue'
    import Button from '../components/parts/Button.vue'
    import Input from '../components/parts/Input.vue'
    import Check from '../components/parts/Check.vue'
    import TimeInput from '../components/parts/TimeInput.vue'
    import ColorPicker from '../components/parts/ColorPicker.vue'
    import Select from '../components/parts/Select.vue'
    import BigModal from '../components/parts/BigModal.vue'

    //変数を定義
    const view_add = ref()
    const week = ref("")
    const isAbleAddSecond = ref(false)
    const firstData = ref(["", "", "", "#DC143C", "setting", ""])
    const secondData = ref(["", "", "", "#DC143C", "setting", ""])
    
    //時間割の追加ウィンドウを開く
    const openAddWindow = (day) => {
        view_add.value = true
        week.value = dayOfWeek(day)
    }

    //入力欄がしっかり埋まってるかチェック
    const isFormValid = computed(() => {
        const firstFilled = firstData.value.every(val => val.trim() !== "")
        const secondFilled = secondData.value.every(val => val.trim() !== "")
        return isAbleAddSecond.value ? (firstFilled && secondFilled) : firstFilled
    })

    //時間割を追加
    const addTimeTable = () => {
        console.log(firstData.value)
    }

    //ランダムなカラーコード生成
    const randomColorCode = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16)
        return "#" + n.slice(0, 6)
    }

    //曜日判定
    const dayOfWeek = (day) => {
        let week
        switch(day) {
            case 1:
                week = "月曜日"
                break
            case 2:
                week = "火曜日"
                break
            case 3:
                week = "水曜日"
                break
            case 4:
                week = "木曜日"
                break
            case 5:
                week = "金曜日"
                break
            case 6:
                week = "土曜日"
                break
            case 7:
                week = "日曜日"
                break
        }
        return week
    }
</script>
