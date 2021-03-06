import { app, BrowserWindow } from 'electron'
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'
import { enableLiveReload } from 'electron-compile'

let mainWindow

const isDevMode = process.execPath.match(/[\\/]electron/)

if (isDevMode) {
  enableLiveReload({ strategy: 'react-hmr' })
}

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    name: 'Blink Desktop',
    width: 800,
    height: 680,
    autoHideMenuBar: true,
    icon: `${__dirname}/assets/icon.png`
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)
  if (isDevMode) {
    await installExtension(REACT_DEVELOPER_TOOLS)
  }
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})
