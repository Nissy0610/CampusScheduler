<template>
    <!-- ヘッダー -->
    <header>
        <h1 class="m-8 text-5xl font-bold">
            時間割
        </h1>
    </header>
    <!-- メイン -->
     <main class="h-full">
        <div class="h-min-full flex" id="time_table">
            <!-- 時間割表 -->
            <div class="min-w-1/5 h-full border-r-1 border-gray-300 text-center" id="time_table_item">
                <h3 class="border-b-1 border-gray-300 text-xl text-center">
                    月曜日
                </h3>
                <Button class="w-10/11" @click="openAddWindow(1)">
                    追加
                </Button>
                <List v-model="changeCheck" day="月曜日" @customSchedule="customTimeTable" />
            </div>
            <div class="min-w-1/5 h-full border-r-1 border-gray-300 text-center" id="time_table_item">
                <h3 class="border-b-1 border-gray-300 text-xl text-center">
                    火曜日
                </h3>
                <Button class="w-10/11" @click="openAddWindow(2)">
                    追加
                </Button>
                <List v-model="changeCheck" day="火曜日" @customSchedule="customTimeTable" />
            </div>
            <div class="min-w-1/5 h-full border-r-1 border-gray-300 text-center" id="time_table_item">
                <h3 class="border-b-1 border-gray-300 text-xl text-center">
                    水曜日
                </h3>
                <Button class="w-10/11" @click="openAddWindow(3)">
                    追加
                </Button>
                <List v-model="changeCheck" day="水曜日" @customSchedule="customTimeTable" />
            </div>
            <div class="min-w-1/5 h-full border-r-1 border-gray-300 text-center" id="time_table_item">
                <h3 class="border-b-1 border-gray-300 text-xl text-center">
                    木曜日
                </h3>
                <Button class="w-10/11" @click="openAddWindow(4)">
                    追加
                </Button>
                <List v-model="changeCheck" day="木曜日" @customSchedule="customTimeTable" />
            </div>
            <div class="min-w-1/5 h-full border-r-1 border-gray-300 text-center" id="time_table_item">
                <h3 class="border-b-1 border-gray-300 text-xl text-center">
                    金曜日
                </h3>
                <Button class="w-10/11" @click="openAddWindow(5)">
                    追加
                </Button>
                <List v-model="changeCheck" day="金曜日" @customSchedule="customTimeTable" />
            </div>
            <div class="min-w-1/5 h-full border-r-1 border-gray-300 text-center" id="time_table_item">
                <h3 class="border-b-1 border-gray-300 text-xl text-center">
                    土曜日
                </h3>
                <Button class="w-10/11" @click="openAddWindow(6)">
                    追加
                </Button>
                <List v-model="changeCheck" day="土曜日" @customSchedule="customTimeTable" />
            </div>
            <div class="min-w-1/5 h-full border-r-1 border-gray-300 text-center" id="time_table_item">
                <h3 class="border-b-1 border-gray-300 text-xl text-center">
                    日曜日
                </h3>
                <Button class="w-10/11" @click="openAddWindow(7)">
                    追加
                </Button>
                <List v-model="changeCheck" day="日曜日" @customSchedule="customTimeTable" />
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
                            <TimeInput id="start_time" v-model="firstData[1]" :disabled="!isAbleAddSecond" />
                        </div>
                        <!-- 終了時刻 -->
                        <div class="block h-16">
                            <label for="end_time" class="inline-block w-1/6">
                                終了時刻
                            </label>
                            <TimeInput id="end_time" v-model="firstData[2]" :disabled="!isAbleAddSecond" />
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
                <Button size="lg" @click="addTimeTable()" :disabled="!isAddFormValid">
                    設定
                </Button>
            </div>
        </BigModal>
        <!-- 時間割編集画面 -->
        <BigModal  v-model="view_edit" title="時間割編集">
            <div class="w-full pl-2 pt-8" id="edit_timetable">
                <!-- 授業名 -->
                <div class="block h-16">
                    <label for="edit_classname" class="inline-block w-1/6">
                        授業名
                    </label>
                    <Input pl="授業名" width="full" class="w-2/3" id="edit_classname" v-model="editFormData['name']" />
                </div>
                <!-- 開始時刻 -->
                <div class="block h-16">
                    <label for="start_time" class="inline-block w-1/6">
                        開始時刻
                    </label>
                    <TimeInput id="start_time" v-model="editFormData.time['start']" :disabled="editId[1] == 2" />
                </div>
                <!-- 終了時刻 -->
                <div class="block h-16">
                    <label for="end_time" class="inline-block w-1/6">
                        終了時刻
                    </label>
                    <TimeInput id="end_time" v-model="editFormData.time['end']" :disabled="editId[1] == 2" />
                </div>
                <!-- 背景色を選択 -->
                <div class="block h-16">
                    <label for="edit_bgcolor" class="inline-block w-1/6">
                        背景色
                    </label>
                    <ColorPicker id="edit_bgcolor" v-model="editFormData['bgColor']" />
                    <Button size="sm" color="indigo" @click="editFormData['bgColor'] = randomColorCode()">ランダム</Button>
                </div>
                <!-- 文字色 -->                    
                <div class="block h-16">
                    <label for="edit_color" class="inline-block w-1/6">
                        文字色
                    </label>
                    <Select id="edit_color" v-model="editFormData['color']">
                        <option value="white">白</option>
                        <option value="black">黒</option>
                    </Select>
                </div>
                <div class="block h-16">
                    <label for="edit_classroom" class="inline-block w-1/6">
                        教室
                    </label>
                    <Input pl="教室名" width="full" class="w-2/3" id="edit_classroom" v-model="editFormData['room']" />
                </div>
                <div class="text-center">
                    <Button size="lg" color="indigo" @click="editTimeTable(editId[0], editId[1])">
                        編集
                    </Button>
                    <Button size="lg" @click="deleteTimeTable(editId[0])">
                        削除
                    </Button>
                </div>
            </div>
        </BigModal>
     </main>
    <Footer onPage="3" />
