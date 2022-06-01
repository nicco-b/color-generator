const fs = require('fs')

const ColorGen = (R, G, B) => {
	const orig = `${R},${G},${B}`
	const pallette = []
	let filePath = `./color-files/${orig}`

	// create a 6 color pallette based on the RGB values
	for (let i = 0; i < 12; i++) {
		const color = `rgb(${R},${G},${B})`
		pallette.push(color)

		R = R + Math.floor((255 - R) * 0.1)
		G = G + Math.floor((255 - G) * 0.1)
		B = B + Math.floor((255 - B) * 0.1)
	}
	let fileContent = `pallette: ${pallette}`

	fs.writeFile(filePath, fileContent, err => {
		if (err) {
			console.error(err)
		}
		// file written successfully
	})
	return pallette
}

let r = 255
let g = 255
let b = 255

ColorGen(r, g, b)
