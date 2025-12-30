const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWin() {
  const win = new BrowserWindow({
    width: 1000, height: 700,
    webPreferences: { nodeIntegration: true, contextIsolation: false }
  });
  win.loadFile('index.html');
  win.removeMenu(); // إخفاء القائمة العلوية
}
app.whenReady().then(createWin);