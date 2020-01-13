<template>
<section id="requirements" :style="`background-image:url(${files.images['bg-2']})`">
	<div class="container">
		<h2>General requirements for the test task</h2>
		<div class="content">
			<div class="text">
				<p v-for="(string, index) in paragraphs"
					:key="index"
				>{{ string }}</p>
			</div>
			<div class="img" :style="`background-image:url(${files.images['man-laptop-v1']})`"></div>
		</div>
	</div>
</section>
</template>

<script>
import { files } from '../content'
export default {
	data: () => ({
		files: files,
		paragraphs: [
			`Users want to find answers to their questions quickly and data shows that people really care about how 
			quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches 
			in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.`,
			`If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. 
			Think about how performance affects the user experience of your pages and consider measuring a variety of 
			real-world user-centric performance metrics.`,
			`Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant 
			contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome 
			User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under 
			real-world conditions.`
		]
	}),
}

</script>

<style scoped>
	#requirements p {
		font-size: 16px;
		line-height: 22px;
		font-family: 'Source Sans Pro', sans-serif;
		font-weight: 400;
	}
	.img {
		width: 46%;
		height: 380px;
		background-size: contain;
		margin-top: 20px;
	}
	.text {
		width: 48%;
		margin: 30px 0 0 0;
	}
	@media(max-width: 600px) {
		section {
			background-position: 55% 40%;
		}
		.content {
			flex-direction: column-reverse;
			align-items: center;
			text-align: center;
		}
		.img {
			width: 95%;
			height: 235px;
			background-position: 40% 50%;
		}
		.text {
			width: 100%;
		}
	}
	section {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 550px;
		background-position: 55% 40%;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.content {
		justify-content: space-between;
		display: flex;
	}
	.container {
		padding: 0 25px; 
		max-width: 1170px;
		color: #fff;
		display: flex;
		flex-direction: column;
	}
	.container h2 {
		text-align: center;
		margin: 25px 0;
	}
</style>