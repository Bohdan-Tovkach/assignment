<template>
<section id="sign-up">
	<div class="container">
		<h2>Register to get a work</h2>
		<h4>Attention! After successful registration and alert, update the list of users in the block from the top</h4>
		<v-row class="form" style="vertical-align: baseline;">
			<v-col class="form-input" cols="12" sm="6" md="4">
				<v-text-field 
					v-model="name"
					label="Your name"
					outlined 
					required
					@input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
					:error-messages="nameErrors"
				></v-text-field>
			</v-col>
			<v-col class="form-input" cols="12" sm="6" md="4">
				<v-text-field 
					v-model="email"
					label="Your Email" 
					outlined 
					required
					@input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
					:error-messages="emailErrors"
				></v-text-field>
			</v-col>
			<v-col class="form-input" cols="12" sm="6" md="4">
				<v-text-field
					v-model="phone"
					label="+38(___) ___ __ __"
					outlined
					required
					@input="$v.phone.$touch()"
                    @blur="$v.phone.$touch()"
					:error-messages="phoneErrors"
				></v-text-field>
			</v-col>
			<v-col class="form-input" cols="12" sm="6">
				<v-select
					v-model="position"
					label="Select your position"
					outlined
					required
					:items="positions"
					item-text="name"
					item-value="id"
                    @blur="$v.position.$touch()"
					:error-messages="positionErrors"
					offset-y
				></v-select>
			</v-col>
			<v-col class="form-input" cols="12" sm="6">
				<div class="file-input">
					<div class="input-wrapper">
						<div class="input">
							<input 
								@change="getImage($event)"
								type="file" accept="image/jpg, image/jpeg"
								ref="fileInput" 
								style="display: none;"
								@input="$v.image.$touch()"
								@blur="$v.image.$touch()"
							/>
							<span class="input-hint">Upload photo</span>
						</div>
						<a  
							class="upload-button" 
							@click="$refs.fileInput.click()"
							>Upload
						</a>
					</div>
					<span :style="`${hintColor}`" class="input-error">{{ 'File format must be jpg/jpeg up to 5 MB, the minimum size of 70x70px' }}</span>
				</div>
			</v-col>
			<v-col cols="12" sm="12" class="sign-btn-wrapper">
				<button :disabled="!valid" class="sign-up-button" @click="signUp()">Sign Up</button>
			</v-col>
		</v-row>
	</div>
</section>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { isEmail, isValidImage, isPhone } from '../abz-validator'

