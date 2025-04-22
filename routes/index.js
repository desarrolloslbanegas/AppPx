// routes/index.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/datosController');
const userValidation = require('../middlewares/userValidation');
const loginValidation = require('../middlewares/loginValidation');
const { Pool } = require('pg');
const { body, validationResult } = require('express-validator');





router.get('/login', loginValidation, controller.login);
router.post('/login',loginValidation, controller.loginPost);

router.get('/ping-db', controller.testdb);


router.use(userValidation);

router.get('/', controller.nuevaEntrada);

module.exports = router;
