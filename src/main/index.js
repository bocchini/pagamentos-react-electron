const { app, BrowserWindow } = require('electron');

const path = require('path');

function createWindow() {
  const browerWindow = new BrowserWindow({
    //width:800, height:640,
    webPreferences:{
      preload: path.join(__dirname, 'preloader.js'),
    }
  });

  browerWindow.loadURL('http://localhost:3000/');
}
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () =>{
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () =>{
  if(process.platform !== 'darwin') app.quit();
})