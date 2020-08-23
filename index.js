console.log("hi");
const electron=require('electron');
const  app=electron.app;
const path=require('path');
const url=require('url');
const browser=electron.BrowserWindow;

let win;
function createWindow(){
    const newLocal = 'false';
    win = new browser({resizable:newLocal});
    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        slashes:true,
        protocol:'file'
    }));

    win.on('closed',()=>{
        win=null;
    })

}
app.on('ready',createWindow);