</template>

<script setup>
    //ライブラリ読み込み
    import { computed, ref, watch } from 'vue'

    //コンポーネント読み込み
    import Footer from '../components/Footer.vue'
    import Button from '../components/parts/Button.vue'
    import Input from '../components/parts/Input.vue'
    import Check from '../components/parts/Check.vue'
    import TimeInput from '../components/parts/TimeInput.vue'
    import ColorPicker from '../components/parts/ColorPicker.vue'
    import Select from '../components/parts/Select.vue'
    import BigModal from '../components/parts/BigModal.vue'
    import List from '../components/Pages/TimeTable/List.vue'

    //変数を定義
    const view_add = ref()
    const view_edit = ref ()
    const week = ref("")
    const isAbleAddSecond = ref(false)
    const firstData = ref(["", "", "", "#DC143C", "white", ""])
    const secondData = ref(["", "none", "none", "#DC143C", "white", ""])
    const changeCheck = ref(true)
    const editData = ref({"name": secondData.value[0], "day": week.value, "time": { "start": firstData.value[1], "end": firstData.value[2] }, "bgColor": secondData.value[3], "color" : secondData.value[4], "room": secondData.value[5]})
    let editFormData = editData
    const editId = ref([0, 0])

    
    //時間割の追加ウィンドウを開く
    const openAddWindow = (day) => {
        view_add.value = true
        week.value = dayOfWeek(day)
    }

    //追加フォームの入力欄がしっかり埋まってるかチェック
    const isAddFormValid = computed(() => {
        const firstFilled = firstData.value.every(val => val.trim() !== "")
        const secondFilled = secondData.value.every(val => val.trim() !== "")
        return isAbleAddSecond.value ? (firstFilled && secondFilled) : firstFilled
    })

    //時間割を追加
    const addTimeTable = async () => {
        //変数を定義
        let data = await getTimeTable() || []
        let newData = {}
        //一つ目の時間のフォームデータ
        const first_json = {
            "id": data.length,
            "name": firstData.value[0],
            "day": week.value,
            "time": {
                "start": firstData.value[1],
                "end": firstData.value[2]
            },
            "bgColor": firstData.value[3],
            "color" : firstData.value[4],
            "room": firstData.value[5]
        }
        //2つ目の時間のフォームデータ
        const second_json = {
            "name": secondData.value[0],
            "day": week.value,
            "time": {
                "start": firstData.value[1],
                "end": firstData.value[2]
            },
            "bgColor": secondData.value[3],
            "color" : secondData.value[4],
            "room": secondData.value[5]
        }
        //データを生成
        if(isAbleAddSecond.value == true) {
            newData = {
                1: first_json,
                2: second_json,
                "isDelete": false
            }
        } else {
            newData = {
                1: first_json,
                2: null,
                "isDelete": false
            }
        }
        //データを送信
        data.push(newData)
        try {
            await window.timeTableAPI.setTimeTable(data)
        } catch(err) {
            console.log(err)
        }
        //モーダルを閉じる
        view_add.value = false
        //変更を通達
        changeCheck.value = !changeCheck.value
    }

    //時間割変更画面を表示
    const customTimeTable = async (id, no) => {
        //データを取得
        let data = await getTimeTable()
        let formData
        data =  data.filter(item => item[1].id === id)
        //授業が1つ目か2つ目かでデータを変える
        if(no === 1) {
            formData = {
                "name": data["0"]["1"].name,
                "day": data["0"]["1"].day,
                "time": {
                    "start": data["0"]["1"].time.start,
                    "end": data["0"]["1"].time.end
                },
                "bgColor": data["0"]["1"].bgColor,
                "color": data["0"]["1"].color,
                "room": data["0"]["1"].room
            }
        } else {
            formData = {
                "name": data["0"]["2"].name,
                "day": data["0"]["2"].day,
                "time": {
                    "start": data["0"]["1"].time.start,
                    "end": data["0"]["1"].time.end
                },
                "bgColor": data["0"]["2"].bgColor,
                "color": data["0"]["2"].color,
                "room": data["0"]["2"].room
            }
        }
        editData.value = formData
        //editIdを代入
        editId.value = [id, no]
        //モーダルを表示
        view_edit.value = true
    }

    //時間割を変更
    const editTimeTable = async (id, no) => {
        //変数定義
        let data = await getTimeTable()
        //データを定義
        const obj = {
            "name": editData.value["name"],
            "day": editData.value["day"],
            "time": {
                "start": editData.value.time["start"],
                "end": editData.value.time["end"]
            },
            "bgColor": editData.value["bgColor"],
            "color": editData.value["color"],
            "room": editData.value["room"]
        }
        //noが1ならidを挿入
        no == 1 ? obj.id = id : obj
        //dataを編集
        if(no == 1) {
            data[id][1] = obj
        } else {
            data[id][2] = obj
        }
        //データを送信
        try {
            await window.timeTableAPI.setTimeTable(data)
        } catch(err) {
            console.log(err)
        }
        //モーダルを閉じる
        view_edit.value = false
        //変更を通達
        changeCheck.value = !changeCheck.value
    }

    //時間割を削除
    const deleteTimeTable = async (id) => {
        //変数定義
        const isDelete = window.confirm("本当に削除してもよろしいでしょうか？")
        let data = await getTimeTable()
        //確認の結果次第で分岐
        if(isDelete == true) {
            //dataを編集
            data[id].isDelete = true
            console.log(data[id])
            //データを送信
            try {
                await window.timeTableAPI.setTimeTable(data)
            } catch(err) {
                console.log(err)
            }
            //モーダルを閉じる
            view_edit.value = false
            //変更を通達
            changeCheck.value = !changeCheck.value
            alert("削除が完了しました。")
        } else {
            view_edit.value = false
        }
    }

    //時間割を取得
    const getTimeTable = async () => {
        try {
            const data = await window.timeTableAPI.getTimeTable()
            return data
        } catch(err) {
            console.log(err)
        }
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
