const path = require('path')

console.log('the path.sep : ' , path.sep)

const filepath = path.join('folder1' , 'folder2' , 'text.txt')
console.log('the filepath : ' , filepath)

const base = path.basename(filepath)
console.log('the base : ' , base)

const absolute = path.resolve(__dirname , 'folder1' , 'folder2' , 'text.txt')
console.log('the absolute : ' , absolute)

console.log('the directory name : ',__dirname)
console.log('the file name : ' , __filename)