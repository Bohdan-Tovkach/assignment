<template>
<v-navigation-drawer
	id="mobile-nav"
	v-if="user"
	v-model="drawerState" 
	fixed
	>
	<v-list-item>
		<v-list-item-content>
			<v-avatar size="65" class="avatar mt-3 mb-3">
				<img :src="user.photo" />
			</v-avatar>
			<v-list-item-title class="title">
				{{ user.name }}
			</v-list-item-title>
			<v-list-item-subtitle class="subtitle">
				{{ user.email }}
			</v-list-item-subtitle>
		</v-list-item-content>
	</v-list-item>
	<v-divider></v-divider>
	<div class="nav">
		<a
			v-for="item in navigation"
			:key="item.title"
			href="#"
			>{{ item.title }}
		</a>
	</div>
</v-navigation-drawer>
</template>

<script>
export default {
	props: [
		'user',
		'navigation',
		'drawer'
	],
	data: () => ({
		drawerState: null,
	}),
	watch: {
		drawer(val) {
			this.drawerState = val
		},
		drawerState(val) {
			this.drawerState !== this.drawer 
				? this.$emit('toggleDrawer', val) 
				: false
		}
	},
	mounted() {
		this.drawerState = this.drawer
	},
}
</script>

<style scoped>
	.avatar {
		display: flex;
		justify-content: flex-start;
	}
	.nav {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		padding: 0 16px;
	}
	.nav > a {
		padding: 8px 0;
		text-decoration: none;
		color: #676767;
	}
	.nav > a:hover {
		color: #ef6c00;
	}
	@media (max-width: 5000px){
		.v-navigation-drawer {
			display: none;
		}
	}
	@media (max-width: 800px) {
		.v-navigation-drawer {
			display: block;
		}
	}
</style>