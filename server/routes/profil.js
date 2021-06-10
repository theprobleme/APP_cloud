// Chargement des modules
const express = require('express');
const { response } = require('express');

// Déclaration de la fonction middleware
const profilController = require('../controllers/profilController')

// Déclaration du système de routage
const router = express.Router();

// Définition de la route

router.get('/profil', profilController.getDatas)

// Export du module router
module.exports = router;