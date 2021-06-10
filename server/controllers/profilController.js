const { request, response } = require('express')
const myqsl = require('mysql')

const db = myqsl.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE    // Dans .env, on met les variables à sécuriser et on l'appel ici
});

exports.getDatas = async(request, response) => {
    var id = request.userID
    db.query('SELECT DISTINCT u.profil, u.iduser, u.lastname, u.firstname, u.email, u.phone, u.position FROM users u WHERE u.iduser = ?', [id] , async (error, results) => {
        var array = Object.values(JSON.parse(JSON.stringify(results)))
        response.send(array[0])
    })
}