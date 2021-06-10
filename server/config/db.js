const myqsl = require('mysql');

// Connexion à la base de donnée
const db = myqsl.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE    // Dans .env, on met les variables à sécuriser et on l'appel ici
});

// Vérification de la connexion à la base de donnée
db.connect((e) => {
    if (e) {
        console.log(e)
    } else {
        console.log("MYSQL Connected")
    }
})
