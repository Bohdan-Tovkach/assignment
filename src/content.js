const file = (img) => {return require(`./images/${img}`)} 

export const files = {
	images: {
		'bg-1': file('bg-1.jpg'),
		'bg-2': file('bg-2.jpg'),
		'man-mobile': file('man-mobile.svg'),
		'man-laptop-v1': file('man-laptop-v1.svg'),
		'html': file('html.svg'),
		'css': file('css.svg'),
		'js': file('javascript.svg'),
	},
}