'use strict'

import { app, protocol, globalShortcut } from 'electron'
import { Gresreg } from './gresreg'
import global from './global'

const isDevelopment = process.env.NODE_ENV !== 'production'

let gresreg

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
	{ scheme: 'app', privileges: { secure: true, standard: true } }
])

/**
 * 生の argv をちゃんとファイルごとに分割する
 * @param {string[]} argv 引数リスト
 * @param {string} cws 作業ディレクトリ
 */
function extractFilesFromArgv (argv, cwd) {
	console.log('extractFilesFromArgv at ', cwd, ' / Files: ', argv.join(' | '))
	return argv
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (gresreg === null) {
		gresreg = new Gresreg()
	}
})

app.on('second-instance', (event, argv, cwd) => {
	console.log('Second instance was initialized.')
	const files = extractFilesFromArgv(argv, cwd)
	gresreg.handleFiles(files)
})

app.on('open-file', (event, path) => {
	event.preventDefault()
	if (gresreg) {
		gresreg.handleFiles([path])
	} else {
		global.filesToOpen.push(path)
	}
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
	if (isDevelopment && !process.env.IS_TEST) {
		// Install Vue Devtools
		// Devtools extensions are broken in Electron 6.0.0 and greater
		// See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
		// Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
		// If you are not using Windows 10 dark mode, you may uncomment these lines
		// In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
		// try {
		//   await installVueDevtools()
		// } catch (e) {
		//   console.error('Vue Devtools failed to install:', e.toString())
		// }

	}
	gresreg = new Gresreg()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
	if (process.platform === 'win32') {
		process.on('message', data => {
			if (data === 'graceful-exit') {
				app.quit()
			}
		})
	} else {
		process.on('SIGTERM', () => {
			app.quit()
		})
	}
}
