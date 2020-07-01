module.exports = {
	"extends": [
		"standard",
		"plugin:vue/recommended"
	],
	"plugins": [
		"import",
		"vue"
	],
	"rules": {
		"indent": ["error", "tab", { SwitchCase: 1 }],
		"no-tabs": ["error", { "allowIndentationTabs": true }],
		"vue/html-indent": "off"
	}
};