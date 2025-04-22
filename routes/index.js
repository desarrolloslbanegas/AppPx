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
    const query = 'INSERT INTO public."log" VALUES (4,23);
    const result = await pool.query(query);
    
    console.log("Intento...")
  } catch (err) {
    res.status(500).send('DB error: ' + err.message);
  }
});


router.use(userValidation);

router.get('/', controller.nuevaEntrada);

module.exports = router;
