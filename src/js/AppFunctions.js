const { ipcRenderer } = require('electron')
const maxResBtn = document.getElementById('maxResBtn')
ipc = ipcRenderer;

const mySidebar = document.getElementById('mySidebar')
let isLeftMenuActive = false

closeBtn.addEventListener('click', ()=> {
    ipc.send('closeApp')
})

minimizeBtn.addEventListener('click', ()=> {
    ipc.send('minimizeApp')
})



function changeMaxResBtn(isMaximizedApp) {
    if(isMaximizedApp){
        maxResBtn.title = 'Restore'
        maxResBtn.classList.remove('maximizeBtn')
        maxResBtn.classList.add('restoreBtn')
    } else {
        maxResBtn.title = 'Maximize'
        maxResBtn.classList.remove('restoreBtn')
        maxResBtn.classList.add('maximizeBtn')
    }
}
ipc.on('isMaximized', ()=> { changeMaxResBtn(true)})
ipc.on('isRestored', ()=> { changeMaxResBtn(false)})
maxResBtn.addEventListener('click', ()=> {
    ipc.send('maxResBtn')
})

showHideMenus.addEventListener('click', ()=> {
    if(isLeftMenuActive) {
        mySidebar.style.width = '0px'
        isLeftMenuActive = false
    } else {
        mySidebar.style.width = '180px'
        isLeftMenuActive = true
    }
})