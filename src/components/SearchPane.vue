<template>
	<section class="search-pane">
		<div class="search-group">
			<label for="search-input">Search</label>
			<input type="text" id="search-input" />
			<button type="button">Search</button>
		</div>
		<div class="search-group">
			<label for="replace-input">Replace</label>
			<input type="text" id="replace-input" />
			<button type="button">Replace</button>
		</div>
		<div class="search-option-list">
			<div class="search-option-group">
				<label>Case sensitivity</label>
				(switch component)
			</div>
			<div class="search-option-group">
				<label>RegExp</label>
				(switch component)
			</div>
			<div class="search-option-group">
				<label>Control characters</label>
				(switch component)
				<span class="help">eg. \n \t</span>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'SearchPane'
}
</script>
