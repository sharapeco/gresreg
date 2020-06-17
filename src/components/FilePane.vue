<template>
	<section class="file-pane">
		File/Directory List
		<ul class="file-list">
			<li
				v-for="path in targets"
				:key="path"
			>
				{{ path }}
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	name: 'FilePane',
	props: {
		targets: {
			type: Array,
			required: true
		}
	}
}
</script>
