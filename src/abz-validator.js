export const isPhone = (number) => /^[+]{0,1}380([0-9]{9})$/.test(number)
// eslint-disable-next-line
export const isEmail = (email) => /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(email)
export const isValidImage = (image) => {
	return new Promise((resolve) => {
		if(image.size > 5000000) resolve(false)
		let reader = new FileReader()
		reader.readAsDataURL(image)
		reader.onload = (e) => {
			let image = new Image()
			image.src = e.target.result
			image.onload = function() {
				if (this.height < 70 || this.width < 70) resolve(false)
				resolve(true)
			}
		}
	})
	.then(val => {return val})
	.catch(err => {return err})
}
