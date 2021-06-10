// Chargement des modules
const express = require('express');
const { response } = require('express');

// Déclaration de la fonction middleware
const serviceController = require('../controllers/serviceController')

// Déclaration du système de routage
const router = express.Router();

// Définition de la route

router.post('/service', serviceController.createVagrantFile)

// Export du module router
module.exports = router;