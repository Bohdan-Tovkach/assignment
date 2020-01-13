<template>
<footer>
	<div class="container">
		<div class="content">
			<Logo></Logo>
			<div>
				<ul class="nav-list">
					<li><a href="#about">About me</a></li>
					<li><a href="#relationships">Relationships</a></li>
					<li><a href="#requirements">Requirements</a></li>
					<li><a href="#users">Users</a></li>
					<li><a href="#sign-up">Sign Up</a></li>
				</ul>
			</div>
		</div>
		<hr />
		<div class="content">
			<div style="display: flex;">
				<ul>
					<li class="contacts-logo"><Mail class="mr-2"></Mail><a href="#">work.of.future@gmail.com</a></li>
					<li class="contacts-logo"><CellPhone class="mr-2"></CellPhone><a href="#">+38 (050) 789 24 98</a></li>
					<li class="contacts-logo"><Phone class="mr-2"></Phone><a href="#">+38 (095) 556 08 45</a></li>
				</ul>
			</div>
			<div class="nav-list">
				<ul>
					<li><a href="#">News</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Partners</a></li>
					<li><a href="#">Shop</a></li>
				</ul>
				<ul>
					<li><a href="#">Overview</a></li>
					<li><a href="#">Design</a></li>
					<li><a href="#">Code</a></li>
					<li><a href="#">Collaborate</a></li>
				</ul>
				<ul>
					<li><a href="#">Tutorials</a></li>
					<li><a href="#">Resources</a></li>
					<li><a href="#">Guides</a></li>
					<li><a href="#">Examples</a></li>
				</ul>
				<ul>
					<li><a href="#">FAQ</a></li>
					<li><a href="#">Terms</a></li>
					<li><a href="#">Conditions</a></li>
					<li><a href="#">Help</a></li>
				</ul>
			</div>
		</div>
		<div class="content">
			<span>© abz.agency specially for the test task</span>
			<SocialBtn></SocialBtn>
		</div>
	</div>
</footer>
</template>

<script>
import SocialBtn from './svg/social.vue'
import Logo from './svg/logo.vue'
import CellPhone from './svg/cell-phone.vue'
import Phone from './svg/phone.vue'
import Mail from './svg/mail.vue'

export default {
	components: {
		SocialBtn,
		Logo,
		CellPhone,
		Phone,
		Mail
	}
}
</script>

<style scoped>
	footer {
		margin-top: 105px;
		display: flex;
		justify-content: center;
		background-color: #283593;
		color: #fff;
	}
	.content {
		display: flex; 
		flex-wrap: wrap; 
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin: 10px 0;
	}
	.contacts-logo {
		display: flex;
		align-items: center;
	}
	.contacts-logo a {
		text-decoration: none;
		padding: 0;
	}
	ul > li {
		padding: 8px 8px
	}
	hr {
		display: flex;
		height: 1px;
		background-color: #5859bd;
		border: 0;
	}
	@media (max-width: 720px) {
		li > a {
			font-size: 13px;
		}
	}
	@media (max-width: 540px) {
		.content {
			flex-direction: column-reverse;
			align-items: center;
			text-align: center;
		}
		.list, .nav-list {
			flex-direction: column;
		}
		.nav-list ul{
			display: none;
		}
		ul > li {
			padding: 0px;
		}
		ul > li > a {
			font-size: 20px;
		}
		.contacts-logo a {
			padding: 8px 0;
		}
		.contacts-logo {
			justify-content: center;
		}
		hr {
			height: 0px;
		}
	}
	.container {
		padding: 0 25px;
	}
	.nav-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		min-width: 50%;
	}
	.nav-list a {
		text-decoration: none;
	}
	ul {
		padding: 10px 0 0 0!important;
		list-style: none;
	}
	li > a {
		color: white;
	}
	li > a:hover {
		color: #ef6c00;
	}
</style>