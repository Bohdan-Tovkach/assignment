<template>
	<section id="assignment">
		<div class="container">
			<h1>Test assignment for Frontend Developer position</h1>
			<p>
				We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. 
				Please be patient, we consider and respond to every application that meets minimum requirements. 
				We look forward to your submission. Good luck!
			</p>
			<a href="#sign-up" class="sign-up-button">Sign Up</a>
		</div>
	</section>
</template>

<style scoped>
	#assignment p {
		font-size: 18px;
		line-height: 26px;
		font-family: 'Source Sans Pro', sans-serif;
		font-weight: 400;
	}
	.container {
		flex-direction: column;
		justify-content: center;
		min-height: 540px;
		padding: 45px 25px;
		display: flex;
		color: #fff;
	}
	section {
		margin-top: 56px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		background-image: url("../images/bg-1.jpg");
		background-position: 0 25%;
		background-size: 100% auto; 
		background-repeat: no-repeat;
		overflow: hidden;
	}
	@media (max-width:990px) {
		section {
			background-image: url("../images/bg-1-2.jpg");
			background-size: auto 100%; 
			min-height: 640px;
		}
		.container {
			min-height: auto;
		}
	}
	@media (max-width:525px) {
		section {
			background-image: url("../images/bg-1-3.jpg");
			text-align: center;
			background-position: 25% 0%; 
			background-size: auto 100%; 
		}
		.container {
			align-items: center;
		}
	}
	.container h1, p {
		max-width: 450px;
	}
	.sign-up-button {
		display: block;
		transition: background-color 0.3s;
		width: 250px;
		height: 40px;
		background-color: #ef6c00;
		line-height: 40px;
		color: white;
		border-radius: 3px;
		text-align: center;
		margin: 30px 0;
		text-decoration: none;
	}
	.sign-up-button:hover {
		background-color: #fc831f;
	}
</style>