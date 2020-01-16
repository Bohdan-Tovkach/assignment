<template>
<section id="relationships">
	<div class="container">
		<h2>About my relationships with web-development</h2>
		<div class="content">
			<div class="items"
				v-for="(item, i) in items"
				:key="i"
				>
				<div class="img" :style="item.icon"></div>
				<div class="text">
					<h3>{{ item.header }}</h3>
					<p>{{ item.text }}</p>
				</div>
			</div>
		</div>
	</div>
</section>
</template>

<script>
export default {
	data: () => ({
		items: [
			{
				header: 'I\'m in love with HTML', 
				text: `Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.`,
				icon: `background-image: url("../images/html.svg")`
			},
			{
				header: 'CSS is my best friend', 
				text: `Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document 
						written in a markup language like HTML.`,
				icon: `background-image: url("../images/css.svg")`
			},
			{
				header: 'JavaScript is my passion', 
				text: `JavaScript is a high-level, interpreted programming language. 
						It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.`,
				icon: `background-image: url("../images/javascript.svg")`
			}
		]
	})
}
</script>

<style scoped>
	h2 {
		color: #070707;
	}
	#relationships p {
		font-size: 16px;
		line-height: 22px;
		font-family: 'Source Sans Pro', sans-serif;
		font-weight: 400;
	}
	.content {
		display: flex;
		justify-content: space-between;
	}
	.items {
		width: 31%;
		justify-content: center; 
	}
	.items .img {
		background-size: contain;
		height: 115px; 
		width: 105px;
	}
	@media(max-width: 920px) {
		.content {
			align-items: center;
			flex-direction: column;
		}
		.items {
			width: 100%; 
			display: flex; 
			justify-content: center; 
			margin-top: 40px;
		}
		.items .img {
			height: 115px; 
			width: 17%;
		}
		.items .text {
			width: 65%;
		}
	}
	@media(max-width: 585px) {
		.items {
			flex-direction: column; 
			align-items: center;
			text-align: center;
		}
		.items .img { 
			width: 105px;
		}
		.items .text {
			text-align: center;
		}
	}
	.container {
		padding: 0 25px;
		display: block;
	}
	.container h2 {
		text-align: center;
	}
	section {
		display: block;
	}
	
</style>

