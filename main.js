const { app, BrowserWindow } = require('electron');
require('@electron/remote/main').initialize()
let win;
let config = {
    width: 1600,
    height: 900,
    // show: false,//窗口隐藏jk e
    // frame: false,//无边框
    backgroundColor: '#009fcc',//软件加载的时候会使用这个背景颜色
    webPreferences: {
        nodeIntegration: true,//使前端也能使用node.js
        enableRemoteModule: true,
        contextIsolation: false,
        scrollBounce: true,
    },
}
function createWin (config, url) {
    win = new BrowserWindow(config);
    win.loadFile(url);
    // win.maximize() // 最大化
    win.show()
}
app.on("ready", function () {
    createWin(config, "./dist/index.html")
})