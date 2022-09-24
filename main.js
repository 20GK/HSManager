const { BrowserWindow, app, ipcMain} = require('electron');
const path = require('path');
const ipc = ipcMain;

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 960,
        minHeight: 650,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            devTools: true,
        }
    })
    win.removeMenu()
    //win.loadFile('index.html')
    win.loadURL("http://127.0.0.1:3000/index.html")
    win.setBackgroundColor("#343B48")
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
