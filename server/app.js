const express = require('express')
const app = express();
const dotenv = require('dotenv')

// Configure le chemin vers .env
dotenv.config({
	path : './.env'
})

// Lancement de la base de donn\u00e9es
require("./config/db")

// Lancement du serveur
require("./config/server")(app)

// Lancement du routeur
require("./config/router")(app)
