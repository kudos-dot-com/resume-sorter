
const electron=require('electron');
const  app=electron.app;
const path=require('path');
const url=require('url');
const browser=electron.BrowserWindow;
const fs=require('fs');
const { Script } = require('vm');
const { getCreationTime } = require('process');
const { getDiffieHellman } = require('crypto');
const textract=require('textract');
const folder='./files/';
const ipc=electron.ipcMain;
const shell=electron.shell;


function getfile(file,keyword){
 textract.fromFileWithPath(`${folder}${file}`, function( error, text ) {

   
    if((text.search(keyword))!=-1)
    {
        console.log(`${folder}${file}`);
    }
})


}

let win;
function createWindow(){
    const newLocal = 'false';
    win = new browser({webPreferences:{nodeIntegration:true}});
    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true
        
    }));
   
    win.webContents.openDevTools();
    
    win.on('closed',()=>{
        win=null;
    })
var text2;
    ipc.on('asynchronous-message',(event,text)=>
    {   
        fs.readdir(folder,(err,files)=>{
           
            files.forEach(file=>{
            if(file.indexOf('~')!== 0){
            //c=0;
            textract.fromFileWithPath(`${folder}${file}`, function( error, data ) {
                if(((data.search(text))!= -1)==true)
                { c=1;
                    event.sender.send('asynchronous-reply',`${file}`)
                    console.log(c);
                }
            })
        }
        });
       
      
    
    });
    
    });

}
app.on('ready',createWindow);


function toggle(){
    document.querySelector('#button').addEventListener('click',()=>{
        document.querySelector('#body').style.backgroundColor="red";
       console.log(1);
       
    });
    
}
