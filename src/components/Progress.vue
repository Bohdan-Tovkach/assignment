<template>
<div v-if="state" class="progress">
	<v-progress-circular
		indeterminate
		color="grey darken-1"
	></v-progress-circular>
</div>
</template>

<script>
export default {
	props: ['state'],
}
</script>

<style scoped>
	.progress {
		position: fixed; 
		top: 70px; 
		right: 5px; 
		display: block;
	}
</style>