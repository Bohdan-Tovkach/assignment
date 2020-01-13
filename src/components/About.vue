<template>
<section id="about">
	<div class="container">
		<h2>Let's get acquainted</h2>
		<div class="content">
			<div class="img"></div>
			<div class="text">
				<h3>I am cool frontend developer</h3>
				<div>
					<p>When real users have a slow experience on mobile, they're much less likely to find what they are looking 
						for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially 
						when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.</p>
					<p>Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.</p>
					<a href="#sign-up" class="sign-up">Sign Up</a>
				</div>
			</div>
		</div>
	</div>
</section>
</template>

<style scoped>
	h2 {
		color: #070707;
	}
	#about p {
		font-size: 16px;
		line-height: 22px;
		font-family: 'Source Sans Pro', sans-serif;
		font-weight: 400;
	}
	.img {
			background-image: url('../images/man-mobile.svg');
			background-position: 60% 0; 
			background-size: contain;
			width: 30%;
			height: 300px;
			margin-bottom: 20px;
		}
	.text {
		width: 65%;
	}
	@media (max-width: 620px) {
		.content {
			display: flex;
			align-items: center;
			text-align: center;
			flex-wrap: wrap;
			flex-direction: column;
		}
		.img {
			width: 85%;
			height: 270px;
			background-position: 50% 60%;
		}
		.text {
			width: 100%;
		}
	}
	h2 {
		text-align: center;
	}
	.container {
		padding: 0 25px;
	}
	.content {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	a.sign-up {
		color: #ef6c00;
		font-size: 22px;
		font-weight: 700;
		transition: color 0.3s;
		text-decoration: none;
	}
	a.sign-up:hover {
		color: #fc831f;
	}
</style>