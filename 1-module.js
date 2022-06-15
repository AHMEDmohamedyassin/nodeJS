const first_name = 'ahmed'

const say_hello = ()=>{
    console.log(`hello ${first_name}`)
}

module.exports = {first_name , say_hello}

module.exports.second_name = 'mohamed'

console.log(module)