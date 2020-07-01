import { BrowserWindow } from 'electron'
import {
	createProtocol
	/* installVueDevtools */
} from 'vue-cli-plugin-electron-builder/lib'
import global from './global'

export class Gresreg {
	constructor () {
		this.win = this.createWindow()
		this.ipc = {}
	}

	createWindow () {
		// Create the browser window.
		let win = new BrowserWindow({
			width: 800,
			height: 600,
			webPreferences: {
				// Use pluginOptions.nodeIntegration, leave this alone
				// See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
				nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
			}
		})

		if (process.env.WEBPACK_DEV_SERVER_URL) {
			// Load the url of the dev server if in development mode
			win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
			if (!process.env.IS_TEST) win.webContents.openDevTools()
		} else {
			createProtocol('app')
			// Load the index.html when not in development
			win.loadURL('app://./index.html')
		}

		win.on('closed', () => {
			win = null
		})

		return win
	}

	/**
	 *
	 * @param {string[]} files 開くファイルのリスト
	 */
	handleFiles (files) {
		while (global.filesToOpen.length > 0) {
			files.unshift(global.filesToOpen.pop())
		}
		console.log('[Gresreg] Open file: ', files.join(' | '))
	}
}