export default {
	props: [
		'positions',
		'token'
	],
	mixins: [validationMixin],
	data: () => ({
		name: null,
		email: null,
		phone: null,
		image: null,
		position: null,
	}),
	validations: {
		name: {
			required,
			minLength: minLength(2),
			maxLength: maxLength(60)
		},
		email: {
			isEmail,
			minLength: minLength(2),
			maxLength: maxLength(100)
		},
		phone: {
			isPhone,
		},
		image: {
			isValidImage
		},
		position: {
			required
		}
	},
	computed: {
		/* eslint-disable */
		nameErrors() {
			const errors = []
			const nameError = `Must be between ${this.$v.name.$params.minLength.min} and ${this.$v.name.$params.maxLength.max} letters`
			if(!this.$v.name.$dirty) return errors
			!this.$v.name.required && errors.push(nameError)
			!this.$v.name.minLength && errors.push(nameError)
			!this.$v.name.maxLength && errors.push(nameError)
			return errors
		},
		emailErrors() {
			const errors = []
			const emailLengthErr = `Must be between ${this.$v.email.$params.minLength.min} and ${this.$v.email.$params.maxLength.max} symbols`
			if (!this.$v.email.$dirty) return errors
			!this.$v.email.minLength && errors.push(emailLengthErr)
			!this.$v.email.maxLength && errors.push(emailLengthErr)
			!this.$v.email.isEmail && errors.push('E-mail must be a valid according to RFC2822')
			return errors
		},
		phoneErrors() {
			const errors = []
			if(!this.$v.phone.$dirty) return errors
			!this.$v.phone.isPhone && errors.push('Number should start with code of Ukraine +380')
			return errors
		},
		positionErrors() {
			const errors = []
			if(!this.$v.position.$dirty) return errors
			!this.$v.position.required && errors.push('Select position')
			return errors
		},
		imageErrors() {
			const errors = []
			if(!this.$v.image.$dirty) return errors
			!this.$v.image.isValidImage && errors.push('File format must be jpg/jpeg up to 5 MB, the minimum size of 70x70px')
			return errors
		},
		valid() {
			return this.$v.$invalid === false && this.$v.$dirty === true
		},
		hintColor() {
			console.log(this.imageErrors)
			return this.imageErrors.length > 0 ? 'color: #ff5252;' : 'color: #8d8c8c;'
		},
	},
	methods: {
		isValidImage,
		signUp() {
			if(this.valid) {
				this.submit()
				this.reset()
				return
			}
			return
		},
		getImage(e) {
			let file = e.target.files
			if(!file.length) return 
			this.image = file[0]
			this.isValidImage(this.image)
		},
		reset() {
			this.$v.$reset(),
			this.name = null,
			this.email = null,
			this.phone = null,
			this.image = null,
			this.position = null
		},
		submit() {
			console.log('Post request')
			let formData = new FormData()
			formData.append('position_id', this.position)
			formData.append('name', this.name)
			formData.append('email', this.email)
			formData.append('phone', this.phone)
			formData.append('photo', this.image)
			this.postUser(formData)
		},
		async postUser(formData) {
			try {
				let request = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
					method: 'POST',
					body: formData,
					headers: {
						'Token': this.token,
					},
				})
				let response = await request.json()
				if(response.success){
					console.log(response)
					this.$emit('reloadUsers')
					return
				}
				console.log(response)
			} catch(error) {
				console.log(error)
			}
		}
	},
}
</script>

<style scoped>
	h2 {
		color: #070707;
	}
	section {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	section .container {
		display: block;
		padding: 0 25px;
		text-align: center;
	}
	.container .form {
		display: flex;
		padding: 15px 0 0 0;
	}
	.form-input {
		vertical-align: top;
		display: inline-block;
	}
	.container > h2, h4 {
		padding: 10px 0;
	}
	.file-input {
		height: 55px;
		width: auto;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.input-wrapper {
		display: flex;
		width: 100%;
	}
	.input {
		width: 68%; 
		height: 55px; 
		border-radius: 3px 0 0 3px; 
		border-bottom: 1px solid #b7b7b7;
		border-left: 1px solid #b7b7b7;
		border-top: 1px solid #b7b7b7;
		font-size: 16px; 
		color: #8d8c8c; 
		text-align: left;
	}
	.input-hint {
		line-height: 55px; 
		overflow: hidden; 
		display: block; 
		padding-left: 10px; 
		width: 100%; 
		height: 55px;
	}
	.input-error {
		margin-left: 5px; 
		font-size: 11px; 
		text-align: left;
		padding: 5px 10px;
	}
	.upload-button {
		display: block;
		transition: background-color 0.2s;
		color: #ef6c00;
		line-height: 54px;
		font-weight: 600;
		width: 32%;
		height: 55px;
		border-radius: 0 3px 3px 0;
		border: 2px solid #ef6c00;
	}
	.upload-button:hover {
		background-color: #fee6d2;
	}
	.sign-btn-wrapper {
		display: flex;
		justify-content: center;
	}
	.sign-up-button {
		transition: background-color 0.3s;
		width: 250px;
		height: 40px;
		background-color: #ef6c00;
		line-height: 40px;
		color: white;
		border-radius: 3px;
		font-weight: 600;
		margin: 30px 0;
		text-align: center;

	}
	.sign-up-button:disabled, 
	.sign-up-button:disabled:hover {
		background-color: #cccccc;
		color: #666666;
	}
	.sign-up-button:hover {
		background-color: #fc831f;
	}
</style>
