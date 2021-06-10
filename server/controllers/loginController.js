// Chargement des modules
const { request, response } = require('express')    // Express
const myqsl = require('mysql')                      // Module pour MySQL
const jwt = require('jsonwebtoken')                 // Module pour le token
const bcrypt = require('bcryptjs')                  // Module pour l'encryptage

// Connexion à la base de données
const db = myqsl.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE    // Récupération des variables d'environnement
});

// Fonction login
exports.login = async (request, response) => {

        // Déclaration des variables
        const email = request.body.email
        const password = request.body.password

        // Requêtes SQL
        db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
            if (await bcrypt.compare(password, results[0].password)) {                             // Vérification du mot de passe
                
                // Déclaration des variables pour le token
                const id = results[0].iduser                                                          
                const isadmin = results[0].position == "ADMIN"
                
                // Signature du token
                const token = jwt.sign({ id: id, isadmin: isadmin }, process.env.JWT_SECRET, {     
                    expiresIn: process.env.JWT_EXPIRE_IN,
                })

                // Paramétrage du cookie
                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    Path: "/",
                    maxAge: 1000 * 60 * 360,
                    httpOnly: true,
                    secure: false
                }

                response.cookie('jwt', token, cookieOptions)        // Génération du cookie
                response.status(200)                                // Status de la réponse
                response.send(results[0])                           // résultat

            } else {
                response.status(401)
                response.send({                                     
                    message: 'Identifiant ou mot de passe incorrect',
                })
            }
        })
}

exports.verifyToken = async (request, response, next) => {
    jwt.verify(request.cookies['jwt'], process.env.JWT_SECRET, (error, decodedToken) => {
        if (error) {
            response.status(403)
            response.send({
                message: 'Identifiant ou mot de passe incorrect',
                status: 403
            })
        } else {
            db.query('SELECT * FROM users WHERE iduser = ?', [decodedToken.id], async (error, results) => {
                response.send(results[0])
            })
        }
    })
}