const {readFileSync , writeFileSync , readFile , writeFile} = require('fs')

writeFileSync('./folder1/folder2/text.txt' , 'hello form writeFileSync')

console.log(readFileSync('./folder1/folder2/text.txt' , 'utf-8' ))

writeFile('./folder1/folder2/text.txt' , ' hello writeFile ' , { flag : 'a' } , (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)

    readFile('./folder1/folder2/text.txt' , 'utf-8' , (err , result) => {
        if(err){
            console.log(err)
            return
        }
        console.log(result)
    })
})