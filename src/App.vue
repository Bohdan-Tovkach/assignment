<template>
	<v-app class="main">
		<Header :user="currentUser"></Header>
		<Progress :state="spinner"></Progress>
		<Assignment></Assignment>
		<About></About>
		<Relationships></Relationships>
		<Requirements></Requirements>
		<Users 
			ref="usersComponent"
			@listenRequest="spinner = $event"
		></Users>
		<SignUp
			@reloadUsers="reload()"
			:positions="positionList"
			:token="token"
		></SignUp>
		<Footer></Footer>
	</v-app>
</template>

<script>
import { Static } from './content'
import Header from './components/Header.vue'
import Assignment from './components/Assignment.vue'
import About from './components/About.vue'
import Relationships from './components/Relationships.vue'
import Requirements from './components/Requirements.vue'
import Users from './components/Users.vue'
import SignUp from './components/Sign-up.vue'
import Footer from './components/Footer.vue'
import Progress from './components/Progress.vue'

export default {
	data: () => ({
		files: Static,
		currentUser: null,
		positionList: null,
		token: null,
		spinner: false,
	}),
	methods: {
		/* eslint-disable */
		async getRequest(query) {
			try	{
				this.spinner = true
				let request = await fetch(query)
				this.spinner = false
				return await request.json()
			} catch(error) {
				this.spinner = false
				console.log(error)
			}
		},
		async getUserId() {
			let response = await this.getRequest('https://frontend-test-assignment-api.abz.agency/api/v1/users/1')
			this.currentUser = response.user
		},
		async getToken() {
			let response = await this.getRequest('https://frontend-test-assignment-api.abz.agency/api/v1/token')
			this.token = response.token
		},
		async getPosition() {
			let response = await this.getRequest('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
			this.positionList = response.positions
		},
		reload() {
			this.$refs.usersComponent.userList = []
			this.$refs.usersComponent.page = 0
			this.$refs.usersComponent.getUsers()
		}
	},
	mounted() {
		this.getPosition()
		this.getUserId()
		this.getToken()
	},
	components: {
		Header,
		Assignment,
		About,
		Relationships,
		Requirements,
		Users,
		SignUp,
		Footer,
		Progress,
	}
}
</script>

<style>
	.v-list-item:hover {
		background-color: #fce2cc;
	}
	@font-face {
		font-family: 'Overpass SemiBold';
		font-style: normal;
		src: url("../public/Overpass-SemiBold.ttf") format("truetype");
	}
	@font-face {
		font-family: 'Source Sans Pro Regular';
		font-style: normal;
		src: url("../public/SourceSansPro-Regular.ttf") format("truetype");
	}
	@font-face {
		font-family: 'Source Sans Pro Bold';
		font-style: normal;
		src: url("../public/SourceSansPro-Bold.ttf") format("truetype");
	}
	/* desktop resolution */
	html {
		scroll-behavior: smooth;
	}
	.main {
		background: #fff!important;
	}
	.main .container {
		max-width: 1170px;
	}
	section {
		margin-top: 105px;
	}
	h1 {
		font-size: 50px;
		line-height: 60px;
		padding: 5px 0 15px;
		font-family: "Overpass SemiBold", sans-serif;
	}
	h2 {
		font-size: 42px;
		line-height: 51px;
		padding: 5px 0 30px;
		font-family: "Overpass SemiBold", sans-serif;
	}
	h3 {
		font-size: 26px;
		line-height: 31px;
		padding: 10px 0;
		font-family: "Overpass SemiBold", sans-serif;
		color: #000000;
	}
	h4 {
		font-size: 22px;
		line-height: 26px;
		font-family: "Overpass SemiBold", sans-serif;
		color: #000000;
	}
	h5 {
		font-family: 'Source Sans Pro Bold', sans-serif;
		font-size: 22px;
		line-height: 21px;
		padding: 8px 0;
		color: #000000;
	}
	p {
		font-size: 18px;
		line-height: 26px;
		font-family: 'Source Sans Pro Regular', sans-serif;

	}
	
	.p2 {
		font-size: 16px;
		line-height: 22px;
		font-family: 'Source Sans Pro Regular', sans-serif;
	}
	.p3 {
		font-size: 14px;
		line-height: 20px;
		font-family: 'Source Sans Pro Regular', sans-serif;
	}
	a {
		transition: color 0.2s;
	}

	/* tablet rosolution */
	@media(max-width: 801px) {
		h1 {
			font-size: 42px;
			line-height: 51px;
		}
	}

	/* mobile rosolution */
	@media(max-width: 480px) {
		h1 {
			font-size: 30px;
			line-height: 36px;
		}
		h2 {
			font-size: 26px;
			line-height: 31px;
		}
		h3 {
			font-size: 22px;
			line-height: 26px; 
		}
		h5 {
			font-size: 16px;
			line-height: 20px;
		}
	}
</style>
