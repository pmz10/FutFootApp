const { app, BrowserWindow, ipcMain, Menu } = require("electron")


function createWindow() {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      minHeight: 650,
      minWidth: 825,
      titleBarOverlay: true,
          titleBarOverlay: {
              color: '#2f3241',
              symbolColor: '#74b1be'
          },
      // Make sure to add webPreferences with
      // nodeIntegration and contextIsolation
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        slashes: true,
      },
      show: false,
    });
  
    // To maximize the window
    mainWindow.maximize();
    mainWindow.show();
  }

  app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });
    
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
  