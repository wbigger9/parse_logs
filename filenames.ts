// Node.js program to demonstrate the 
// fs.promise.readdir() Method 

// Importing File System module
import fs from 'fs/promises'
// The process.cwd() gives current
// working directory

export const filenames = async () => {
fs.readdir('./log')

	// If promise resolved and
	// data are fetched
	.then(filenames => {
		for (let filename of filenames = filenames.filter(filename => filename.startsWith('Data'))) {
			console.log(filename)
		}
	})

	// If promise is rejected
	.catch(err => {
		console.log(err)
	})
}