<template>
<div>
	<v-app-bar id="desktop-nav" fixed flat>
		<div class="container">
			<ABZLogo class="logo"></ABZLogo>
			<div class="navigation">
				<a href="#about" class="text-capitalize" text>About me</a>
				<a href="#relationships" class="text-capitalize" text>Relationships</a>
				<a href="#requirements" class="text-capitalize" text>Requirements</a>
				<a href="#users" class="text-capitalize" text>Users</a>
				<a href="#sign-up" class="text-capitalize" text>Sign Up</a>
			</div>
			<CurrentUser :user="user"></CurrentUser>
			<v-btn class="line-menu" @click="toggle()" icon>
				<LineMenu></LineMenu>
			</v-btn>
		</div>
	</v-app-bar>
	<MobileNav
		@toggleDrawer="drawer = !drawer"
		:user="user"
		:navigation="navigation"
		:drawer="drawer"
	></MobileNav>
</div>
</template>

<script>
import ABZLogo from './svg/black-logo.vue'
import LineMenu from './svg/line-menu.vue'
import CurrentUser from './CurrentUser.vue'
import MobileNav from './MobileNav.vue'

export default {
	/* eslint-disable */
	props: ['user'],
	data: () => ({
		minSize: 850,
		drawer: false,
		navigation: [
          { title: 'About me'},
          { title: 'Relationships'},
          { title: 'Requirements'},
		  { title: 'Users'},
		  { title: 'Sign Up'},
        ],
	}),
	methods: {
		toggle() {
			this.drawer = !this.drawer
		}
	},
	components: {
		ABZLogo,
		CurrentUser,
		LineMenu,
		MobileNav
	},
}
</script>

<style scoped>
	.line-menu {
		display: none;
	}
	@media (max-width: 800px) {
		.line-menu {
			display: block;
		}
		.navigation {
			display: none!important;
		}
	}
	.v-app-bar {
		width: 100%!important;
	}
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px;
	}
	.navigation {
		display: flex;
		justify-content: space-between;
		width: 52%;
	}
	.navigation > a {
		font-size: 16px;
		text-decoration: none;
		color: #000;
	}
	.navigation> a:hover {
		color: #ef6c00;
	}
	.logo {
		width: 11%;
	}
</style>