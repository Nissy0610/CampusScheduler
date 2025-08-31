// ライブラリ読み込み
import { app, ipcMain } from "electron"
import { readFileSync } from "fs"
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