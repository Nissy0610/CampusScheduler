import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}

//設定ファイルの操作
contextBridge.exposeInMainWorld('configAPI', {
  getConfig: ( name ) => ipcRenderer.invoke('getConfig', name),
})

//時間割ファイルの操作
contextBridge.exposeInMainWorld('timeTableAPI', {
  getTimeTable: () => ipcRenderer.invoke('getTimeTable'),
  setTimeTable: ( data ) => ipcRenderer.invoke('setTimeTable', data),
  getHomeTimeTable: () => ipcRenderer.invoke('getHomeTimeTable'),
  setHomeTimeTable: ( data ) => ipcRenderer.invoke('setHomeTimeTable', data)
})
