  const electron=require('electron');
  const fs=require('fs');
  const { getCreationTime } = require('process');
  const { getDiffieHellman } = require('crypto');
  const textract=require('textract');
  const folder='./files/';
  const ipc=electron.ipcRenderer;  
  const shell=electron.shell;  
  function getfile(file){
   
    let html=`<tr><td>${file}</td></tr>`;
    document.querySelector('table tbody').insertAdjacentHTML('afterbegin',html);
   
  } 

  document.querySelectorAll('table  tr').forEach( item=>{
    item.addEventListener('click',(e)=>{
    
    console.log(1);
  });
});

 
   document.querySelector('#button').addEventListener('click',()=>{
    let key=document.getElementById('input').value;
    console.log(key); 
    ipc.send('asynchronous-message',key);
  
    ipc.on('asynchronous-reply',(event,args)=>{
      console.log( document.querySelector('table tbody tr').innerHTML);
      getfile(args);
      //shell.openItem(`${folder}${args}`);
      //shell.openPath(`C:\\ Users\\ Bhaskar Sengupta\\ Desktop\\ electron projects\\ files\\ ${args}`)
    shell.openPath("C:\\Users\\Bhaskar Sengupta\\Desktop\\electron projects\\files\\"+args)
    }

    )

    });
  
