const { Router } = require("express")

const router = Router()
const livroscontroller = require("../controllers/livroscontrollers")

router.get('/', livroscontroller.home)
router.get('/id/:id', livroscontroller.getLivro)
router.get('/genero/:genero', livroscontroller.getLivrosComGenero)
router.get('/criar', livroscontroller.criarLivro)

module.exports = router