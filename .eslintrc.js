module.exports = {
	"extends": ["standard", "plugin:vue/recommended"],
	"plugins": ["import", "vue"],
	"rules": {
		"indent": ["error", "tab"],
		"no-tabs": ["error", { "allowIndentationTabs": true }],
		"vue/html-indent": "off"
	}
};