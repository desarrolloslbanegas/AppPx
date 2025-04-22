// routes/index.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/datosController');
const userValidation = require('../middlewares/userValidation');
const loginValidation = require('../middlewares/loginValidation');



router.get('/login', loginValidation, controller.login);
router.post('/login',loginValidation, controller.loginPost);

router.get('/ping-db', async (req, res) => {
  try {
    console.log("Conexión DB");
    await pool.query('SELECT 1');
    res.send('DB pinged successfully');
  } catch (err) {
    res.status(500).send('DB error: ' + err.message);
  }
});


router.use(userValidation);

router.get('/', controller.nuevaEntrada);

module.exports = router;
