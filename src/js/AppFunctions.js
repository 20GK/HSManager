const { ipcRenderer } = require('electron')
const maxResBtn = document.getElementById('maxResBtn')
const sidebar = document.getElementById('sideBar')
const contentsSideBar1 = document.getElementById('containerAnim')
ipc = ipcRenderer;
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
        sidebar.style.width = '0px'
        contentsSideBar1.style.opacity = '0'
        isLeftMenuActive = false
        console.log('click')
    } else {
        sidebar.style.width = '220px'
        contentsSideBar1.style.opacity = '1'
        isLeftMenuActive = true
        console.log('click')
    }
})