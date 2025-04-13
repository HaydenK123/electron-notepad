const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

const { ipcMain } = require('electron');
const fs = require('fs');

ipcMain.on('save-text', (event, text) => {
  fs.writeFile('note.txt', text, (err) => {
    if (err) console.error('Failed to save file:', err);
    else console.log('Note saved to note.txt');
  });
});
