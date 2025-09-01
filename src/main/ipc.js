// ライブラリ読み込み
import { app, ipcMain } from "electron"
import { readFileSync } from "fs"
import { format } from "date-fns"
import { ja } from 'date-fns/locale'
const Store = require('electron-store').default

// ==config==
// config読み込み
ipcMain.handle('getConfig', ( _event, name ) => {
    const store = new Store()
    const template = JSON.parse(readFileSync('./resources/config_template.json', 'utf-8'))
    if(!store.has(name)) {
        store.set(name, template[name])
        return store.get(name)
    } else {
        return store.get(name)
    }
})

// ==時間割==
// 時間割読み込み
ipcMain.handle('getTimeTable', ( _event ) => {
    const store = new Store({ name: "timeTable" })
    return store.get('timeTable', [])
})

//時間割を設定
ipcMain.handle('setTimeTable', ( _event, data ) => {
    const store = new Store({ name: "timeTable" })
    store.set('timeTable', data)
})

// ==Homeの時間割==
//時間割の設定と取得
ipcMain.handle('getHomeTimeTable', ( _event ) => {
    const store = new Store({ name: "timeTable" })
    let day = format(new Date(), "EEEE", {locale: ja})
    //時間割テンプレートを取得
    let tempData = store.get('timeTable', [])
    tempData = tempData.filter(item => item[1].day === day)
    tempData = tempData.filter(item => item["isDelete"] === false)
    //データを保存
    const data = store.get('HomeTimeTable')
    if(data == null || store.get('HomeTimeTable')[0][1].day !== day) {
        store.set('HomeTimeTable', tempData)
    }
    return store.get('HomeTimeTable')
})

ipcMain.handle('setHomeTimeTable', ( _event, data ) => {
    const store = new Store({ name: "timeTable" })
    store.set('HomeTimeTable', data)
})