const os = require('os')

const data = {
    user : os.userInfo() , 
    freemem : os.freemem(),
    totalmem : os.totalmem(),
    name : os.type(),
    release : os.release(),
    uptime : os.uptime(),
    version : os.version(),
    cpus : os.cpus()
}

console.log(data)