<template>
	<section id="users">
		<div class="container" v-if="usersPresent">
			<h2>Our cheerful users</h2>
			<h4>Attention! Sorting users by registration date</h4>
			<div class="content">
				<v-hover #default="{ hover }"
					open-delay="600"
					v-for="(user, i) in userList"
					:key="i"
					>
					<div class="user" style="position: relative;">
						<img v-if="user.photo" :src="user.photo" :alt="user.name">
						<div class="user-info">
							<h5>{{user.name}}</h5>
							<p>{{user.position}}</p>
							<a>{{user.email}}</a>
							<p>{{user.phone}}</p>
						</div>
						<v-fade-transition>
							<v-card v-if="hover" class="user-card" elevation="8">
								<v-card-title class="justify-center">{{user.name}}</v-card-title>
								<v-card-text>
									<p>{{user.position}}</p>
									<a>{{user.email}}</a>
									<p>{{user.phone}}</p>
								</v-card-text>
							</v-card>
						</v-fade-transition>
					</div>
				</v-hover>
			</div>
			<a v-if="!lastPage" @click="getUsers()" class="button">Show more</a>
		</div>
	</section>
</template>

<script>
export default {
	data: () => ({
		userList: [],
		count: 6,
		page: 0,
		lastPage: false,
	}),
	methods: {
		async getUsers() {
			/* eslint-disable */
			try {
				this.progress(true)
				this.page ++ 
				let query = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${this.page}&count=${this.count}`
				let request = await fetch(query)
				let response = await request.json()
				this.progress(false)
				if(this.page === response.total_pages) {
					this.lastPage = true
				}
				this.sortUsers(response.users)
				this.addToUserList(response.users)

			} catch(err) {
				this.progress(false)
			}
		},
		async addToUserList(items) {
			for await(let obj of Object.keys(items)) {
				this.userList.push(items[obj])
			}
		},
		sortUsers(items) {
			Object.keys(items).sort((a, b) => {
				return items[a].registration_timestamp - items[b].registration_timestamp
			}).reverse()
		},
		progress(state) {
			this.$emit('listenRequest', state)
		}
	},
	computed: {
		usersPresent() {
			return this.userList.length > 0
		}
	},
	created() {
		this.getUsers()
	}
}
</script>

<style scoped>
	h2 {
		color: #070707;
	}
	.container {
		padding: 0 25px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
	}
	.user {
		display: flex;
		width: 31%;
		margin: 25px 0 0 0;
	}
	.user-card {
		position: absolute; 
		width: auto;
		bottom: -100px; 
		z-index: 3;
	}
	.user-info {
		margin: 15px 0 0 15px;
		max-width: 65%;
		display: block;
	}
	/* tablet resolution */
	@media(max-width: 850px) {
		.user {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
		.user-info {
			margin: 0;
			max-width: 65%;
			display: block;
		}
	}
	/* mobile resolution */
	@media(max-width: 630px) {
		.container {
			text-align: center;
		}
		.user {
			width: 100%;
		}
		.content {
			flex-direction: column;
			align-items: center;
		}
	}
	section {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.user-info > a, p, h5 {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.user-info > a, p {
		color: #4c4b4b;
		font-size: 14px;
		line-height: 20px;
		font-family: 'Source Sans Pro', sans-serif;
		font-weight: 400;
		margin: 0px!important;
	}
	.user > img {
		border-radius: 50%;
		width: 67px;
		height: 67px;
	}
	.button {
		display: block;
		transition: background-color 0.2s;
		color: #ef6c00;
		border: 2px solid #ef6c00;
		border-radius: 5px;
		font-size: 20px;
		text-align: center;
		width: 250px;
		height: 43px;
		line-height: 40px;
		font-weight: 550;
		margin: 65px 0 auto;
	}
	.button:hover {
		background-color: #fee6d2;
	}
	.v-card__text, .v-card__title {
		word-break: normal!important;
	}
</style>