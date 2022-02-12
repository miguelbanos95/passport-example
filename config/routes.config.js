const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth.controller');
const usersController = require('../controllers/users.controller');

const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', (req, res, next) => {
  res.render('index')
})

//usamos los middleware para decirle a la ruta que si está autenticado puede hace lo siguiente:

//RUTA A 'REGISTER'
router.get('/register', authMiddleware.isNotAuthenticated, authController.register)
router.post('/register', authMiddleware.isNotAuthenticated, authController.doRegister)
//RUTA A LOGIN
router.get('/login', authMiddleware.isNotAuthenticated, authController.login)
router.post('/login', authMiddleware.isNotAuthenticated, authController.doLogin)
//HACE EL 'LOGOUT'
router.get('/logout', authMiddleware.isAuthenticated, authController.logout)
//RUTA AL PERFIL
router.get('/profile', authMiddleware.isAuthenticated, usersController.profile)

module.exports = router;