const { BrowserWindow, app} = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        minWidth: 1200,
        width: 1200,
        maxWidth:1200,

        minHeight:800,
        height: 800,
        maxHeight: 800,

        frame: false,
        backgroundColor:"#282c34",
        webPreferences: {
            nodeIntegration: false,
            devTools: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.removeMenu()
    win.loadFile('index.html')
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

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})