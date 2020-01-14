<template>
	<div class="user">
		<div v-if="user" class="user-info">
			<p>{{ user.name }}</p>
			<a>{{ user.email }}</a>
		</div>
		<div v-if="user" class="avatar">
			<img v-if="user" :src="user.photo" />
		</div>
		<div>
			<a class="logo" href="#"><SignOutIcon></SignOutIcon></a>
		</div>
	</div>
</template>

<script>
import SignOutIcon from './svg/sign-out-icon.vue'
export default {
	props: ['user'],
	components: {
		SignOutIcon,
	}
}
</script>

<style scoped>
	.avatar {
		padding: 0 5px;
	}
	.avatar > img {
		border-radius: 50%;
		width: 42px;
		height: 42px;
	}
	.user {
		width: 19%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		text-align: right;
	}
	@media (max-width: 800px) {
		.user {
			display: none;
		}
	}
	.user > .user-info, .avatar {
		display: flex;
		flex-direction: column;
	}
	.logo {
		display: flex;
		align-items: center;
	}
	.user-info > * {
		width: 118px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.user-info > p {
		margin: 0px;
		font-size: 14px;
	}
	.user-info > a {
		font-size: 12px;
		color: #4c4b4b;
	}
</style>