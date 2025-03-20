'use strict';

const path = require('path');
const { app, BrowserWindow } = require('electron');

function main() {
  let mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    width: 520,
    height: 650,
    frame: false
  });

  // mainWindow.webContents.openDevTools();
  mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));
}

app.on('ready', main);
app.on('window-all-closed', () => {
  app.quit();
});
