const { BrowserWindow, app, ipcMain} = require('electron');
const path = require('path');
const url = require('url')
const ipc = ipcMain;

let win

function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 960,
        minHeight: 650,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
        }
    })
    win.removeMenu()
    win.loadFile('index.html')
    //win.loadURL("http://127.0.0.1:3000/index.html")
    win.setBackgroundColor("#343B48")

    win.loadURL(url.format({
        pathname: "./src/dist/index.html",
        protocolL: 'file:',
        slashes: true
    }))

    //win.webContents.openDevTools()
    












    //
    ipc.on('maxResBtn', ()=>{
        if(win.isMaximized()) {
            console.log('Clicked on Restore')
            win.restore()
        } else {
            win.maximize()
        }
    })

    win.on('maximize', ()=>{
        win.webContents.send('isMaximized')
    })
    win.on('unmaximize', ()=>{
        win.webContents.send('isRestored')
    })


    ipc.on('minimizeApp', ()=>{
        console.log('Clicked on MinBtn')
        win.minimize()
    })

    ipc.on('closeApp', ()=>{
        console.log('Clicked on ClsBtn')
        win.close()
    })
}

require('electron-reload')(__dirname, {
    Electron: path.join(__dirname, 'node_module', '.bin', 'electron')
})

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})
