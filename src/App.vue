<template>
	<div id="app">
		<SearchPane />
		<FilePane :targets="targets" />
		<PreviewPane />
	</div>
</template>

<script>
import SearchPane from './components/SearchPane'
import FilePane from './components/FilePane'
import PreviewPane from './components/PreviewPane'

export default {
	name: 'App',
	components: {
		SearchPane,
		FilePane,
		PreviewPane
	},
	data () {
		return {
			targets: []
		}
	}
}
</script>

<style>
* {
	box-sizing: border-box;
}
html, body {
	margin: 0;
	padding: 0;
}

#app {
	width: 100vw;
	height: 100vh;
	min-width: 460px;
	min-height: 260px;

	display: grid;
	grid-template-rows: 200px 1fr;
	grid-template-columns: 360px 1fr;

	font-family: BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #333;
}

.search-pane {
	grid-row: 1;
	grid-column: 1;
}
.file-pane {
	grid-row: 2;
	grid-column: 1;
}
.preview-pane {
	grid-row: 1 / span 2;
	grid-column: 2;
}
</style>
