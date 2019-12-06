// Basic init
const electron = require('electron')
const { app, BrowserWindow } = electron
const args = process.argv.slice(1)
const serve = args.some(val => val === '--start-dev')

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: `${__dirname}/src/preload.js`
    }
  })

  mainWindow.loadURL(serve ? 'http://localhost:1234' : `${__dirname}/build/index.html`)
  mainWindow.on('closed', () => { mainWindow = null })
})

// Quit when all windows are closed.
app.on('window-all-closed', () => app.quit())
