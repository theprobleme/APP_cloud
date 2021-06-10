const { exec } = require('child_process');


exports.createVagrantFile = async (request, response) => {

    const serviceNames = request.body.serviceNames
    const serviceNums = request.body.serviceNums
    const file = request.body
    console.log(serviceNames)
    console.log(serviceNums)

    if (serviceNames == "LAMP") {
        exec('echo lauchS5' + ' ' + serviceNums, (error, stdout, stderr) => {
            if(error) {
                console.log(error)
                console.log("Erreur à la création du service LAMP")
            }
        })
    } else {
        exec('echo lauchS7' + ' ' + serviceNums, (error, stdout, stderr) => {
            if(error) {
                console.log(error)
                console.log("Erreur à la création du service LAMP")
            }
        })
    }
}
