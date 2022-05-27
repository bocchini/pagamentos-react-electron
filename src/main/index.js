const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

const path = require('path');

function createWindow() {
  const browerWindow = new BrowserWindow({
    width:1000, height:600,
    maximizable: false,
    resizable: false,
    webPreferences:{
      preload: path.join(__dirname, 'preloader.js'),
    }
  });
  browerWindow.loadURL(
    isDev ?'http://localhost:3000/' : `file://${path.join(__dirname), '../build/index.html'}
    `);
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
